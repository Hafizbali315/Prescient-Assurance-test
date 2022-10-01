import { IoNewspaperOutline } from 'react-icons/io5'
import { AiOutlineStar } from 'react-icons/ai'

import TicketCard1 from './TicketCard1'
import GraphCard from './GraphCard'

const Ticketing = () => {
	return (
		<div className="ticketing">
			<h1>Ticketing</h1>

			<div className="cards_row">
				<div className="col">
					<TicketCard1 heading="Resolved" headingIcon={<IoNewspaperOutline className="icon" />} percentage="19" />
				</div>
				<div className="col">
					<TicketCard1 heading="Under Process" headingIcon={<AiOutlineStar className="icon" />} percentage="20" />
				</div>
				<div className="col">
					<TicketCard1 heading="Unassigned" headingIcon={<IoNewspaperOutline className="icon" />} percentage="19" />
				</div>
				<div className="col col_lg">
					<GraphCard />
				</div>
			</div>
		</div>
	)
}

export default Ticketing
