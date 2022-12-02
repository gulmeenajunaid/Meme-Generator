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
			style={{
				background:
					"linear-gradient(180deg, #032826 7%, rgba(178, 227, 206, 0.651094) 75%, rgba(2, 255, 240, 0.13) 100%)",
			}}
		>
			<Header />
			<div className="container mt-4 p-5 border border-danger justify-content-center align-items-start">
				<div className="row">
					<div className="col border border-primary">
						<MemeImage meme={meme} setMeme={setMeme} allMemes={allMemes} />
						<MemeText meme={meme} setMeme={setMeme} />
						<ColorPicker textColor={textColor} setTextColor={setTextColor} />
					</div>
					<div className="col border border-primary my-auto">
						<Meme meme={meme} textColor={textColor} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default App;
