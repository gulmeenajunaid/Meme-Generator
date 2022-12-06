export default function Header() {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-light py-0 px-5"
			style={{ backgroundColor: "#011B19" }}
		>
			<div className="container-fluid px-5 py-1">
				<h1 className="navbar-brand h1 fw-bold text-light">
					Meme Generator
					<small className="text-muted"> - Get Set Meme</small>
				</h1>

				{/* <div className="navbar-nav d-flex pt-3">
					<p className="nav-item text-light">Get Set Meme</p>
				</div> */}
			</div>
		</nav>
	);
}
