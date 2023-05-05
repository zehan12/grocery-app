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
  const [activeItem, setActiveItem] = useState(null);
  const [activeID, setActiveID] = useState(0);
  const [editID, setEditID] = useState(0);

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

  const handleActiveItem = (id) => {
    const item = props.data.filter((v) => v.ID === id);
    setActiveItem(item);
    setActiveID(id);
  };

  return (
    <Fragment>
      <div className="mt-10 flex">
        <Table
          active={props.active}
          fields={fields}
          data={props.data}
          handleActiveItem={handleActiveItem}
          activeID={activeID}
        />
        <Form active={props.active} fields={fields} data={activeItem} editID={editID} />
      </div>
    </Fragment>
  );
};

export default Content;
