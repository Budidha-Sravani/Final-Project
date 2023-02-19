import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of products from the server and set the state
    const fetchProducts = async () => {
      const response = await fetch('/api/admin/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id) => {
    // Delete a product with the given id
    const response = await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
    if (response.ok) {
      // Remove the deleted product from the state
      setProducts(products.filter((product) => product.id !== id));
    } else {
      console.error(`Failed to delete product with id ${id}`);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => handleEditProduct(product.id)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
