import logo from "./logo.svg";
import "./css/style.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="Tomek-link"
					href="https://github.com/TDomagalski/DaftCodeAcademy"
					target="_blank"
					rel="noopener noreferrer">
					TomekWebDev GitHub
				</a>
			</header>
		</div>
	);
}

export default App;
