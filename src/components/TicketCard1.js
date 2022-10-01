import { MdOutlineArrowDropUp } from 'react-icons/md'

const TicketCard1 = ({ heading, percentage, headingIcon }) => {
	return (
		<div className="card">
			<h2>
				<span className="icon_container">{headingIcon}</span>
				{heading}
			</h2>
			<h1>
				{percentage} <MdOutlineArrowDropUp className="icon " />
			</h1>

			<h5>
				<span>+0.5%</span> from the last month.
			</h5>
		</div>
	)
}

export default TicketCard1
