import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route to="/" element={<HomePage />}>
						<Route index element={<HomePage />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
