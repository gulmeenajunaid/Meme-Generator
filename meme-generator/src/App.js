import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Meme from "./Components/Meme";
import MemeText from "./Components/MemeText";
import MemeImage from "./Components/MemeImage";
import ColorPicker from "./Components/ColorPicker";

function App() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImg: "https://i.imgflip.com/2fm6x.jpg",
	});
	const [allMemes, setAllMemes] = useState([]);
	const [textColor, setTextColor] = useState("#02302C");

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((apiData) => setAllMemes(apiData.data.memes));
	}, []);

	return (
		<div
			className="container-fluid min-vh-100 m-0 p-0 position-relative"
			id="App-container"
			style={{ backgroundColor: "#011B19" }}
		>
			<Header />
			<div
				className="container p-5 justify-content-center align-items-center"
				style={{
					background:
						"linear-gradient(180deg, #032826 10%, rgba(178, 227, 206, 0.651094) 100%, rgba(2, 255, 240, 0.13) 100%)",
				}}
			>
				<div className="row">
					<div className="col">
						<MemeImage meme={meme} setMeme={setMeme} allMemes={allMemes} />
						<MemeText meme={meme} setMeme={setMeme} />
						<ColorPicker textColor={textColor} setTextColor={setTextColor} />
					</div>
					<div className="col">
						<Meme meme={meme} textColor={textColor} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default App;
