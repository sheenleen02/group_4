import React, { useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { GiComputing, GiCookingPot, GiGamepadCross, GiPteruges } from "react-icons/gi";
import { GiRunningShoe } from "react-icons/gi";
import { GiDiamondRing } from "react-icons/gi";
import { HiComputerDesktop } from "react-icons/hi2";
import { RiBookOpenLine } from "react-icons/ri";



// Sample products data  
const productsData = [
  {
    id: 1,
    image: '/images/fan.png',
    name: 'Oxford Fan',
    category: 'appliance',
    price: '₦12,000',
    stock: 12,
  },
  {
    id: 2,
    image: '/images/television.png',
    name: 'television',
    category: 'appliance',
    price: '#4,000',
    stock: '4',
  },
  {
    id: 3,
    image: '/images/gamepad.png',
    name: 'Game pad',
    category: 'gaming',
    price: '#4,000',
    stock: '4',
  },
  {
    id: 4,
    image: '/image/sneaker/.png',
    name: 'royal yactar',
    category: 'shoe',
    price: '#4,000',
    stock: '4',
  },
  {
    id: 5,
    image: '/image/sneaker/.png',
    name: 'royal yactar',
    category: 'shoe',
    price: '#4,000',
    stock: '4',
  },
  {
    id: 6,
    image: '/image/sneaker/.png',
    name: 'royal yactar',
    category: 'shoe',
    price: '#4,000',
    stock: '4',
  },
  {
    id: 7,
    image: '/image/sneaker/.png',
    name: 'royal yactar',
    category: 'shoe',
    price: '#4,000',
    stock: '4',
  },
  {
    id: 8,
    image: '/image/sneaker/.png',
    name: 'royal yactar',
    category: 'shoe',
    price: '#4,000',
    stock: '4',
  },
];


// Categories for filtering  
const categories = [
  { icon: <GiCookingPot />, name: 'appliance', label: 'Appliance' },
  { icon: <GiRunningShoe />, name: 'shoe', label: 'Shoe' },
  { icon: <GiDiamondRing />, name: 'jewelry', label: 'Jewelry' },
  { icon: <RiBookOpenLine/>, name: 'book', label: 'Book' },
  { icon: <GiPteruges />, name: 'pet supplies', label: 'Pet Supplies' },
  { icon: <GiGamepadCross />, name: 'gaming', label: 'Gaming' },
  { icon: <GiComputing />, name: 'computing', label: 'Computing' },
];

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('appliance');
  const [products, setProducts] = useState(productsData);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState({});
  // console.log(products);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    stock: 1,
    hide: false,
    image: ''
  });
  const [availableStock, setAvailableStock] = useState(1);

  // Filter products based on the selected category  
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  // Function to handle input change in form  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle image input change  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle product submission  
  const handleAddProduct = () => {
    const id = products.length + 1; // Simple id generation for demo purposes  
    setProducts([...products, { ...newProduct, id }]);
    setShowModal(false); // Close modal after adding the product  
    setNewProduct({
      name: '',
      price: '',
      description: '',
      category: '',
      stock: availableStock,
      hide: false,
      image: ''
    }); // Reset the new product  
  };
  // Function to handle editing a product splicing

  const handleUpdateProduct = (product) => {
    setSelectedProductId(product.id)
    setSelectedProduct(product)
    // Close modal after adding the product  

  };
  // Function to handle editing a product splicing

  const handleIdChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prev) => ({ ...prev, [name]: value }));
  };
  const handleEditProduct = () => {

    const updateProduct = products.find(item => item.id === selectedProductId)


    if (updateProduct) {

      updateProduct.price = selectedProduct.price
      updateProduct.name = selectedProduct.name
      updateProduct.stock = selectedProduct.stock
      console.log("we just updated the price");

    }

    setShowEditModal(false); // Set the product details for editing
    // setAvailableStock(product.stock); // Set the available stock for editing
    setShowEditModal(false); // Show the modal
  };


  // Function to handle removing a product  
  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <section className="flex flex-col justify-start md:justify-around bg-white">
      {/* Category Navigation */}

      <nav className="flex items-center gap-8 mb-4">
  <button className="text-black bg-transparent border-none font-medium capitalize flex items-center gap-2">
    Edit by Categories
  </button>
  <div className="flex items-center justify-between gap-3 border rounded-full ">
    {categories.map((category) => (
      <button
        key={category.name}
        className={`flex  items-center text-center p-3 transition-all duration-200 ${
          selectedCategory === category.name
            ? 'bg-[#5C2018] text-white rounded'
            : 'hover:bg-gray-200 text-[#5C2018] rounded-full'
        }`}
        onClick={() => setSelectedCategory(category.name)}
      >
        <span className="text-2xl">{category.icon}</span>
        <span className="text-sm">{category.label}</span>
      </button>
    ))}
  </div>
