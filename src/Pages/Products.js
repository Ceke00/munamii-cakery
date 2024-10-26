
import React, { useState } from "react";
import happyCouple from "../Images/couple_cake.jpeg";
import eightCC from "../Images/8_cupcakes.jpeg";
import { weddingCakes, cupcakes } from "../Components/products";
import ProductCard from "../Components/ProductCard"

function Products() {
	const [selectedProduct, setSelectedProduct] = useState(null);

	const openProductCard = (product) => {
		setSelectedProduct(product);
	};

	const closeProductCard = () => {
		setSelectedProduct(null);
	};

	return (
		<div>
			{/* Header */}
			<header>
				<div className="relative isolate overflow-hidden bg-darkbrown py-24 sm:py-32">
					<img
						alt=""
						src={eightCC}
						className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center brightness-50"
					/>

					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<h1 className="text-white">Products</h1>
							<p className="mt-8 text-lg font-medium text-white sm:text-xl">
								Explore our delightful range of cupcakes and wedding cakes, crafted with love and the finest
								ingredients to make your special moments even sweeter.
							</p>
						</div>
					</div>
				</div>
			</header>

			{/* Products - Wedding cakes */}
			<div className="bg-white">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="text-darkbrown">Wedding Cakes</h2>
					<p className="mt-4 text-lg text-darkbrown max-w-prose">
						Our wedding cakes are designed to add a touch of elegance and romance to your special day. Each cake
						is crafted with attention to detail and a passion for perfection.
					</p>
					<div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{weddingCakes.map((product) => (
							<div key={product.id} onClick={() => openProductCard(product)} className="group cursor-pointer">
								<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
									<img
										alt={product.imageAlt}
										src={product.imageSrc}
										className="h-full w-full object-cover object-center group-hover:opacity-75"
									/>
								</div>
								<h3 className="mt-4 text-sm text-darkbrown">{product.name}</h3>
								<p className="mt-1 text-lg font-medium text-darkbrown">{product.price}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Parallax Image */}
			<div
				className="relative isolate overflow-hidden bg-fixed bg-center bg-cover h-80"
				style={{ backgroundImage: `url(${happyCouple})` }}>
				<div className="absolute inset-0 bg-black opacity-25"></div>
			</div>

			{/* Products - Cupcakes */}
			<div className="bg-white">
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<h2 className="text-darkbrown">Cupcakes</h2>
					<p className="mt-4 text-lg text-darkbrown max-w-prose">
						Our cupcakes are perfect for any occasion, from birthdays to everyday indulgence. Each cupcake is made
						with the finest ingredients and decorated with care.
					</p>
					<div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
						{cupcakes.map((product) => (
							<div key={product.id} onClick={() => openProductCard(product)} className="group cursor-pointer">
								<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
									<img
										alt={product.imageAlt}
										src={product.imageSrc}
										className="h-full w-full object-cover object-center group-hover:opacity-75"
									/>
								</div>
								<h3 className="mt-4 text-sm text-darkbrown">{product.name}</h3>
								<p className="mt-1 text-lg font-medium text-darkbrown">{product.price}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{selectedProduct && <ProductCard product={selectedProduct} onClose={closeProductCard} />}
		</div>
	);
}

export default Products;
