import React, { useState } from "react";

export const Login = () => {
	const [user, setUser] = useState("");
	const [userErr, setUserErr] = useState(false);
	const [password, setPassword] = useState("");
	const [passwordErr, setPasswordErr] = useState(false);

	function userHandler(e) {
		let itemName = e.target.value;

		if (itemName.length < 3 || itemName.length > 20) {
			setUserErr(true);
		} else {
			setUserErr(false);
		}
		setUser(itemName);
	}

	function passwordHandler(e) {
		let itemPassword = e.target.value;

		if (itemPassword.length < 3 || itemPassword.length > 20) {
			setPasswordErr(true);
		} else {
			setPasswordErr(false);
		}
		setPassword(itemPassword);
	}

	function loginHandler(e) {
		if (
			(user.length < 3 || user.length > 20) &&
			(password.length < 3 || password.length > 20)
		) {
			alert("invalid data");
		} else {
			alert("correct data");
		}
		e.preventDefault();
	}

	return (
		<div className="container">
			<h1>Create account</h1>
			<form onSubmit={loginHandler}>
				<input
					type="text"
					placeholder="Enter User name"
					onChange={userHandler}
				/>
				{userErr ? <span>Invalid User name</span> : null}
				<input
					type="password"
					placeholder="Enter User Password"
					onChange={passwordHandler}
				/>
				{passwordErr ? <span>Invalid User password</span> : null}
				<div className="btnSubmit">
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
