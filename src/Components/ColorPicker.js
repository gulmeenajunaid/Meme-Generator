import { useState } from "react";
import { SketchPicker } from "react-color";

export default function ColorPicker({ textColor, setTextColor }) {
	const [showColor, setShowColor] = useState(false);

	function handleColorChange(color) {
		setTextColor(color.hex);
	}
	function handleShowColor() {
		setShowColor((prev) => !prev);
	}
	const btnStyles = {
		background: "linear-gradient(180deg, #FFFFFF 0%, #669592 100%)",
		borderRadius: "10px",
		color: "rgba(3, 66, 62, 0.9)",
		fontWeight: "600",
		border: "none",
	};
	return (
		<div className="container mt-4 mb-4">
			<p className="text-light fw-bold h5 mb-2">3. Choose text Color</p>
			<div className="input-group d-flex mb-3" style={btnStyles}>
				<button
					type="button"
					className="btn"
					style={btnStyles}
					onClick={handleShowColor}
				>
					<i
						className="fa-sharp fa-solid fa-palette me-4"
						aria-hidden="true"
					></i>
					Open Color Picker
				</button>
			</div>
			{showColor && (
				<SketchPicker
					className="mx-0"
					color={textColor}
					onChangeComplete={handleColorChange}
				/>
			)}
			{/* <div className="row">
				<button onClick={handleShowColor} className="btn">
					Open color picker
				</button>
				{showColor && (
					<SketchPicker
						className="col m-3"
						color={textColor}
						onChangeComplete={handleColorChange}
					/>
				)}
			</div> */}
		</div>
	);
}
