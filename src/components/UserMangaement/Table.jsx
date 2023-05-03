import { Fragment, useEffect, useState } from "react";

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

const Table = (props) => {
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

  const { data } = props;

  return (
    <div className="px-4 sm:px-6 lg:px-8 mx-auto">
      {fields.length !== 0 ? (
        <>
          <div className="sm:flex sm:datas-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl py-2 font-semibold leading-6 text-gray-900">
                {props.active} Table
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the users in your account including their{" "}
                {fields.map((ele, i) =>
                  i == fields.length - 2
                    ? " and " + ele
                    : i === fields.length - 1
                    ? "."
                    : ele + ", "
                )}
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr className="divide-x divide-gray-200">
                      {fields.map((fields) => (
                        <th
                          key={fields}
                          scope="col"
                          className="whitespace-nowrap py-4 px-9 text-sm font-medium text-gray-900 sm:pl-1 ml-3"
                        >
                          {fields}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200  bg-white">
                    {data.map((person) => (
                      <tr key={person} className="divide-x divide-gray-200">
                        {fields.map((field) => (
                          <td
                            key={field}
                            className="whitespace-nowrap py-4 px-9 text-sm font-medium text-gray-900 sm:pl-1 ml-3"
                          >
                            {person[field] === undefined ? (
                              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold ml-3 py-1 px-1 ">
                                Edit
                              </button>
                            ) : (
                              person[field]
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Table;
