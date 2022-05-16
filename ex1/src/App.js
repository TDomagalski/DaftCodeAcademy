import logo from "./logo.svg";
import "./css/style.css";

function App() {
	const sayHello = () => {
		alert("Hello World!");
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<button onClick={sayHello}>Say Hello !</button>
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
