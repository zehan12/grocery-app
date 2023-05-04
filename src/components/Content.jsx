import { Fragment, useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

const userFields = [
  "ID",
  "Name",
  "Email",
  "DOJ",
  "Address",
  "Phone",
  "National_ID",
  "action",
];

const productFields = ["ID", "Name", "category_ID", "action"];

const Content = (props) => {
  const [fields, setFields] = useState("");

  const handleDetails = () => {
    switch (true) {
      case props.active === "User Management":
        setFields(userFields);
        break;
      case props.active === "Product Details":
        setFields(productFields);
        break;
      default:
        setFields(userFields);
    }
  };

  useEffect(() => {
    handleDetails();
  }, []);

  useEffect(() => {
    handleDetails();
  }, [props.active]);

  return (
    <Fragment>
      <div className="mt-10 flex">
        <Table active={props.active} fields={fields} data={props.data} />
        <Form  active={props.active} fields={fields} data={props.data} />
        </div>
    </Fragment>
  );
};

export default Content;
