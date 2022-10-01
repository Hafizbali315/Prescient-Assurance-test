import Navbar from './components/Navbar'
import Ticketing from './components/Ticketing'

const HomePage = () => {
	return (
		<>
			<Navbar />

			<div className="container">
				<Ticketing />
			</div>
		</>
	)
}

export default HomePage
