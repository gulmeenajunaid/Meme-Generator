import { useState } from "react";
import {
	AlphaPicker,
	BlockPicker,
	ChromePicker,
	CirclePicker,
	CompactPicker,
	PhotoshopPicker,
	SketchPicker,
	SliderPicker,
} from "react-color";
export default function ColorPicker({ textColor, setTextColor }) {
	function handleColorChange(color) {
		setTextColor(color.hex);
	}
	return (
		<div className="container mt-4 mb-4 w-75">
			<p className="text-light fw-bold h5 mb-0">Choose text Color</p>
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
