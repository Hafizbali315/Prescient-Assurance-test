import { IoIosArrowDown } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import MyTicketsTable from './MyTicketsTable'

const MyTickets = () => {
	return (
		<div className="my_tickets_card">
			<h1>My Tickets (Assigned to me)</h1>

			<div className="switch_btns_row">
				<div className="left">
					<div className="switch_container">
						<div className="label">
							<label className="switch">
								<input type="checkbox" checked />
								<span className="slider round"></span>
							</label>
						</div>
						<div className="text">All</div>
					</div>

					<div className="switch_container">
						<div className="label">
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</div>
						<div className="text">Unassigned</div>
					</div>

					<div className="switch_container">
						<div className="label">
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</div>
						<div className="text">Under Process</div>
					</div>

					<div className="switch_container">
						<div className="label">
							<label className="switch">
								<input type="checkbox" />
								<span className="slider round"></span>
							</label>
						</div>
						<div className="text">Resolved</div>
					</div>
				</div>

				<div className="right_filter">
					<div className="text">Show</div>
					<div className="input_container">
						<select type="select" placeholder="10">
							<option value="10">10</option>
							<option value="20">20</option>
						</select>
						<IoIosArrowDown className="icon" />
					</div>
					<div className="text">entities</div>
				</div>
			</div>

			<div className="search_inputs_row">
				<div className="filter_by_date">
					<div className="text">Filter by Creation Date</div>
					<div className="input_container">
						<input type="date" placeholder="Creation Date" />
					</div>
				</div>

				<div className="search_input">
					<input type="search" placeholder="Search here..." />
					<BiSearch className="icon" />
				</div>
			</div>

			<MyTicketsTable />

			<div className="nav_btns_row">
				<div className="left_text">
					showing <span> 1-5 </span>
					from <span> 100 </span>
					data
				</div>

				<div className="right_btns">
					<div className="left_icon">
						<AiFillCaretLeft className="icon" />
					</div>
					<button style={{ background: '#6b48f2', color: '#fff' }}>1</button>
					<button>2</button>
					<button>3</button>
					<div className="right_icon">
						<AiFillCaretRight className="icon" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyTickets
