// src/components/SupplierForm.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function SupplierForm({ onAddSupplier }) {
  const [supplierName, setSupplierName] = useState('');
  const [supplierContact, setSupplierContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSupplier = {
      id: Date.now(),
      name: supplierName,
      contact: supplierContact,
    };
    onAddSupplier(newSupplier);
    toast.success(`${supplierName} added successfully!`);
    setSupplierName('');
    setSupplierContact('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Supplier Name"
          value={supplierName}
          onChange={(e) => setSupplierName(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Supplier Contact"
          value={supplierContact}
          onChange={(e) => setSupplierContact(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Supplier</button>
    </form>
  );
}

export default SupplierForm;
