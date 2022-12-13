import { useState } from "react";

export default function MemeImage({ meme, setMeme, allMemes }) {
	const [searchQuery, setSearchQuery] = useState("");
	let url = "";

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
		if (filteredMeme.length <= 0) {
			url = "./Images/404Error-2.jpg";
		} else {
			url = filteredMeme[0].url;
		}
		setMeme({
			...meme,
			randomImg: url,
		});
	}

	function uploadImage(e) {
		e.preventDefault();
		url = URL.createObjectURL(e.target.files[0]);
		setMeme({
			...meme,
			randomImg: url,
		});
	}

	return (
		<div className="container">
			<p className="text-light fw-bold h5 mb-2 mt-1">1. Choose an image</p>
			{/* Search-Button */}
			<div className="input-group d-flex mb-3" id="input-btn">
				<button type="button" className="btn">
					<i className="fas fa-search" aria-hidden="true"></i>
				</button>
				<input
					type="search"
					className="form-control d-flex"
					aria-label="Text input for meme image search"
					placeholder="Search for meme image"
					id="input-btn"
					value={searchQuery}
					onChange={searchHandler}
				/>
			</div>
			{/* Upload Image  */}
			<div className="input-group d-flex mb-3" id="input-btn">
				<button className="btn" type="button">
					<i className="fas fa-camera" aria-hidden="true"></i>
				</button>
				<input
					type="file"
					className="form-control d-flex"
					id="input-btn"
					onChange={uploadImage}
				/>
			</div>
			{/* Get a random image */}
			<div className="input-group d-flex" id="input-btn">
				<button className="btn" onClick={getNewImage}>
					<i className="fas fa-image" aria-hidden="true"></i>
				</button>
				<input
					type="button"
					className="form-control d-flex"
					onClick={getNewImage}
					id="input-btn"
					value="Get a random meme image"
					readOnly
				/>
			</div>
		</div>
	);
}
