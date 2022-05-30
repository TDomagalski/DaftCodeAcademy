import "./style.css";
import Form from "./components/Form";
import Navigation from "./components/Navigation";
import { BrowserRouter, BrowserRouter as Router, Link } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navigation />
				<Form />
			</div>
		</BrowserRouter>
	);
}

export default App;
