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

	return (
		<div className="container mt-4 mb-4">
			<p className="text-light fw-bold h5 mb-2">3. Choose text Color</p>
			<div className="input-group d-flex mb-3" id="input-btn">
				<button
					type="button"
					className="btn"
					id="input-btn"
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
		</div>
	);
}
