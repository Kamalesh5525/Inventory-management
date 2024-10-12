
import React from 'react';
import { useLocation } from 'react-router-dom';

function ViewItems({ items }) {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h2 style={{textAlign:"center"}}>All Inventory Items</h2>
      <div className="row">
        {state?.items.map(item => (
          <div key={item.id} className="col-md-4 mb-3" >
              <div className="card-body"  >
            <div className={`card ${item.quantity < 5 ? 'bg-danger text-white' : 'bg-success text-white'}`} style={{borderRadius:"10px",padding:"10px   "}}>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Quantity: {item.quantity}</p>
                <p className="card-text">Category: {item.category}</p>
                <p className="card-text">Supplier: {item.supplier}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewItems;
