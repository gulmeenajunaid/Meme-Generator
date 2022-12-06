import { useState } from "react";
import "../App.css";

export default function MemeImage({ meme, setMeme, allMemes }) {
	const [searchQuery, setSearchQuery] = useState("");

	function getNewImage(e) {
		e.preventDefault();
		const randomNumber = Math.floor(Math.random() * allMemes.length);
		const imageUrl = allMemes[randomNumber].url;
		setMeme({
			...meme,
			randomImg: imageUrl,
		});
	}

	function searchHandler(e) {
		setSearchQuery(e.target.value);
		const filteredMeme = allMemes.filter((meme) =>
			meme.name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		console.log(filteredMeme);

		const url = filteredMeme[0].url;
		console.log(url);
		setMeme({
			...meme,
			randomImg: url,
		});
	}

	function uploadImage(e) {
		e.preventDefault();
		const url = URL.createObjectURL(e.target.files[0]);
		setMeme({
			...meme,
			randomImg: url,
		});
	}

	const btnStyles = {
		background: "linear-gradient(180deg, #FFFFFF 0%, #669592 100%)",
		borderRadius: "10px",
		color: "rgba(3, 66, 62, 0.9)",
		fontWeight: "600",
		border: "none",
		textAlign: "start",
	};
	return (
		<div className="container w-75">
			<p className="text-light fw-bold h5 mb-2 mt-1">Choose an image</p>
			{/* <div className="btn-group-vertical"> */}
			{/* Search-Button */}
			<div className="input-group d-flex mb-3" style={btnStyles}>
				<button type="button" className="btn">
					<i className="fas fa-search" aria-hidden="true"></i>
				</button>
				<input
					type="text"
					className="form-control d-flex"
					aria-label="Text input for meme image search"
					placeholder="Search for meme image"
					style={btnStyles}
					value={searchQuery}
					onChange={searchHandler}
				/>
			</div>
			{/* Upload Image  */}
			<div className="input-group d-flex mb-3" style={btnStyles}>
				<button className="btn" type="button">
					<i className="fas fa-camera" aria-hidden="true"></i>
				</button>
				<input
					type="file"
					className="form-control d-flex"
					style={btnStyles}
					onChange={uploadImage}
				/>
			</div>
			{/* Get a random image */}
			<div className="input-group d-flex" style={btnStyles}>
				<button className="btn" onClick={getNewImage}>
					<i className="fas fa-image" aria-hidden="true"></i>
				</button>
				<input
					type="button"
					className="form-control"
					onClick={getNewImage}
					style={btnStyles}
					value="Get a random meme image"
					readOnly
				/>
			</div>
			{/* </div> */}
		</div>
	);
}
