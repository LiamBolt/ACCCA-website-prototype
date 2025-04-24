import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        
        {product.featured && (
          <div className="absolute top-4 left-4 bg-forest-green text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
        
        {!product.inStock && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center">
            <span className="bg-white text-gray-800 px-4 py-2 rounded-lg font-bold">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 h-16 overflow-hidden">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-forest-green">${product.price.toFixed(2)}</span>
          
          <button 
            className={`flex items-center px-4 py-2 rounded-lg text-white transition duration-300 ${
              product.inStock 
                ? 'bg-forest-green hover:bg-green-800' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
          >
            <ShoppingCart size={18} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 