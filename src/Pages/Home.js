import React from "react";
import { Link } from "react-router-dom";
import weddingCake from "../Images/wedding_cake_pink.png";
/* import munamii_baking from "../Images/munamii_smiles.png"; */

function Home() {
	return (
		<header>
			<div className="relative isolate overflow-hidden bg-darkgreen px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
				<svg
					viewBox="0 0 1024 1024"
					aria-hidden="true"
					className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
					<circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
					<defs>
						<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
							<stop stopColor="#30ab95" />
							<stop offset={1} stopColor="#aadce6" />
						</radialGradient>
					</defs>
				</svg>
				<div className="mx-auto max-w-md  lg:mx-0 lg:flex-auto lg:py-32 text-left">
					<h1 className="text-balance text-white">Munamii Cakery</h1>
					<p className=" text-pretty text-lg/8 text-white">
						Welcome to Munamii Cakery! We specialize in creating delightful cupcakes and exquisite wedding cakes
						that add a touch of sweetness to your special moments.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
						<Link
							to="/products"
							className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-darkgreen shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
							Products
						</Link>
						<Link to="/about" className="text-sm font-semibold leading-6 text-white">
							About Munamii <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
				<div className="relative mt-16 h-80 lg:mt-8">
					<img alt="Exclusive wedding cake with roses and gold decorations" src={weddingCake} className="absolute -left-60 top-0 w-[57rem] max-w-none" />
				</div>
			</div>
		</header>
	);
}

export default Home;
