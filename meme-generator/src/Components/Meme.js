import { useEffect, useState } from "react";

export default function Meme({ meme, textColor }) {
	const textStyle = {
		color: textColor,
	};
	return (
		<div className="container border border-warning">
			<div className="d-flex border border-warning justify-content-center align-items-center position-relative">
				<img className="bg-img mw-100 mh-100" src={meme.randomImg} alt="meme" />
				<h2
					className="p-3 fw-bold shadow position-absolute top-0"
					style={textStyle}
				>
					{meme.topText}
				</h2>
				<h2
					className="p-3 fw-bold shadow position-absolute bottom-0"
					style={textStyle}
				>
					{meme.bottomText}
				</h2>
			</div>
		</div>
	);
}
