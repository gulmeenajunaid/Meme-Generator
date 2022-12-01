import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Meme from "./Components/Meme";

function App() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImg: "https://i.imgflip.com/2fm6x.jpg",
	});
	return (
		<div
			className="container-fluid min-vh-100 m-0 p-0 position-relative"
			style={{
				background:
					"linear-gradient(180deg, #032826 7%, rgba(178, 227, 206, 0.651094) 75%, rgba(2, 255, 240, 0.13) 100%)",
			}}
		>
			<Header />
			<Meme meme={meme} setMeme={setMeme} />
			{/* <Footer /> */}
		</div>
	);
}
export default App;
