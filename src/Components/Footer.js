
import React from "react";
import { FaInstagram, FaExternalLinkAlt, FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";


function Footer() {
	return (
		<footer className="container max-w-screen-lg mx-auto bg-blue p-12 text-darkbrown">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 text-left">
				<div className="mx-auto flex max-w-xs flex-col gap-y-4 text-center">
					<img
						src="https://d2j6dbq0eux0bg.cloudfront.net/images/16830190/1498589015.jpg"
						className="h-28 w-28 hover:scale-125"
						alt="Munamii Cakery"
					/>
				</div>
				<div className="mx-auto flex max-w-xs flex-col gap-y-4">
					<ul className="text-darkbrown space-y-2">
						<li>
							<Link to="/" className="hover:text-darkgreen">
								Home
							</Link>
						</li>
						<li>
							<Link to="/products" className="hover:text-darkgreen">
								Products
							</Link>
						</li>
						<li>
							<Link to="/about" className="hover:text-darkgreen">
								About
							</Link>
						</li>
						<li>
							<Link to="/contact" className="hover:text-darkgreen">
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div className="mx-auto flex max-w-xs flex-col gap-y-6">
					<h2 className="text-darkbrown text-4xl">Follow us!</h2>
					<div className="flex items-center space-x-4">
						<a
							href="https://www.facebook.com/munamiicupcakes/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-darkbrown hover:text-darkgreen flex items-center group"
							aria-label="Our Facebook (opens in a new tab)">
							<FaFacebook className="text-darkbrown text-2xl mr-2 group-hover:text-darkgreen" />
							Our Facebook <FaExternalLinkAlt className="ml-2 text-md" />
						</a>
					</div>
					<div className="flex items-center space-x-4">
						<a
							href="https://www.instagram.com/munamii.cakery/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-darkbrown hover:text-darkgreen flex items-center group"
							aria-label="Our Instagram (opens in a new tab)">
							<FaInstagram className="text-darkbrown text-2xl mr-2 group-hover:text-darkgreen" />
							Our Instagram <FaExternalLinkAlt className="ml-2 text-md" />
						</a>
					</div>
				</div>

				<div className="mx-auto flex max-w-xs flex-col gap-y-4">
					<h2 className="text-darkbrown text-4xl">Contact us!</h2>
					<address className="flex items-center space-x-4">
						<a
							href="mailto:munamii_cakery@cakelove.com"
							className="text-darkbrown hover:text-darkgreen flex items-center not-italic"
							aria-label="Email Munamii Cakery">
							<MdAlternateEmail className="mr-2 text-2xl" />
							Email Munamii Cakery
						</a>
					</address>
				</div>
			</div>
			<p className="text-center mt-16 text-darkbrown">© Cecilia Egevad, 2024</p>
		</footer>
	);
}

export default Footer;
