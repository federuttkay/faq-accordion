import Card from "./components/Card";
import "./App.css";
import backgroudMobile from "../src/assets/images/background-pattern-mobile.svg";
import backgroudDesktop from "../src/assets/images/background-pattern-desktop.svg";

const App = () => {
	return (
		<>
			<img
				className="background backgroundMobile"
				src={backgroudMobile}
				alt=""
			/>
			<img
				className="background backgroundDesktop"
				src={backgroudDesktop}
				alt=""
			/>
			<div className="container">
				<Card />
			</div>
		</>
	);
};

export default App;
