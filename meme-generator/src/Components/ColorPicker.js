import { useState } from "react";
import { SketchPicker } from "react-color";
export default function ColorPicker({ textColor, setTextColor }) {
	function handleColorChange(color) {
		setTextColor(color.hex);
	}
	return (
		<div className="container border mt-4 mb-4">
			<p className="text-light h5 mb-2">Choose text color</p>
			<div className="row">
				<SketchPicker
					className="col m-3"
					color={textColor}
					onChangeComplete={handleColorChange}
				/>
			</div>
		</div>
	);
}
