import React, { useState } from 'react';
import InventoryForm from './InventoryForm';
import SupplierList from './SupplierList';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const initialItems = [
  { id: 1, name: 'Item A', quantity: 10, category: 'Category 1', supplier: 'Supplier X' },
  { id: 2, name: 'Item B', quantity: 2, category: 'Category 2', supplier: 'Supplier Y' },
];

const initialSuppliers = [
  { id: 1, name: 'Supplier X', contact: 'contact@supplierx.com' },
  { id: 2, name: 'Supplier Y', contact: 'contact@suppliery.com' },
];

function Dashboard() {
   const [items, setItems] = useState(initialItems);
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [itemToEdit, setItemToEdit] = useState(null);
  const navigate = useNavigate();

  const addItem = (item) => {
    setItems([...items, item]);
    toast.success(`${item.name} added successfully!`);
  };

  const deleteItem = (id) => {
    const itemToDelete = items.find(item => item.id === id);
    setItems(items.filter(item => item.id !== id));
    toast.error(`${itemToDelete.name} deleted successfully!`);
  };
  const updateItem = (updatedItem) => {
  setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  toast.success(`${updatedItem.name} updated successfully!`);
};
const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory ? item.category === filterCategory : true;
    return matchesSearch && matchesCategory;
  });
// // Inside the return statement
// <InventoryForm onAddItem={addItem} itemToEdit={itemToEdit} onUpdateItem={updateItem} />


// const [itemToEdit, setItemToEdit] = useState(null);

// Update handleEditItem to set the item being edited
const handleEditItem = (item) => {
  setItemToEdit(item);
  navigate('/'); // Navigate back to the dashboard
};

 

 

 return (
    <div className="container text-center">
      <h2 className="mt-4">Inventory Items</h2>
      <InventoryForm onAddItem={addItem} itemToEdit={itemToEdit} onUpdateItem={updateItem} />
      
      <div className="mt-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search by item name" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <select 
          className="form-control mt-2" 
          value={filterCategory} 
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {[...new Set(items.map(item => item.category))].map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="row justify-content-center mt-3">
        {filteredItems.map(item => (
          <div key={item.id} className="col-sm-6 col-md-4 mb-3">
            <div className={`card ${item.quantity < 5 ? 'bg-danger text-white' : 'bg-success text-white'}`} style={{borderRadius:"15px"}}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Quantity: {item.quantity}</p>
                <p className="card-text">Category: {item.category}</p>
                <p className="card-text">Supplier: {item.supplier}</p>
                <button onClick={() => handleEditItem(item)} className="btn btn-warning me-2 mx-2 border border-dark ">Edit</button>
                <button onClick={() => deleteItem(item.id)} className="btn btn-danger border border-white">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SupplierList suppliers={suppliers} /> 
      <Link to="/view" className="btn btn-info mt-3" state={{ items }}>View All Items</Link>
    </div>
  );
}


export default Dashboard;
