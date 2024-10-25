import React from "react";
import Cupcake from "../Images/wedding_cake.png";
import happyCouple from "../Images/couple_cake.jpeg"
import eightCC from "../Images/8_cupcakes.jpeg"
import color_wc from "../Images/weddingCakes/weddingcake/colorful_weddingcake.webp";
import fantasy_wc from "../Images/weddingCakes/weddingcake/fantasy_weddingcake.webp";
import golden_wc from "../Images/weddingCakes/weddingcake/golden_weddingcake.webp";
import lace_wc from "../Images/weddingCakes/weddingcake/lace_weddingcake.webp";
import bird_wc from "../Images/weddingCakes/weddingcake/weddingcake_bird.webp";
import flower_wc from "../Images/weddingCakes/weddingcake/weddingcake_flower.webp";
import flowers_wc from "../Images/weddingCakes/weddingcake/weddingcake_flowers.webp";
import blueberry_cc from "../Images/cupcakes/cupcakes/blueberry_cupcake.webp"
import chocolate_minte_cc from "../Images/cupcakes/cupcakes/chocolate_mint_cupcake.webp";
import crunch_cc from "../Images/cupcakes/cupcakes/crunch_cupcake.webp";
import lemon_cc from "../Images/cupcakes/cupcakes/lemon_cupcake.webp";
import pink_cc from "../Images/cupcakes/cupcakes/pink_cupcake.webp";
import red_cc from "../Images/cupcakes/cupcakes/red_cupcake.webp";
import strawberry_cc from "../Images/cupcakes/cupcakes/strawberry_cupcake.webp";
import vanilla_cc from "../Images/cupcakes/cupcakes/vanilla_cupcake.webp";
import winter_cc from "../Images/cupcakes/cupcakes/winter_cupcake.webp";


