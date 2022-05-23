import React, { useEffect, useState } from "react";

const Form = () => {
	const [name, setName] = useState("");
	const [nameErr, setNameErr] = useState(false);
	const [email, setEmail] = useState("");
	const [emailErr, setEmailErr] = useState(false);

	const win = window.localStorage;

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
		win.clear();
		setName("");
		setEmail("");
	};

	useEffect(() => {
		if (win.getItem("name")) {
			setName(win.getItem("name"));
		}
		if (win.getItem("email")) {
			setEmail(win.getItem("email"));
		}
	}, []);

	useEffect(() => {
		win.setItem("name", name);
		win.setItem("email", email);
	}, [name, email]);

	return (
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
				<label>Password</label>
				<input
					type="password"
					value={email}
					onInput={emailHandler}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				{emailErr ? <span>Invalid Email name</span> : null}
			</div>
			<div className="field">
				<button type="sumbit">Submit</button>
			</div>
		</form>
	);
};

export default Form;
