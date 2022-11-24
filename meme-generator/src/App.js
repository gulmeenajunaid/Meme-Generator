import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Meme from "./Components/Meme";

function App() {
	return (
		<div
			className="container-fluid text-bg-dark min-vh-100 m-0 px-0"
			style={{
				background: "linear-gradient(to right, #4fb0e0, #5eee5e)",
			}}
		>
			<Header />
			<Meme />
			<Footer />
		</div>
	);
}
export default App;
