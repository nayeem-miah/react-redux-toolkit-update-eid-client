const ProductCard = ({ product }) => {
    console.log(product);
    return (
        <div className=" rounded-lg overflow-hidden shadow-xl transform transition-all bg-white p-4 hover:shadow-2xl">
            <img
                className="w-full h-64 object-cover rounded-lg  hover:scale-105 transition-transform duration-500 ease-in-out"
                src={product.product_img}
                alt={product.name}
            />
            <div className="pt-4 pb-2 px-3">
                <div className="flex justify-between items-center">
                    <p className="font-bold text-2xl text-gray-800 mb-2">{product.name}</p>
                    <p className="text-yellow-500 font-bold text-xl ">৳ {product.price}</p>
                </div>
                <p className="text-gray-600 text-sm">{product.category} - {product.brand}</p>
                <div className="flex items-center text-sm text-gray-600 mt-2">
                    <p>Size: <span className="font-semibold">{product.size}</span></p>
                    <p className="ml-4">Color: <span className="font-semibold">{product.color}</span></p>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-2">
                    <p>Material: <span className="font-semibold">{product.material}</span></p>
                </div>
                <div className="flex items-center mt-3">
                    <span className="text-yellow-400 font-bold text-lg">{product.rating} ⭐</span>
                    <p className="ml-2 text-sm text-gray-500">{product.availability}</p>
                </div>
            </div>
            <div className="px-6 py-4 flex justify-between items-center mt-4">
                <button className="bg-yellow-500 text-white py-2 px-5 rounded-full font-medium hover:bg-yellow-400 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    Add to Cart
                </button>
                <button className="bg-transparent text-yellow-500 py-2 px-4 rounded-full border-2 border-yellow-500 font-medium hover:bg-yellow-100 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    View Details
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
