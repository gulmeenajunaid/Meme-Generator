import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
			<div className="container">
				<Link className="navbar-brand" to="/Home">
					<i className="fa-solid fa-face-laugh-beam me-2"></i>
					Get Set Meme
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse  justify-content-end"
					id="navbarNav"
				>
					<ul className="navbar-nav">
						<CustomLink to="/Home">Home</CustomLink>
						<CustomLink to="/MemeGenerator">Get Started</CustomLink>
					</ul>
				</div>
			</div>
		</nav>
	);
}

function CustomLink({ to, children, ...props }) {
	return (
		<li className="nav-item me-3">
			<Link className="nav-link" to={to} {...props}>
				<i
					className={
						to === "/Home"
							? " fas fa-sharp fa-home mx-1"
							: "fas fa-sharp fa-rocket mx-1"
					}
				></i>
				{children}
			</Link>
		</li>
	);
}
