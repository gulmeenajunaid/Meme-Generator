import "../App.css";

export default function MemeText({ meme, setMeme }) {
	function handleChange(e) {
		const { name, value } = e.target;
		const memeText = value;
		setMeme({
			...meme,
			[name]: memeText,
		});
	}

	return (
		<form className="container mt-4">
			<p className="text-light fw-bold h5 mb-2">2. Enter meme text</p>

			<div className="input-group d-flex mb-3" id="input-btn">
				<button type="button" className="btn">
					<i className="fa-sharp fas fa-font" aria-hidden="true"></i>
				</button>
				<input
					className="form-control d-flex"
					id="input-btn"
					type="text"
					placeholder="Text at Top"
					value={meme.topText}
					name="topText"
					onChange={handleChange}
				/>
			</div>
			<div className="input-group d-flex mb-3" id="input-btn">
				<button type="button" className="btn">
					<i className="fa-sharp fas fa-font" aria-hidden="true"></i>
				</button>
				<input
					className="form-control"
					id="input-btn"
					type="text"
					placeholder="Text at Bottom"
					value={meme.bottomText}
					name="bottomText"
					onChange={handleChange}
				/>
			</div>
		</form>
	);
}
