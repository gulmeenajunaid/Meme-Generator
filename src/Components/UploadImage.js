export default function UploadImage({ meme, setMeme, allMemes }) {
	function uploadImage(e) {
		e.preventDefault();
		const url = URL.createObjectURL(e.target.files[0]);
		setMeme({
			...meme,
			randomImg: url,
		});
	}
	return (
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
	);
}
