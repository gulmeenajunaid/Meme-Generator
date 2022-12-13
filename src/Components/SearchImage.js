import { useState } from "react";
export default function SearchImage({ meme, setMeme, allMemes }) {
	const [searchQuery, setSearchQuery] = useState("");

	let url = "";

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
	return (
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
	);
}
