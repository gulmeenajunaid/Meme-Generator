import RandomImage from "./RandomImage";
import SearchImage from "./SearchImage";
import UploadImage from "./UploadImage";

export default function MemeImage({ meme, setMeme, allMemes }) {
	return (
		<section className="container">
			<p className="text-light fw-bold h5 mb-2 mt-1">1. Choose an image</p>
			<SearchImage meme={meme} setMeme={setMeme} allMemes={allMemes} />
			<UploadImage meme={meme} setMeme={setMeme} allMemes={allMemes} />
			<RandomImage meme={meme} setMeme={setMeme} allMemes={allMemes} />
		</section>
	);
}
