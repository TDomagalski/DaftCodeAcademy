import React, { useEffect, useState } from "react";

export const Form = () => {
	const [name, setName] = useState("");
	const [nameErr, setNameErr] = useState(false);
	const [email, setEmail] = useState("");
	const [emailErr, setEmailErr] = useState(false);

	// const win = window.localStorage;

	function nameHandler(e) {
		let itemName = e.target.value;

		if (itemName.length < 3 || itemName.length > 20) {
			setNameErr(true);
		} else {
			setNameErr(false);
		}
		setName(itemName);
	}

	function emailHandler(e) {
		let itemName = e.target.value;

		if (itemName.length < 3 || itemName.length > 20) {
			setEmailErr(true);
		} else {
			setEmailErr(false);
		}
		setEmail(itemName);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		window.localStorage.clear();
		setName("");
		setEmail("");
	};

	useEffect(() => {
		if (window.localStorage.getItem("name")) {
			setName(window.localStorage.getItem("name"));
		}
		if (window.localStorage.getItem("email")) {
			setEmail(window.localStorage.getItem("email"));
		}
	}, []);

	useEffect(() => {
		window.localStorage.setItem("name", name);
		window.localStorage.setItem("email", email);
	}, [name, email]);

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="field">
					<label>Name</label>
					<input
						type="text"
						value={name}
						onInput={nameHandler}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					{nameErr ? <span>Invalid User name</span> : null}
				</div>
				<div className="field">
					<label>Email</label>
					<input
						type="email"
						value={email}
						onInput={emailHandler}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					{emailErr ? <span>Invalid Email name</span> : null}
				</div>
				<div className="btnSubmit">
					<button type="sumbit">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
