import React from 'react';

function Navbar() {
	return (
		<React.Fragment>
			<nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
				<a
					className="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
					href="#"
				>
					Company name
				</a>

				<ul className="navbar-nav px-3">
					<li className="nav-item text-nowrap">
						<a className="nav-link" href="#">
							Sign out
						</a>
					</li>
				</ul>
			</nav>
		</React.Fragment>
	);
}

export default Navbar;
