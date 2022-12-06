export default function Footer() {
	const footerStyle = {
		background:
			"linear-gradient(0deg, #032826 90%, rgba(178, 227, 206, 0.651094) 40%, rgba(2, 255, 240, 0.13) 100%)",
		mixBlendMode: "darken",
	};
	return (
		<div
			className="container-fluid w-100 ps-5 pe-5 position-absolute bottom-0"
			style={{ backgroundColor: "#011B19" }}
			// style={footerStyle}
		>
			<footer className="p-1 text-light text-center align-items-center">
				Copyright © 2022
			</footer>
		</div>
	);
}
