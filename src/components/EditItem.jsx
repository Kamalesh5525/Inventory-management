import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

function EditItem() {
  const location = useLocation();
  const navigate = useNavigate();
  const itemToEdit = location.state?.item;

  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState('');
  const [supplier, setSupplier] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setItemName(itemToEdit.name);
      setQuantity(itemToEdit.quantity);
      setCategory(itemToEdit.category);
      setSupplier(itemToEdit.supplier);
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = { ...itemToEdit, name: itemName, quantity, category, supplier };
    
    // Simulate updating the item (you would actually send this to your state management)
    toast.success(`${updatedItem.name} updated successfully!`);
    navigate('/'); // Navigate back to the dashboard
  };

  return (
    <div className="container text-center">
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
          <input type="number" className="form-control mt-2" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required />
          <input type="text" className="form-control mt-2" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
          <input type="text" className="form-control mt-2" placeholder="Supplier" value={supplier} onChange={(e) => setSupplier(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Update Item</button>
      </form>
    </div>
  );
}

export default EditItem;
