import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [memeImg, setMemeImg] = useState([]);

	useEffect(() => {
		const fetchMemes = () => {
			fetch("https://api.imgflip.com/get_memes")
				.then((res) => res.json())
				.then((apiData) => setMemeImg(apiData.data.memes));
		};
		fetchMemes();
	}, []);
	return (
		<div className="text bg dark text-center h1">
			Hello World
			<i className="fas fa-globe ms-2" aria-hidden="true"></i>
		</div>
	);
}

export default App;