function Products() {

	const weddingCakes = [
		{
			id: 1,
			name: "Romantic Rose Cake",
			href: "#",
			price: "$150",
			imageSrc: bird_wc,
			imageAlt: "A beautiful wedding cake decorated with romantic roses.",
		},
		{
			id: 2,
			name: "Elegant Pearl Cake",
			href: "#",
			price: "$200",
			imageSrc: flowers_wc,
			imageAlt: "An elegant wedding cake adorned with pearls.",
		},
		{
			id: 3,
			name: "Classic White Cake",
			href: "#",
			price: "$180",
			imageSrc: flower_wc,
			imageAlt: "A classic white wedding cake with intricate designs.",
		},
		{
			id: 4,
			name: "Vintage Lace Cake",
			href: "#",
			price: "$220",
			imageSrc: lace_wc,
			imageAlt: "A vintage wedding cake with lace decorations.",
		},
		{
			id: 5,
			name: "Floral Fantasy Cake",
			href: "#",
			price: "$250",
			imageSrc: "path/to/your/image5.jpg",
			imageAlt: "A wedding cake with a floral fantasy design.",
		},
		{
			id: 6,
			name: "Golden Elegance Cake",
			href: "#",
			price: "$230",
			imageSrc: "path/to/your/image6.jpg",
			imageAlt: "A wedding cake with golden elegance.",
		},
		{
			id: 7,
			name: "Rustic Charm Cake",
			href: "#",
			price: "$190",
			imageSrc: "path/to/your/image7.jpg",
			imageAlt: "A rustic charm wedding cake.",
		},
		{
			id: 8,
			name: "Modern Chic Cake",
			href: "#",
			price: "$210",
			imageSrc: "path/to/your/image8.jpg",
			imageAlt: "A modern chic wedding cake.",
		},
	];

	const cupcakes = [
		{
			id: 1,
			name: "Vanilla Dream",
			href: "#",
			price: "$3",
			imageSrc: "path/to/your/image9.jpg",
			imageAlt: "A delicious vanilla cupcake.",
		},
		{
			id: 2,
			name: "Chocolate Delight",
			href: "#",
			price: "$3",
			imageSrc: "path/to/your/image10.jpg",
			imageAlt: "A rich chocolate cupcake.",
		},
		{
			id: 3,
			name: "Strawberry Bliss",
			href: "#",
			price: "$3",
			imageSrc: "path/to/your/image11.jpg",
			imageAlt: "A sweet strawberry cupcake.",
		},
		{
			id: 4,
			name: "Lemon Zest",
			href: "#",
			price: "$3",
			imageSrc: "path/to/your/image12.jpg",
			imageAlt: "A tangy lemon cupcake.",
		},
		{
			id: 5,
			name: "Red Velvet",
			href: "#",
			price: "$3",
			imageSrc: "path/to/your/image13.jpg",
			imageAlt: "A classic red velvet cupcake.",
		},
		{
			id: 6,
			name: "Caramel Crunch",
			href: "#",
			price: "$3",
			imageSrc: "path/to/your/image14.jpg",
			imageAlt: "A caramel crunch cupcake.",
		},
		{
			id: 7,
			name: "Mint Chocolate",
			href: "#",
			price: "$3",
			imageSrc: "path/to/your/image15.jpg",
			imageAlt: "A mint chocolate cupcake.",
		},
		{
			id: 8,
			name: "Blueberry Burst",
			href: "#",
			price: "$3",
			imageSrc: "path/to/your/image16.jpg",
			imageAlt: "A blueberry burst cupcake.",
		},
	];


		
					
			
				
	return (
		<div>
			{/* Header */}
			<header>
				<div className="relative isolate overflow-hidden bg-darkbrown py-24 sm:py-32">
					{/* <img
						alt="Cupcakes and wedding cakes"
						src={eightCC}
						className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center brightness-50"
					/> */}

					<img
						alt="Cupcakes and wedding cakes"
						src={eightCC}
						className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center brightness-50 backdrop-sepia"
					/>

						<div
						aria-hidden="true"
						className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
						<div
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#30ab95] to-[#115f51] opacity-20"
						/>
					</div>
					<div
						aria-hidden="true"
						className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
						<div
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#30ab95] to-[#115f51] opacity-20"
						/>
					</div>
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<h1 className="text-white ">Products</h1>
							<p className="mt-8 text-lg font-medium text-white sm:text-xl">
								Explore our delightful range of cupcakes and wedding cakes, crafted with love and the finest
								ingredients to make your special moments even sweeter.
							</p>
						</div>
					</div>
				</div>
			</header>

			{/* Products - Wedding cakes*/}
			<div className="bg-white">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="text-darkbrown ">Wedding Cakes</h2>
					<p className="mt-4 text-lg text-darkbrown max-w-prose">
						Our wedding cakes are designed to add a touch of elegance and romance to your special day. Each cake
						is crafted with attention to detail and a passion for perfection.
					</p>
					<div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{weddingCakes.map((product) => (
							<a key={product.id} href={product.href} className="group">
								<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
									<img
										alt={product.imageAlt}
										src={product.imageSrc}
										className="h-full w-full object-cover object-center group-hover:opacity-75"
									/>
								</div>
								<h3 className="mt-4 text-sm text-darkbrown">{product.name}</h3>
								<p className="mt-1 text-lg font-medium text-darkbrown">{product.price}</p>
							</a>
						))}
					</div>
				</div>
			</div>
			{/* Parallax Image */}
			<div
				className="relative isolate overflow-hidden bg-fixed bg-center bg-cover h-80"
				style={{ backgroundImage: `url(${happyCouple})` }}>
				<div className="absolute inset-0 bg-black opacity-25"></div>´
			</div>

			{/* Products - Cupcakes*/}
			<div className="bg-white">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="text-darkbrown ">Cupcakes</h2>
					<p className="mt-4 text-lg text-darkbrown max-w-prose">
						Our cupcakes are perfect for any occasion, from birthdays to everyday indulgence. Each cupcake is made
						with the finest ingredients and decorated with care.
					</p>
					<div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{cupcakes.map((product) => (
							<a key={product.id} href={product.href} className="group">
								<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
									<img
										alt={product.imageAlt}
										src={product.imageSrc}
										className="h-full w-full object-cover object-center group-hover:opacity-75"
									/>
								</div>
								<h3 className="mt-4 text-sm text-darkbrown">{product.name}</h3>
								<p className="mt-1 text-lg font-medium text-darkbrown">{product.price}</p>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Products;


