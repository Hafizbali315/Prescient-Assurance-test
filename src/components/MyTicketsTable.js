import Avatar from '../assets/avatar.png'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdDateRange } from 'react-icons/md'
import { AiOutlineMessage } from 'react-icons/ai'
import { ImAttachment } from 'react-icons/im'

const MyTicketsTable = () => {
	return (
		<div className="table_container">
			<table>
				{/* Heading */}
				<tr>
					<th>
						<div className="text_container">Ticket id</div>
					</th>
					<th>Message</th>
					<th>Ticket Created By</th>
					<th>Company</th>
					<th>Status</th>
					<th>Priority</th>
					<th>Assign to</th>
					<th>Action</th>
				</tr>
				{/* First data Row */}
				<tr>
					<td>13007</td>
					<td>
						<p>This will have a complete message with all the issues presented in it.</p>
					</td>
					<td>
						<TicketProfile />
					</td>
					<td style={{ textAlign: 'center' }}>
						<div className="text_container">Company 1</div>
					</td>
					<td>
						<div className="status_tag" style={{ color: '#96d596', backgroundColor: '#e3ffe2' }}>
							<span className="circle" style={{ backgroundColor: '#96d596' }}></span>Resolved
						</div>
					</td>
					<td>
						<div className="status_tag">
							<span className="circle" style={{ backgroundColor: '#96d596' }}></span>Low
						</div>
					</td>
					<td>
						<TicketProfile />
					</td>

					<td>
						<BsThreeDotsVertical className="three_dot_icon" />
					</td>
				</tr>
				{/* Second data Row */}
				<tr>
					<td>13007</td>
					<td>
						<p className="text_container">Ticket subject will be here.</p>
						<div className="url_msg_row">
							<div className="url">
								<ImAttachment className="icon" />
								<a href="www.uistore.org" target="_blank">
									www.uistore.org
								</a>
							</div>

							<div className="msg text_container">
								<AiOutlineMessage className="icon" />5 messages
							</div>
						</div>
					</td>

					<td>
						<TicketProfile />
					</td>

					<td style={{ textAlign: 'center' }}>
						<div className="text_container">Company 2</div>
					</td>

					<td>
						<div className="status_tag" style={{ color: '#db8388', backgroundColor: '#f9e4e8' }}>
							<span className="circle" style={{ backgroundColor: '#db8388' }}></span>Unassigned
						</div>
					</td>

					<td>
						<div className="status_tag">
							<span className="circle" style={{ backgroundColor: '#c9c06d' }}></span>Medium
						</div>
					</td>

					<td>
						<div className="status_tag" style={{ color: '#c9c06d', backgroundColor: '#fbf4f2' }}>
							<span className="circle" style={{ backgroundColor: '#c9c06d' }}></span>Pending
						</div>
					</td>

					<td>
						<BsThreeDotsVertical className="three_dot_icon" />
					</td>
				</tr>
				{/* 3rd data Row */}
				<tr>
					<td>13007</td>
					<td>
						<p className="text_container">Ticket subject will be here.</p>
						<div className="url_msg_row">
							<div className="url">
								<ImAttachment className="icon" />
								<a href="www.uistore.org" target="_blank">
									www.uistore.org
								</a>
							</div>

							<div className="msg text_container">
								<AiOutlineMessage className="icon" />5 messages
							</div>
						</div>
					</td>

					<td>
						<TicketProfile />
					</td>

					<td style={{ textAlign: 'center' }}>
						<div className="text_container">Company 3</div>
					</td>

					<td>
						<div className="status_tag" style={{ color: '#e5e0b0', backgroundColor: '#fdfdf3' }}>
							<span className="circle" style={{ backgroundColor: '#e5e0b0' }}></span>Under Process
						</div>
					</td>

					<td>
						<div className="status_tag">
							<span className="circle" style={{ backgroundColor: '#c23648' }}></span>High
						</div>
					</td>

					<td>
						<TicketProfile />
					</td>

					<td>
						<BsThreeDotsVertical className="three_dot_icon" />
					</td>
				</tr>
				{/* 4th data Row */}
				<tr>
					<td>13007</td>
					<td>
						<p className="text_container">Ticket subject will be here.</p>
						<div className="url_msg_row">
							<div className="url">
								<ImAttachment className="icon" />
								<a href="www.uistore.org" target="_blank">
									www.uistore.org
								</a>
							</div>

							<div className="msg text_container">
								<AiOutlineMessage className="icon" />5 messages
							</div>
						</div>
					</td>

					<td>
						<TicketProfile />
					</td>

					<td style={{ textAlign: 'center' }}>
						<div className="text_container">Company 4</div>
					</td>

					<td>
						<div className="status_tag" style={{ color: '#db8388', backgroundColor: '#f9e4e8' }}>
							<span className="circle" style={{ backgroundColor: '#db8388' }}></span>Under Process
						</div>
					</td>

					<td>
						<div className="status_tag">
							<span className="circle" style={{ backgroundColor: '#41a15a' }}></span>Low
						</div>
					</td>

					<td>
						<TicketProfile />
					</td>

					<td>
						<BsThreeDotsVertical className="three_dot_icon" />
					</td>
				</tr>
				{/* 5th data Row */}
				<tr>
					<td>13007</td>
					<td>
						<p className="text_container">Ticket subject will be here.</p>
						<div className="url_msg_row">
							<div className="url">
								<ImAttachment className="icon" />
								<a href="www.uistore.org" target="_blank">
									www.uistore.org
								</a>
							</div>

							<div className="msg text_container">
								<AiOutlineMessage className="icon" />5 messages
							</div>
						</div>
					</td>

					<td>
						<TicketProfile />
					</td>

					<td style={{ textAlign: 'center' }}>
						<div className="text_container">Company 5</div>
					</td>

					<td>
						<div className="status_tag" style={{ color: '#db8388', backgroundColor: '#f9e4e8' }}>
							<span className="circle" style={{ backgroundColor: '#db8388' }}></span>Unassigned
						</div>
					</td>

					<td>
						<div className="status_tag">
							<span className="circle" style={{ backgroundColor: '#c9c06d' }}></span>Medium
						</div>
					</td>

					<td>
						<div className="status_tag" style={{ color: '#c9c06d', backgroundColor: '#fbf4f2' }}>
							<span className="circle" style={{ backgroundColor: '#c9c06d' }}></span>Pending
						</div>
					</td>

					<td>
						<BsThreeDotsVertical className="three_dot_icon" />
					</td>
				</tr>
			</table>
		</div>
	)
}

export function TicketProfile() {
	return (
		<div className="ticket_profile">
			<div className="avatar_container">
				<img src={Avatar} alt="profile" />
			</div>
			<div className="text">
				<div className="name">Oliver Rhye (Clients)</div>

				<div className="date">
					<MdDateRange className="icon" />
					15 Mar 2021, 12:47 PM
				</div>
			</div>
		</div>
	)
}

export default MyTicketsTable
