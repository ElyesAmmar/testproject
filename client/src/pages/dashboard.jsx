import React from "react";
import BarDash from "../components/HeaderDash";
import Products from "../components/products/products";
import Clients from "../components/clients/clients";



function Dashboard() {
  return (
    <div className="dashboard">
      <BarDash />
      <Products />
     <Clients />
      
     
      
    </div>
  );
}

export default Dashboard;


