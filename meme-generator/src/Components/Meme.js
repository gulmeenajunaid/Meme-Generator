import { useEffect, useState } from "react";

export default function Meme() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImg: "https://i.imgflip.com/2fm6x.jpg",
	});
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
	return (
		<div className="container p-5">
			<div className="container text-center">
				<form className="row justify-content-center mb-4">
					<div className="col col-3 me-1">
						<input
							className="form-control"
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
							type="text"
							placeholder="Bottom Text"
							value={meme.bottomText}
							name="bottomText"
							onChange={handleChange}
						/>
					</div>
				</form>
				<div className="btn-group-vertical mb-5">
					<button
						className="btn btn-success mb-2 shadow rounded px-3"
						onClick={getNewImage}
					>
						Get a new meme image
					</button>
					<div className="input-group">
						<div className="input-group-prepend">
							<button
								className="input-group-text btn btn-success"
								id="inputGroupFileAddon01"
							>
								<i className="fas fa-cloud-upload" aria-hidden="true"></i>
							</button>
						</div>
						<div className="custom-file">
							<input
								type="file"
								className="form-control btn btn-success"
								onChange={uploadImage}
								id="inputGroupFile01"
								aria-describedby="inputGroupFileAddon01"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="d-flex justify-content-center align-items-center position-relative">
				<img
					className="bg-img border border-light rounded"
					src={meme.randomImg}
					alt="meme"
				/>
				<h2 className="p-3 fw-bold shadow position-absolute top-0">
					{meme.topText}
				</h2>
				<h2 className="p-3 fw-bold shadow position-absolute bottom-0">
					{meme.bottomText}
				</h2>
			</div>
		</div>
	);
}

// Upload image bootstrap
{
}
