import { Routes } from "react-router-dom";
import { Search } from "../../components/Search/Search";
import "./Customerss.scss";
// import {table} from "./table";
import { Table } from "./Table";


export const Customers = () => {
  return <div>
    <h1>Customer</h1>
    <Search />
    <Table />
   
</div>

  
};
