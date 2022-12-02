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
		<form className="container border mt-4">
			<p className="text-light h5 mb-2">Enter meme text</p>

			<div className="input-group d-flex mb-3" style={btnStyles}>
				<button type="button" className="btn">
					<i className="fas fa-bus" aria-hidden="true"></i>
				</button>
				<input
					className="form-control d-flex"
					style={btnStyles}
					type="text"
					placeholder="Top Text"
					value={meme.topText}
					name="topText"
					onChange={handleChange}
				/>
			</div>
			<div className="input-group d-flex mb-3" style={btnStyles}>
				<button type="button" className="btn">
					<i className="fas fa-bicycle" aria-hidden="true"></i>
				</button>
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
	);
}
