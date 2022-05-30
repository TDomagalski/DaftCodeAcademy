import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Logo = <FontAwesomeIcon icon={faBriefcase} />;
const burgerIcon = <FontAwesomeIcon icon={faBurger} />;

export const Navigation = () => {
	const [open, setOpen] = useState(false);

	const handleHamburger = () => {
		setOpen(!open);
	};

	return (
		<div className="container">
			<nav>
				<div className="navbar-top">
					<div className="logo">
						<a href="#">{Logo}</a>
					</div>
					<button onClick={handleHamburger} className="ham-menu">
						{burgerIcon}
					</button>
				</div>
				<div className="navbar-bottom">
					<ul className={open ? "open" : null}>
						<li>
							<Link to="/">About me</Link>
						</li>
						<li>
							<Link to="/form">Form</Link>
						</li>
						<li>
							<Link to="/policy">Policy</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
