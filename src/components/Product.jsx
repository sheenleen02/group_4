import React, { useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { GiComputing, GiCookingPot, GiGamepadCross, GiPteruges } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { GiDiamondRing } from "react-icons/gi";
import { HiComputerDesktop } from "react-icons/hi2";
import { RiBookOpenLine } from "react-icons/ri";

// Sample products data  
const productsData = [
  { id: 1, image: '/images/fan.png', name: 'Oxford Fan', category: 'appliance', price: '₦12,000', stock: 12 },
  { id: 2, image: '/images/television.png', name: 'Television', category: 'appliance', price: '₦4,000', stock: 4 },
  { id: 3, image: '/images/gamepad.png', name: 'Game Pad', category: 'gaming', price: '₦4,000', stock: 4 },
  // ... other products
];

// Categories for filtering  
const categories = [
  { icon: <GiCookingPot />, name: 'appliance', label: 'Appliance' },
  { icon: <GiRunningShoe />, name: 'shoe', label: 'Shoe' },
  { icon: <GiDiamondRing />, name: 'jewelry', label: 'Jewelry' },
  { icon: <RiBookOpenLine />, name: 'book', label: 'Book' },
  { icon: <GiPteruges />, name: 'pet supplies', label: 'Pet Supplies' },
  { icon: <GiGamepadCross />, name: 'gaming', label: 'Gaming' },
  { icon: <GiComputing />, name: 'computing', label: 'Computing' },
];

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('appliance');
  const [products, setProducts] = useState(productsData);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '', price: '', description: '', category: '', stock: 1, hide: false, image: ''
  });

  // Filter products based on the selected category  
  const filteredProducts = products.filter(product => product.category === selectedCategory);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    const id = products.length + 1; // Simple id generation for demo purposes  
    setProducts([...products, { ...newProduct, id }]);
    setShowModal(false);
    setNewProduct({ name: '', price: '', description: '', category: '', stock: 1, hide: false, image: '' });
  };

  return (
    <section className="flex flex-col items-center p-4 bg-white">
      {/* Category Navigation */}
      <nav className="flex items-center justify-between gap-4 w-full mb-4 flex-wrap">
        <button className="text-black bg-transparent border-none font-medium">Edit by Categories</button>
        <div className="flex items-center justify-center flex-wrap">
          {categories.map(category => (
            <button
              key={category.name}
              className={`flex items-center p-2 transition-all duration-200 rounded ${
                selectedCategory === category.name ? 'bg-[#5C2018] text-white' : 'hover:bg-gray-200 text-[#5C2018]'
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="text-sm ml-1">{category.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Add Product Button */}
      <button
        className='border-green-200 bg-black text-white rounded text-center p-2 mb-4'
        onClick={() => setShowModal(true)}
      >
        + Add Product
      </button>

      {/* Product Display */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-gray-300 p-4 shadow-lg rounded flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-2" />
            <h3 className="text-lg font-bold mb-1 text-gray-800 text-center">{product.name}</h3>
            <p className="text-lg font-semibold">Price: {product.price}</p>
            <p className="text-lg">Stock: {product.stock}</p>
            <button className="bg-blue-900 text-white px-4 py-2 rounded mt-2">Edit</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded mt-1">Remove</button>
          </div>
        ))}
      </div>

      {/* Modal for adding new product */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-[90%] md:w-[600px]">
            <div className='flex justify-between'>
              <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
              <div onClick={() => setShowModal(false)}>
                <CiCircleRemove size={30} className="cursor-pointer" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Add Image</label>
                <input name="image" type="file" onChange={handleInputChange} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Product Name (required)</label>
                <input name="name" type="text" value={newProduct.name} onChange={handleInputChange} className="w-full border rounded" placeholder="Product Name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price NGN</label>
                <input name="price" type="text" value={newProduct.price} onChange={handleInputChange} className="w-full border rounded" placeholder="Price" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <input name="description" type="text" value={newProduct.description} onChange={handleInputChange} className="w-full border rounded" placeholder="Description" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <input name="category" type="text" value={newProduct.category} onChange={handleInputChange} className="w-full border rounded" placeholder="Category" />
              </div>
              <button onClick={handleAddProduct} className="bg-black text-white px-4 py-2 rounded w-full mt-4">Add Product</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
