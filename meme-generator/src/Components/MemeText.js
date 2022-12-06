export default function MemeText({ meme, setMeme }) {
	function handleChange(e) {
		const { name, value } = e.target;
		const memeText = value;
		setMeme({
			...meme,
			[name]: memeText,
		});
	}
	const btnStyles = {
		background: "linear-gradient(180deg, #FFFFFF 0%, #669592 100%)",
		borderRadius: "10px",
		color: "rgba(3, 66, 62, 0.9)",
		fontWeight: "600",
		border: "none",
	};
	return (
		<form className="container mt-4 w-75">
			<p className="text-light fw-bold h5 mb-2">Enter meme text</p>

			<div className="input-group d-flex mb-3" style={btnStyles}>
				<button type="button" className="btn">
					<i className="fa-sharp fas fa-font" aria-hidden="true"></i>
				</button>
				<input
					className="form-control d-flex"
					style={btnStyles}
					type="text"
					placeholder="Text at Top"
					value={meme.topText}
					name="topText"
					onChange={handleChange}
				/>
			</div>
			<div className="input-group d-flex mb-3" style={btnStyles}>
				<button type="button" className="btn">
					<i className="fa-sharp fas fa-font" aria-hidden="true"></i>
				</button>
				<input
					className="form-control"
					style={btnStyles}
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
