import { Fragment, useState } from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Form from "../components/UserMangaement/Form";
import Table from "../components/UserMangaement/Table";

const tabs = [
  { name: "User Management", code: "UM" },
  { name: "Product Details", code: "PD" },
  { name: "Product Price", code: "PP" },
  { name: "Product Inventory", code: "S" },
  { name: "Supplier", code: "S" },
];

const people = [
  {
    ID: "xxxxxxxxxxx",
    Name: "Zehan Khan",
    Email: "zehan@gmail.com",
    DOJ: "oct",
    Address: "78 OTC",
    Phone: 9024172911,
    National_ID: "xxxxxxxxxx",
  },
];

const products = [
  {
    ID: "xxxxxxxxx",
    Name: "product Name",
    category_ID: "xxxxxxxxx",
  },
];

const Main = () => {
  const [activeTab, setActiveTab] = useState("User Management");
  console.log(activeTab)
  return (
    <Fragment>
      <Header />
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-10 flex">
        <Table active={activeTab} data={
          activeTab === "User Mangement" ? people :
          activeTab === "Product Details" ? products :
          people
        } />
        <Form />
      </div>
    </Fragment>
  );
};

export default Main;
