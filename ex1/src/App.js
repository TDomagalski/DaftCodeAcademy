import logo from "./logo.svg";
import "./css/style.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<a
					className="Tomek-link"
					href="https://github.com/TDomagalski/DaftCodeAcademy"
					target="_blank"
					rel="TomekWebDev">
					TomekWebDev GitHub
				</a>
			</header>
		</div>
	);
}

export default App;
