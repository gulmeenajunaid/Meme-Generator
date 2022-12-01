import { useEffect, useState } from "react";

export default function Meme({ meme, setMeme }) {
	// const [meme, setMeme] = useState({
	// 	topText: "",
	// 	bottomText: "",
	// 	randomImg: "https://i.imgflip.com/2fm6x.jpg",
	// });
	const [allMemes, setAllMemes] = useState([]);

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((apiData) => setAllMemes(apiData.data.memes));
	}, []);

	function getNewImage(e) {
		e.preventDefault();

		const randomNumber = Math.floor(Math.random() * allMemes.length);
		console.log(randomNumber);
		const imageUrl = allMemes[randomNumber].url;
		setMeme({
			...meme,
			randomImg: imageUrl,
		});
	}

	function uploadImage(e) {
		e.preventDefault();
		console.log(e.target.files);
		const url = URL.createObjectURL(e.target.files[0]);
		setMeme({
			...meme,
			randomImg: url,
		});
	}

	function handleChange(e) {
		const { name, value } = e.target;
		const memeText = value.toUpperCase();
		setMeme({
			...meme,
			[name]: memeText,
		});
	}
	const btnStyles = {
		background: "linear-gradient(180deg, #FFFFFF 0%, #669592 100%)",
		borderRadius: "10px",
		color: "rgba(3, 66, 62, 0.71)",
		fontWeight: "bold",
		border: "none",
	};

	return (
		<div className="fluid-container p-5 m-5 border">
			<div className="container">
				<form className="row justify-content-start mb-4">
					<div className="col col-3 me-1">
						<input
							className="form-control"
							style={btnStyles}
							type="text"
							placeholder="Top Text"
							value={meme.topText}
							name="topText"
							onChange={handleChange}
						/>
					</div>
					<div className="col col-3">
						<input
							className="form-control"
							style={btnStyles}
							type="text"
							placeholder="Bottom Text"
							value={meme.bottomText}
							name="bottomText"
							onChange={handleChange}
						/>
					</div>
				</form>
				<div className="btn-group-vertical mb-5">
					{/* Search-Button */}
					<div className="input-group d-flex mb-3" style={btnStyles}>
						<button type="button" className="btn">
							<i className="fas fa-search" aria-hidden="true"></i>
						</button>
						<input
							type="search"
							className="form-control d-flex"
							aria-label="Text input for meme image search"
							placeholder="Search for trending meme images"
							style={btnStyles}
							// value={searchQuery}
							// onChange={changeHandler}
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
					<div className="input-group d-flex mb-3" style={btnStyles}>
						<button className="btn" onClick={getNewImage}>
							<i className="fas fa-image" aria-hidden="true"></i>
						</button>
						<input
							type="button"
							className="form-control"
							onClick={getNewImage}
							style={btnStyles}
							value="Get a random meme image"
						/>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center align-items-center position-relative mb-5">
				<img
					className="bg-img border border-light rounded"
					src={meme.randomImg}
					alt="meme"
				/>
				<h2 className="p-3 fw-bold shadow position-absolute top-0 text-wrap">
					{meme.topText}
				</h2>
				<h2 className="p-3 fw-bold shadow position-absolute bottom-0">
					{meme.bottomText}
				</h2>
			</div>
		</div>
	);
}

// Color picker
// <div>
// 	<label for="exampleColorInput" className="form-label">
// 		Color picker
// 	</label>
// 	<input
// 		type="color"
// 		className="form-control form-control-color"
// 		value="#563d7c"
// 		title="Choose your color"
// 	/>
// </div>;
