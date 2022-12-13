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
			<figure className="container d-flex justify-content-center align-items-center position-relative">
				<img
					className="bg-img mw-100 mh-100 rounded"
					src={meme.randomImg}
					alt={meme.name}
				/>
				<figcaption
					className="p-3 fw-bold position-absolute top-0 w-75 text-break text-center h2"
					style={textStyle}
				>
					{meme.topText}
				</figcaption>
				<figcaption
					className="p-3 fw-bold position-absolute bottom-0 w-75 text-break text-center h2"
					style={textStyle}
				>
					{meme.bottomText}
				</figcaption>
			</figure>
		</div>
	);
}
