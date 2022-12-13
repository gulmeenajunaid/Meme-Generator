export default function RandomImage({ meme, setMeme, allMemes }) {
	function getNewImage(e) {
		e.preventDefault();
		const randomNumber = Math.floor(Math.random() * allMemes.length);
		const imageUrl = allMemes[randomNumber].url;
		setMeme({
			...meme,
			randomImg: imageUrl,
		});
	}
	return (
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
	);
}
