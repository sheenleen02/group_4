import React, { useState } from 'react';  
import { CiCircleRemove } from "react-icons/ci";  

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
];  

// Categories for filtering  
const categories = [  
  { name: 'appliance', label: 'Appliance' },  
  { name: 'shoe', label: 'Shoe' },  
  { name: 'jewelry', label: 'Jewelry' },  
  { name: 'book', label: 'Book' },  
  { name: 'pet supplies', label: 'Pet Supplies' },  
  { name: 'gaming', label: 'Gaming' },  
  { name: 'computing', label: 'Computing' },  
];  

const Product = () => {  
  const [selectedCategory, setSelectedCategory] = useState('appliance');  
  const [products, setProducts] = useState(productsData);  
  const [showModal, setShowModal] = useState(false);  
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
      stock: 1,  
      hide: false,  
      image: ''  
    }); // Reset the new product  
  };  
   // Function to handle editing a product
   const handleEditProduct = (product) => {
    setNewProduct({ ...product }); // Set the product details for editing
    setAvailableStock(product.stock); // Set the available stock for editing
    setShowModal(true); // Show the modal
  };
    // Function to handle removing a product  
    const handleRemoveProduct = (id) => {
      setProducts(products.filter(product => product.id !== id));
    };

  return (  
    <section className="flex flex-col justify-start md:justify-around bg-gray-100">  
      {/* Category Navigation */}  
      <nav className="flex gap-10 mb-10">  
        <button className="text-white bg-black rounded capitalize p-2">  
          Edit by Categories  
        </button>  
        <div className="flex justify-between gap-3">  
          {categories.map((category) => (  
            <button  
              key={category.name}  
              className={`text-black p-2 border ${  
                selectedCategory === category.name ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'  
              }`}  
              onClick={() => setSelectedCategory(category.name)}  
            >  
              {category.label}  
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
          Add Product  
        </button>  

        {/* Product Display */}  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">  
          {filteredProducts.map((product) => (  
            <div  
              key={product.id}  
              className="bg-gray-400 p-2 shadow-md rounded-lg flex flex-col items-center"  
            >  
              <img src={product.image} alt={product.name} className="w-full h-[300px]" />  
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>  
              <p className="text-lg flex mb-2">Price: {product.price}</p>  
              <p className="text-md mb-2">Stock: {product.stock}</p>  
              <div className="flex gap-2">  
                <button  onClick={() => handleRemoveProduct(product.id)}  className="bg-red-500 text-white px-4 py-2 rounded mt-3">  
                  Remove  
                </button>  
                <button onClick={() => handleEditProduct(product)} className="bg-green-400 text-white px-4 py-2 rounded mt-3">  
                  Edit  
                </button>  
              </div>  
            </div>  
          ))}  
        </div>  
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
                  <button className='bg-black text-white px-3' onClick={()=> setAvailableStock(availableStock - 1)}>-</button>
                  <div className='bg-black text-white px-3'>{availableStock}</div>
                  <button className='bg-black text-white px-3'  onClick={()=> setAvailableStock(availableStock + 1)}>+</button>
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
