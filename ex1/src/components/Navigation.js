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
						<Link to="about">{Logo}</Link>
					</div>
					<button onClick={handleHamburger}>{burgerIcon}</button>
				</div>
				<div className="navbar-bottom">
					<ul className={open ? "open" : null}>
						<li>
							<Link to="about">
								<span>About me</span>
							</Link>
						</li>
						<li>
							<Link to="formPage">
								<span>Form</span>
							</Link>
						</li>
						<li>
							<Link to="RickAndMorty">
								<span>RickAndMorty</span>
							</Link>
						</li>
						<li>
							<Link to="contact">
								<span>Contact</span>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navigation;
