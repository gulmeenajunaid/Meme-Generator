import Meme from "../Components/Meme";
import MemeText from "../Components/MemeText";
import MemeImage from "../Components/MemeImage";
import ColorPicker from "../Components/ColorPicker";

export default function MemeGenerator({
	meme,
	setMeme,
	allMemes,
	setAllMemes,
	textColor,
	setTextColor,
}) {
	return (
		<div className="container justify-content-around align-items-center mt-5 py-5 px-3 ">
			<div className="row">
				<div className="col col-12 col-md-5">
					<MemeImage meme={meme} setMeme={setMeme} allMemes={allMemes} />
					<MemeText meme={meme} setMeme={setMeme} />
					<ColorPicker textColor={textColor} setTextColor={setTextColor} />
				</div>
				<div className="col my-auto">
					<Meme meme={meme} textColor={textColor} setAllMemes={setAllMemes} />
				</div>
			</div>
		</div>
	);
}
