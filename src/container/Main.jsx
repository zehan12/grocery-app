import { Fragment, useState } from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Form from "../components/Form";
import Table from "../components/Table";
import Content from "../components/Content";

const tabs = [
  { name: "User Management", code: "UM" },
  { name: "Product Details", code: "PD" },
  { name: "Product Price", code: "PP" },
  { name: "Product Inventory", code: "S" },
  { name: "Supplier", code: "S" },
];

const people = [
  {
    ID: "1",
    Name: "Zehan Khan",
    Email: "zehan@gmail.com",
    DOJ: "oct",
    Address: "78 OTC",
    Phone: 9024172911,
    National_ID: "xxxxxxxxxx",
  },
  {
    ID: "2",
    Name: "Dan",
    Email: "zehan@gmail.com",
    DOJ: "oct",
    Address: "78 OTC",
    Phone: 9024172911,
    National_ID: "xxxxxxxxxx",
  },
  {
    ID: "3",
    Name: "Andrew",
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

  const dataItem = () => {};

  return (
    <Fragment>
      <Header />
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Content
          active={activeTab}
          data={
            activeTab === "User Mangement"
              ? people
              : activeTab === "Product Details"
              ? products
              : people
          }
        />
    </Fragment>
  );
};

export default Main;
