import { Loader } from '@/components/Loader'
import { siteAtom } from '@/store/edit-site'
import { snackbarState } from '@/store/snackbar'
import { useMutation } from '@apollo/client'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider } from '@mui/material'
import { useAtom, useSetAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
	ButtonBlack,
	ButtonClose,
	ButtonDefault,
	ButtonRemove
} from '../../components/Buttons'
import { ChargePoint } from '../../components/ChargePoint'
import { ChargingSiteEditForm } from '../../components/ChargingSites/ChargingSiteEdit/ChargingSiteEditForm'
import { CREATE_AND_UPDATE_SITE_GQL, DELETE_ONE_SITE_GQL } from '../../graphql/gql/mutations/site-mutations.gql'
import { GET_SITES_GQL } from '../../graphql/gql/queries/sites-queries.gql'
import { MainLayout } from '../../layouts/MainLayout'
import {
	getSiteAtom,
	getSiteOrganizationAtom,
	siteIdAtom,
} from '../../store/site'
import { ChargePointT } from '../../types/site-types'

export default function ChargingSite() {
	const router = useRouter()
	const { id } = router.query
	const setSiteId = useSetAtom(siteIdAtom)
	const [, setSnackbar] = useAtom(snackbarState)
	const [mounted, setMounted] = useState(false)

	const [form, setForm] = useAtom(siteAtom)

	useEffect(() => {
		setSiteId(id as string)
	}, [id])

	const [site] = useAtom(getSiteAtom)
	const [organizations] = useAtom(getSiteOrganizationAtom)
	const [request, result] = useMutation(CREATE_AND_UPDATE_SITE_GQL)
	const [isRemove, setIsRemove] = useState(false);

	const [deleteSiteMutation, deleteSite] = useMutation(DELETE_ONE_SITE_GQL);

	useEffect(() => {
		if (site.state === 'hasData') {
			setForm({
				...form,
				...site.data,
			})
		}
	}, [site])

	useEffect(() => {
		setMounted(true)
	}, [])

	const handlerAddChargePoint = () => {
		const chargepoint: ChargePointT = {
			id: null,
			siteId: null,
			chargePointHardwareId: null,
			connectors: [
				{
					id: null,
					connectorTypeName: 'Type 1',
					chargePointId: null,
					siteId: null,
					label: '',
					chargePointHardwareId: null,
					connectorId: 1,
					power: 0,
					price: form?.default_price,
				},
			],
		}

		let chargepoints = form?.chargePoints || []
		chargepoints = [...chargepoints, chargepoint]

		setForm({
			...form,
			chargePoints: chargepoints,
		})
	}

	const handlerSave = () => {
		try {
			if(
				form.location.coordinates[0] > 180 
				|| form.location.coordinates[0] < -180
			) {
				throw new Error('Longitude Must be within (-180; 180)')
			}

			if(
				form.location.coordinates[1] > 90 
				|| form.location.coordinates[1] < -90
			) {
				throw new Error('Latitude Must be within (-90; 90)')
			}

			request({
				onCompleted: () => {
					setSnackbar({
						message: 'Site Updated',
						type: 'success',
						open: true,
					})
					setTimeout(() => {
						router.push('/charging-sites')
					}, 2000)
				},
				onError: (error: Error) => {
					console.log('Error', error)
					setSnackbar({
						message: error?.message,
						type: 'error',
						open: true,
					})
				},
				variables: {
					input: {
						data: {
							organizationId: form?.organizationId,
							address: form?.address,
							id: form?.id,
							name: form?.name,
							location: {
								type: 'Point',
								coordinates: [
									form.location.coordinates[1],
									form.location.coordinates[0],
								],
							},
							zip_code: form?.zip_code,
							phone_number: form?.phone_number,
							default_price: form?.default_price,
							chargepoints: form?.chargePoints,
						},
					},
				},
				refetchQueries: () => [
					{
						query: GET_SITES_GQL,
						variables: {
							filter: {},
							sorting: [{ field: 'id', direction: 'ASC' }],
							chargePointFilter: {},
							chargePointSorting: [{ field: 'id', direction: 'ASC' }],
							connectorFilter: {},
							connectorSorting: [{ field: 'connectorId', direction: 'ASC' }],
						},
					},
				],
			})
		} catch (error: any) {
			setSnackbar({
				message: error?.message,
				type: 'error',
				open: true,
			})
		}
	}

	const handlerDiscard = () => {
		router.back()
	}

	const handleDeleteSite = async () => {
		try {
			handleCloseRemoveDialog()
			deleteSiteMutation({
				onCompleted: () => {
					setSnackbar({
						message: 'The site was successfully deleted',
						type: 'success',
						open: true,
					});
					setTimeout(() => {
						router.push('/charging-sites')
					}, 2000)
				},
				onError: (e) => {
					setSnackbar({
						message: e?.message,
						type: 'error',
						open: true,
					});
				},
				variables: {
					"input": {
						"id": id
					}
				},
				refetchQueries: () => [
					{
						query: GET_SITES_GQL,
						variables: {
							filter: {},
							sorting: [{ field: 'id', direction: 'ASC' }],
							chargePointFilter: {},
							chargePointSorting: [{ field: 'id', direction: 'ASC' }],
							connectorFilter: {},
							connectorSorting: [{ field: 'connectorId', direction: 'ASC' }],
						},
					},
				],
			})
		} catch (e: any) {
			console.error(e)
			setSnackbar({
				message: e?.message,
				type: 'error',
				open: true,
			});
		}
	}

	const handleCloseRemoveDialog = () => {
		setIsRemove(false)
	}

	const handleOpenRemoveDialog = () => {
		setIsRemove(true)
	}

	return (
		mounted && (
			<>
				<MainLayout
					name={
						site.state === 'hasData'
							? site?.data?.id
								? 'Site #' + site?.data?.id
								: 'Site'
							: 'Site'
					}
					headerChild={
						<div className='row'>
							<ButtonClose onClick={handlerDiscard}>Discard</ButtonClose>
							<ButtonDefault onClick={handlerSave}>
								Save and update
							</ButtonDefault>
						</div>
					}
				>
					{(organizations.state == 'loading' ||
						organizations.state == 'hasError') && <Loader />}
					{organizations.state == 'hasData' && (
						<ChargingSiteEditForm organizations={organizations.data} />
					)}
					<Divider orientation='horizontal' />
					<div className='connectorsList'>
						{form?.chargePoints?.map((chargepoint, index) => {
							return (
								<ChargePoint
									key={index}
									index={index}
									chargepointId={index}
									chargepoint={chargepoint}
								/>
							)
						})}
					</div>

					<ButtonBlack fullWidth onClick={handlerAddChargePoint}>
						{`+ Add new Charger`}
					</ButtonBlack>

					<ButtonRemove 
						fullWidth
						onClick={handleOpenRemoveDialog}
						className='mt-20'
					>
						<img style={{marginRight: '5px'}} src="/image/icons/trash.svg"/>
						Delete Site
					</ButtonRemove>
					<Dialog
						open={isRemove}
						onClose={handleCloseRemoveDialog}
						aria-labelledby='alert-dialog-title'
						aria-describedby='alert-dialog-description'
					>
						<DialogTitle id='alert-dialog-title'>{'Remove site'}</DialogTitle>
						<DialogContent>
							<DialogContentText id='alert-dialog-description'>
								Are you sure you want to remove the site?
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleDeleteSite} autoFocus>
								Yes
							</Button>
							<Button onClick={handleCloseRemoveDialog}>No</Button>
						</DialogActions>
					</Dialog>
				</MainLayout>
			</>
		)
	)
}
