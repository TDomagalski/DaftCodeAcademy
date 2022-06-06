import "./style.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/routes/about";
import { FormPage } from "./components/routes/formPage";
import { RickAndMorty } from "./components/routes/RickAndMorty";
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
						<Route path="RickAndMorty" element={<RickAndMorty />} />
						<Route path="contact" element={<Contact />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
