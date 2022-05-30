import "./style.css";
import Navigation from "./components/Navigation";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/routes/about";
import { FormPage } from "./components/routes/formPage";
import { Policy } from "./components/routes/policy";
import { Contact } from "./components/routes/contact";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
				<div className="container">
					<Routes>
						<Route path="about" element={<About />} />
						<Route path="formPage" element={<FormPage />} />
						<Route path="policy" element={<Policy />} />
						<Route path="contact" element={<Contact />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
