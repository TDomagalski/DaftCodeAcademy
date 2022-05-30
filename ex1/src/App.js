import "./style.css";
import Navigation from "./components/Navigation";
import Form from "./components/Form";
import { BrowserRouter as Router } from "react-router-dom";

// const Home = () => {
// 	console.log("renderuje");
// 	return <h1>Strona startowa</h1>;
// };
// const FormPage = () => {};
// const Policy = () => {};
// const Contact = () => {};

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
				<section>
					<Form />
				</section>
			</div>
		</Router>
	);
}

export default App;
