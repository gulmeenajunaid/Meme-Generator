import { Link } from "react-router-dom";
export default function Home() {
	return (
		<div className="container p-4 d-flex align-items-center justify-content-center">
			<div className="py-5 mt-3">
				<div
					className="text-light shadow text-center py-4 px-5 m-5"
					id="banner"
				>
					<h2>Always be Meme Ready</h2>
					<div className="m-3 px-5 mw-50">
						<figure>
							<img src="Images/thumbnail-1.png" alt="meme thumbnail" />
							<img src="Images/thumbnail-2.png" alt="meme thumbnail" />
							<img src="Images/thumbnail-3.png" alt="meme thumbnail" />
							<img src="Images/thumbnail-4.png" alt="meme thumbnail" />
							<img src="Images/thumbnail-5.png" alt="meme thumbnail" />
							<img src="Images/thumbnail-6.png" alt="meme thumbnail" />
							<img src="Images/thumbnail-7.png" alt="meme thumbnail" />
							<img src="Images/thumbnail-8.png" alt="meme thumbnail" />
							<img src="Images/thumbnail-9.png" alt="meme thumbnail" />
						</figure>
					</div>
					<h5>Create customized memes within seconds</h5>
					<ul className="list-unstyled">
						<li>
							<i className="fas fa-circle-check me-2" aria-hidden="true"></i>
							Search trending meme images or upload your own images
						</li>
						<li>
							<i className="fas fa-circle-check me-2" aria-hidden="true"></i>
							Not sure what you are looking for? Let us pick one for you!
						</li>
					</ul>
					<button className="btn rounded-3 fw-bold" id="get-started-btn">
						<Link
							className="text text-decoration-none text-reset fs-5 p-1"
							to="/MemeGenerator"
						>
							Get Started
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
