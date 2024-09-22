import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://mars-space-server.onrender.com/api/v1/products/');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null); 
  };

  const handleBuy = () => {
    alert('Product added to cart!'); // Replace with actual logic
    closeModal();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className='flex justify-between'>
        <p className='font-bold text-[30px]'>Mars Shop</p>
      <Link>Shop History</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg p-4 px-16 flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-xl text-green-600">${product.price}</p>
            <p className="text-gray-700">Quantity: {product.quantity}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <>
          <input type="checkbox" id="my-modal" className="modal-toggle" checked={true} readOnly />
          <label htmlFor="my-modal" className="modal">
            <label className="modal-box relative" htmlFor="">
              <h2 className="text-lg font-semibold">{selectedProduct.title}</h2>
              <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <p className="text-xl text-green-600">${selectedProduct.price}</p>
              <p className="text-gray-700">Quantity: {selectedProduct.quantity}</p>
              <div className="modal-action">
                <button className="btn btn-primary" onClick={handleBuy}>Buy</button>
                <button className="btn" onClick={closeModal}>Cancel</button>
              </div>
            </label>
          </label>
        </>
      )}
    </div>
  );
};

export default Shop;