</nav>


      {/* Add Product Button */}
      <div className="flex flex-col">

        <button
          className='border-green-200 ml-[900px] bg-black text-white rounded text-center p-2'
          onClick={() => setShowModal(true)}
        >
          + Add Product
        </button>


        {/* Product Display */}
        <div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-4 mt-4 mb-8 ml-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-300 overflow-hidden p-2  w-full shadow-lg  flex flex-col items-center "
            >
              <img src={product.image} alt={product.name} className="w-[200px] h-[200px]" />
              <h3 className="text-lg font-bold mb-2 text-gray-800 text-center">{product.name}</h3>
              <div className='flex justify-between w-full px-4 border-t border-gray-300 mt-2  '><p className="text-lg flex mb-2 font-semibold">Price:</p> <p> {product.price}</p></div>
              <div className='w-full flex justify-between px-4'><p className="text-lg flex text-center mb-2 font-semibold ">Stock:</p> <p>{product.stock}</p> </div>
              <div className='w-full flex justify-between px-4'><p className="text-lg flex text-center mb-2 font-semibold ">category:</p> <p>{product.category}</p> </div>
            
              <div className="flex w-full justify-between px-4">
        <button
          onClick={() => { handleUpdateProduct(product), setShowEditModal(true) }}
          className="bg-blue-900 text-white px-4 py-2 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => handleRemoveProduct(product.id)}
          className="bg-red-500 text-white px-2 py-2 rounded-md"
        >
          Remove
        </button>
      </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for adding new product */}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-[90%] md:w-[600px]">

            <div className='flex justify-between'>
              <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
              <div onClick={() => setShowEditModal(false)}>
                <CiCircleRemove size={30} className="cursor-pointer" />
              </div>
            </div>

            <div className="space-y-4 bg-gray-300">
              {/* Image Input */}
              <div>
                <label className="block text-sm font-medium mb-1">Add Image</label>
                <input
                  name="image"
                  type="file"
                  onChange={handleImageChange} // Changed to handle image upload
                  required
                  className="w-full border p-2 rounded"
                />
              </div>

              {/* Product Name */}
              <div className='flex justify-between'>
                <label className="block text-sm font-medium mb-1">Product Name (required)</label>
                <input
                  name="name"
                  type="text"
                  value={selectedProduct.name}
                  onChange={handleIdChange}
                  className="w-1/2 border  rounded"
                  placeholder="Product Name"
                />
              </div>


              {/* Price */}
              <div className='flex justify-between' >
                <label className="block text-sm font-medium mb-1">Price NGN</label>
                <input
                  name="price"
                  type="text"
                  value={selectedProduct.price}
                  onChange={handleIdChange}
                  className="w-1/2 border  rounded"
                  placeholder="Price"
                />
              </div>


              {/* Description */}
              <div className='flex justify-between'>
                <label className="block text-sm font-medium mb-1">Description</label>
                <input
                  name="description"
                  type="text"
                  value={selectedProduct.description}
                  onChange={handleIdChange}
                  className="w-1/2 border rounded"
                  placeholder="Description"
                />
              </div>



              {/* Category */}
              <div className='flex  justify-between'>
                <label className="block text-sm font-medium mb-1">Category</label>
                <input
                  name="category"
                  type="text"
                  value={selectedProduct.category}
                  onChange={handleIdChange}
                  className="w-1/2 border rounded"
                  placeholder="Category"
                />
              </div>



              {/* Stock */}
              <div>
                <label className="block text-sm font-medium mb-1">Available Stock</label>
                <div className='flex gap-2 rounded'>
                  <button className='bg-black text-white px-3' onClick={() => setAvailableStock(availableStock - 1)}>-</button>
                  <div className='bg-black text-white px-3'>{availableStock}</div>
                  <button className='bg-black text-white px-3' onClick={() => setAvailableStock(availableStock + 1)}>+</button>
                </div>
              </div>




              {/* Hide Checkbox */}
              <div className="flex items-center">
                <input
                  name="hide"
                  type="checkbox"
                  checked={newProduct.hide}
                  onChange={() => setNewProduct((prev) => ({ ...prev, hide: !prev.hide }))}
                  className="mr-2"
                />
                <label className="text-sm">Hide this item</label>
              </div>


              {/* Submit Button */}
              <button
                onClick={handleEditProduct
                }
                className="bg-black text-white px-4 py-2 rounded w-full mt-4"
              >
                UPDATE PRODUCT
              </button>
            </div>
          </div>
        </div>
      )}



      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-gray-300 p-8 rounded-lg shadow-lg w-[90%] md:w-[600px]">

            <div className='flex justify-between'>
              <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
              <div onClick={() => setShowModal(false)}>
                <CiCircleRemove size={30} className="cursor-pointer" />
              </div>
            </div>

            <div className="space-y-4 bg-gray-300">
              {/* Image Input */}
              <div>
                <label className="block text-sm font-medium mb-1">Add Image</label>
                <input
                  name="image"
                  type="file"
                  onChange={handleImageChange} // Changed to handle image upload
                  required
                  className="w-full border p-2 rounded"
                />
              </div>

              {/* Product Name */}
              <div className='flex justify-between'>
                <label className="block text-sm font-medium mb-1">Product Name (required)</label>
                <input
                  name="name"
                  type="text"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  className="w-1/2 border  rounded"
                  placeholder="Product Name"
                />
              </div>




              {/* Price */}
              <div className='flex justify-between' >
                <label className="block text-sm font-medium mb-1">Price NGN</label>
                <input
                  name="price"
                  type="text"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  className="w-1/2 border  rounded"
                  placeholder="Price"
                />
              </div>



              {/* Description */}
              <div className='flex justify-between'>
                <label className="block text-sm font-medium mb-1">Description</label>
                <input
                  name="description"
                  type="text"
                  value={newProduct.description}
                  onChange={handleInputChange}
                  className="w-1/2 border rounded"
                  placeholder="Description"
                />
              </div>



              {/* Category */}
              <div className='flex  justify-between'>
                <label className="block text-sm font-medium mb-1">Category</label>
                <input
                  name="category"
                  type="text"
                  value={newProduct.category}
                  onChange={handleInputChange}
                  className="w-1/2 border rounded"
                  placeholder="Category"
                />
              </div>



              {/* Stock */}
              <div>
                <label className="block text-sm font-medium mb-1">Available Stock</label>
                <div className='flex gap-2 rounded'>
                  <button className='bg-black text-white px-3' onClick={() => setAvailableStock(availableStock - 1)}>-</button>
                  <div className='bg-black text-white px-3'>{availableStock}</div>
                  <button className='bg-black text-white px-3' onClick={() => setAvailableStock(availableStock + 1)}>+</button>
                </div>
              </div>




              {/* Hide Checkbox */}
              <div className="flex items-center">
                <input
                  name="hide"
                  type="checkbox"
                  checked={newProduct.hide}
                  onChange={() => setNewProduct((prev) => ({ ...prev, hide: !prev.hide }))}
                  className="mr-2"
                />
                <label className="text-sm">Hide this item</label>
              </div>


              {/* Submit Button */}
              <button
                onClick={handleAddProduct}
                className="bg-black text-white px-4 py-2 rounded w-full mt-4"
              >
                Add stuff
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
