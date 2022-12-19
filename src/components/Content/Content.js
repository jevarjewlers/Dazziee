import "./Content.scss";
import { Routes, Route } from "react-router-dom";
import { FoodItems } from "../../pages/FoodItems/FoodItems";
import { Customers } from "../../pages/Customers/Customers";
import { Orders } from "../../pages/Orders/Orders";
import { EditProduct } from "../../pages/EditProduct/EditProduct";
import { Discounts } from "../../pages/Discounts/Discounts";
import { Employees } from "../../pages/Employees/Employees";
import { Settings } from "../../pages/Settings/Settings";

export const Content = () => {
  return (
    <div className="Content">
      <Routes>
        <Route path="/" element={<FoodItems />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/packages" element={<EditProduct />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/employees" element={<Employees />} />
       
      </Routes>
      <br />
      <Routes>
      <Route path="/settings" element={<Settings />} className="setting" />
      </Routes>
    </div>
  );
};
