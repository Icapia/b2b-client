import { Loader } from '@/components/Loader'
import { siteAtom } from '@/store/edit-site'
import { snackbarState } from '@/store/snackbar'
import { useMutation } from '@apollo/client'
import { Divider } from '@mui/material'
import { useAtom, useSetAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
	ButtonBlack,
	ButtonClose,
	ButtonDefault,
} from '../../components/Buttons'
import { ChargePoint } from '../../components/ChargePoint'
import { ChargingSiteEditForm } from '../../components/ChargingSites/ChargingSiteEdit/ChargingSiteEditForm'
import { CREATE_AND_UPDATE_SITE_GQL } from '../../graphql/gql/mutations/site-mutations.gql'
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
		console.log(form)
		try {
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
				</MainLayout>
			</>
		)
	)
}
