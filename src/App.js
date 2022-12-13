import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import MemeGenerator from "./Pages/MemeGenerator";

function App() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImg: "https://i.imgflip.com/9vct.jpg",
	});
	const [allMemes, setAllMemes] = useState([]);
	const [textColor, setTextColor] = useState("#02302C");

	return (
		<div
			className="container-fluid min-vh-100 m-0 p-0 position-relative"
			id="App-container"
		>
			<Header />
			{/* <div className="container"> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Home" element={<Home />} />
				<Route
					path="/MemeGenerator"
					element={
						<MemeGenerator
							meme={meme}
							setMeme={setMeme}
							allMemes={allMemes}
							setAllMemes={setAllMemes}
							textColor={textColor}
							setTextColor={setTextColor}
						/>
					}
				/>
			</Routes>
			{/* </div> */}
			<Footer />
		</div>
	);
}
export default App;
