import {
	ChargePointStatus,
	ChargePointT,
	ConnectorStatus,
} from '@/types/site-types'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import Sheet from '@mui/joy/Sheet'
import Table from '@mui/joy/Table'
import { IconButton, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { Status } from '../Status'

interface SiteGridRowI {
	chargepoint: ChargePointT
	initialIsOpen?: boolean
	address?: string
	site_name: string
	zip_code?: string | number
	price?: number
}

export const SiteGridRow: FC<SiteGridRowI> = ({
	chargepoint,
	initialIsOpen = false,
	address = 'Not yet',
	site_name = 'Not yet',
	zip_code = 'Not yet',
	price = '0.0',
}) => {
	const [isOpen, setIsOpen] = useState(initialIsOpen)
	const router = useRouter()
	const status: ChargePointStatus =
		(chargepoint?.status?.toLowerCase() as ChargePointStatus) || 'disconnected'

	const handleNavigate = () => {
		router.push(`/charging-sites/${chargepoint.siteId}`)
	}

	const connectors =
		chargepoint?.connectors?.map(e => `${e?.connectorTypeName}, `) ||
		'No connectors'

	return (
		<>
			<tr style={{ overflowX: 'scroll' }}>
				<td>
					<IconButton onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRight />}
					</IconButton>
				</td>
				<th>
					<Typography fontSize={15} fontWeight={500}>
						{'Charger #' + chargepoint?.id}
					</Typography>
				</th>
				<td>
					<Typography fontSize={15} fontWeight={500}>
						{address}
					</Typography>
				</td>
				<td>
					<Typography fontSize={15} fontWeight={500}>
						{site_name}
					</Typography>
				</td>
				<td>
					<Typography fontSize={15} fontWeight={500}>
						{connectors.length > 0 ? connectors : 'No connectors'}
					</Typography>
				</td>
				<td>
					<Typography fontSize={15} fontWeight={500}>
						<Status status={status} />
					</Typography>
				</td>
				<td style={{ textAlign: 'right' }}>
					<Typography fontSize={15} fontWeight={500}>
						{price + 'kW/h'}
					</Typography>
				</td>
			</tr>
			<tr style={{ overflowX: 'scroll' }}>
				<td style={{ height: 0, padding: 0 }} colSpan={8}>
					{isOpen &&
						chargepoint?.connectors &&
						chargepoint.connectors?.length > 0 && (
							<Sheet
								variant='soft'
								sx={{
									p: 0,
									m: 2,
									mb: 1,
									borderRadius: 10,
									backgroundColor: '#F9F9F9',
								}}
							>
								<Table
									borderAxis='bothBetween'
									className={'charging-table charging-table--small'}
									size='sm'
									aria-label='purchases'
									sx={{
										'& > thead > tr > th:nth-child(n + 4), & > tbody > tr > td:nth-child(n + 4)':
											{ textAlign: 'right' },
										'& > thead > tr > th:nth-child(3), & > tbody > tr > td:nth-child(3)':
											{ textAlign: 'center' },
										'& > tr:not(:first-of-type) th:not([colspan]):first-child':
											{
												border: 'none',
											},
										'& > thead > tr > th': {
											color: '#fff',
										},
										borderRadius: 10,
										'--TableCell-paddingX': '0.5rem',
									}}
								>
									<thead className='charging-table--header'>
										<tr>
											<th>
												<Typography fontSize={15} fontWeight={500}>
													Connector
												</Typography>
											</th>
											<th>
												<Typography fontSize={15} fontWeight={500}>
													Price
												</Typography>
											</th>
											<th>
												<Typography fontSize={15} fontWeight={500}>
													Status
												</Typography>
											</th>
											<th style={{ textAlign: 'right' }}>
												<Typography fontSize={15} fontWeight={500}>
													Power
												</Typography>
											</th>
										</tr>
									</thead>
									<tbody style={{ overflowX: 'scroll' }}>
										{chargepoint?.connectors?.map((e, index) => {
											const status: ConnectorStatus =
												(e?.statusName?.toLowerCase() as ConnectorStatus) ||
												'unavailable'

											return (
												<tr key={index}>
													<td scope='row'>
														<Typography fontSize={15} fontWeight={600}>
															{e?.connectorTypeName}
														</Typography>
													</td>
													<td>
														<Typography fontSize={15} fontWeight={400}>
															{'$' + e?.price + '/kWh'}
														</Typography>
													</td>
													<td>
														<Typography fontSize={15} fontWeight={500}>
															<Status status={status} />
														</Typography>
													</td>
													<td style={{ textAlign: 'right' }}>
														<Typography fontSize={15} fontWeight={400}>
															{e?.power + ' kWh/h'}
														</Typography>
													</td>
												</tr>
											)
										})}
									</tbody>
								</Table>
							</Sheet>
						)}
				</td>
			</tr>
		</>
	)
}
