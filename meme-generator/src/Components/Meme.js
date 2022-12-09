import { useEffect } from "react";
export default function Meme({ meme, textColor, setAllMemes }) {
	const textStyle = {
		color: textColor,
	};
	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then((res) => res.json())
			.then((apiData) => setAllMemes(apiData.data.memes));
	}, []);
	return (
		<div className="container mt-4">
			<div className="container d-flex justify-content-center align-items-center position-relative">
				<img className="bg-img mw-100 mh-100" src={meme.randomImg} alt="meme" />
				<h2
					className="p-3 fw-bold position-absolute top-0 w-75 text-break text-center"
					style={textStyle}
				>
					{meme.topText}
				</h2>
				<h2
					className="p-3 fw-bold position-absolute bottom-0 w-75 text-break text-center"
					style={textStyle}
				>
					{meme.bottomText}
				</h2>
			</div>
		</div>
	);
}
