import React, { useState } from 'react';
import './App.css';

function App() {
  const [customerNameVisible, setCustomerNameVisible] = useState(false);
  const [ordersVisible, setOrdersVisible] = useState(false);

  const handleBuyFromInventory = () => {
    // Logic to open inventory
    console.log('Buy from inventory clicked');
  };

  const handleMyOrders = () => {
    // Toggle the visibility of orders
    setOrdersVisible(!ordersVisible);
  };

  const handleTrackOrder = () => {
    // Logic to track order
    console.log('Track order clicked');
  };

  const handleCustomerName = () => {
    // Toggle the visibility of customer name section
    setCustomerNameVisible(!customerNameVisible);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="DeliBelli-heading">DeliBelli</h1>
        <div className="button-container">
          <button className="button" onClick={handleCustomerName}>Customer Details</button>
          <button className="button" onClick={handleBuyFromInventory}>Buy from Inventory</button>
          <button className="button" onClick={handleMyOrders}>My Orders</button>
          <button className="button" onClick={handleTrackOrder}>Track My Order</button>
        </div>
        {customerNameVisible && (
          <div className="customer-name-container">
            <h2>Customer Name: Sarthak Sharma</h2>
            <button className="button">
              Mobile Number: 1234567890
              <span role="img" aria-label="Telephone">&#x260E;</span>
            </button>
          </div>
        )}
        {ordersVisible && (
          <div className="orders-container">
            <h2>My Orders</h2>
            <ul style={{ listStyleType: 'none', textAlign: 'center', padding: 0 }}>
              <li><button className="buttona">
              Product A - Delivery Pending
              </button></li>
              <li><button className="buttonb">
              Product B - Delivered
              </button></li>
              <li><button className="buttonb">
              Product C - Delivered
              </button></li>
              
              
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
