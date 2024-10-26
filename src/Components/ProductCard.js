import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

function ProductCard({ product, onClose }) {
	const addToCart = () => {
		// Add to cart logic
		console.log(`Added ${product.name} to cart`, product);
	};

	return (
		<Dialog open={true} onClose={onClose} className="relative z-10">
			<DialogBackdrop transition className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

			<div className="fixed inset-0 z-10 overflow-y-auto">
				<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
					<DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg sm:w-full">
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="mx-auto flex-shrink-0 flex items-center justify-center h-48 w-48 rounded-lg bg-red-100 sm:mx-0 sm:h-64 sm:w-64">
									<img
										alt={product.imageAlt}
										src={product.imageSrc}
										className="h-full w-full object-cover object-center rounded-lg"
									/>
								</div>
								<div className="mt-3 text-left sm:mt-0 sm:ml-4 sm:text-left">
									<h3 className="text-lg leading-6 font-medium text-darkbrown">{product.name}</h3>
									<div className="mt-2">
										<p className="text-sm text-darkbrown">{product.productDescription}</p>
										<p className="text-lg font-medium text-darkbrown mt-2">{product.price}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							<button
								type="button"
								className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-darkgreen text-base font-medium text-white hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkgreen sm:ml-3 sm:w-auto sm:text-sm"
								onClick={addToCart}>
								Add to cart
							</button>
							<button
								type="button"
								className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-darkbrown hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkbrown sm:mt-0 sm:w-auto sm:text-sm"
								onClick={onClose}>
								Cancel
							</button>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}

export default ProductCard;
