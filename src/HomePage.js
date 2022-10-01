import MyTickets from './components/MyTickets'
import Navbar from './components/Navbar'
import Ticketing from './components/Ticketing'

const HomePage = () => {
	return (
		<>
			<Navbar />

			<div className="container">
				<Ticketing />
				<MyTickets />
			</div>
		</>
	)
}

export default HomePage
