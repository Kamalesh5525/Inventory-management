import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EditItem from './components/EditItem';
import ViewItems from './components/ViewItems';
import { ToastContainer } from 'react-toastify';
import './App.css'

function App() {
  return (
    <Router>
      <div className="container mt-4 " style={{backgroundColor:"#B5C0D0",border:"4px solid black",borderRadius:"15px"}}>
        <h1 style={{textAlign:"center"}}>Inventory Management</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit" element={<EditItem />} />
          <Route path="/view" element={<ViewItems />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />
      </div>
    </Router>
  );
}

export default App;
