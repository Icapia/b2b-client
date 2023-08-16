import { ButtonBlack, ButtonClose, ButtonDefault } from '@/components/Buttons'
import { ChargePoint } from '@/components/ChargePoint'
import { ChargingSiteEditForm } from '@/components/ChargingSites/ChargingSiteEdit/ChargingSiteEditForm'
import { Loader } from '@/components/Loader'
import { CREATE_AND_UPDATE_SITE_GQL } from '@/graphql/gql/mutations/site-mutations.gql'
import { MainLayout } from '@/layouts/MainLayout'
import { siteAtom } from '@/store/edit-site'
import { asyncGetOrganization } from '@/store/organization'
import { ChargePointT } from '@/types/site-types'
import { useMutation } from '@apollo/client'
import { Divider } from '@mui/material'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CreateChargingSite() {
	const [organizations] = useAtom(asyncGetOrganization)
	const [form, setForm] = useAtom(siteAtom)
	const [mounted, setMounted] = useState(false)
	const [request, result] = useMutation(CREATE_AND_UPDATE_SITE_GQL)
	const router = useRouter()

	useEffect(() => {
		setMounted(true)
	}, [])

	const handlerAddChargePoint = () => {
		const chargepoint: ChargePointT = {
			id: null,
			siteId: null,
			chargePointHardwareId: '',
			connectors: [
				{
					id: null,
					connectorTypeName: 'Type 1',
					chargePointId: null,
					siteId: null,
					label: '',
					chargePointHardwareId: '',
					connectorId: 1,
					power: 0,
					price: form?.default_price,
				},
			],
		}

		const chargepoints = form?.chargePoints || []
		chargepoints?.push(chargepoint)

		setForm({
			...form,
			chargePoints: chargepoints,
		})
	}

	const handlerSave = () => {
		try {
			request({
				onCompleted: () => {
					router.push('/charging-sites')
				},
				onError: (error: Error) => {
					console.log('Error', error)
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
			})
		} catch (error: any) {
			console.log(error?.message)
		}
	}

	const handlerDiscard = () => {
		router.back()
	}

	return (
		mounted && (
			<>
				<MainLayout
					name={'Create new Site'}
					headerChild={
						<div className='row'>
							<ButtonClose onClick={handlerDiscard}>Discard</ButtonClose>
							<ButtonDefault onClick={handlerSave}>
								Save and create
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
