import { Link } from 'react-router-dom'
import Avatar from '../assets/avatar.png'
import Logo from '../assets/logo.jpeg'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>

			<ul className="links">
				<li>
					<Link to="#training" className="link">
						Training
					</Link>
				</li>

				<li>
					<Link to="#engangements" className="link">
						Engangements
					</Link>
				</li>
				<li>
					<Link to="#tickets" className="link">
						Tickets
					</Link>
				</li>
				<li>
					<Link to="#vault" className="link">
						Vault
					</Link>
				</li>
				<li>
					<Link to="#share" className="link active">
						Share
					</Link>
				</li>

				<li>
					<div className="notification-icon">
						<IoMdNotificationsOutline className="icon" />
						<span className="icon-active"></span>
					</div>
				</li>

				<li>
					<div className="profile_img_container">
						<img src={Avatar} alt="avatar" />
					</div>

					<MdOutlineKeyboardArrowDown className="dropdown-icon" />
				</li>
			</ul>
		</div>
	)
}

export default Navbar
