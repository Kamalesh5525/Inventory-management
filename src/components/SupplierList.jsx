import React from 'react';

function SupplierList({ suppliers = [] }) {
     return (
    <div className="mt-4">
      <h3>Suppliers</h3>
      <ul className="list-group">
        {suppliers.map(supplier => (
          <li key={supplier.id} className="list-group-item">
            <strong>{supplier.name}</strong> - {supplier.contact}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SupplierList;
