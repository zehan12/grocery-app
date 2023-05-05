import { Fragment, useState, useEffect } from "react";
const Form = (props) => {
  const { active, data, fields } = props;
  const [state, setState] = useState({});

  useEffect(() => {
    if (data && fields) {
      const initialState = fields.reduce((acc, cv) => {
        acc[cv] = data[0][cv];
        return acc;
      }, {});
      setState(initialState);
    }
  }, [fields, data]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  if (!data) return <h1>Empty</h1>

  return (
    <Fragment>
      <div className="rounded px-10 py-1 w-1/2">
        <div className="text-black text-2xl font-bold pb-6">{active} Form</div>
        <div className="mb-4">
          {fields &&
            fields.map((field) =>
              field === "action" ? (
                ""
              ) : (
                <div className="flex flex-col mb-2" key={field}>
                  <label className="mb-2 uppercase text-lg text-grey-darkest">
                    {field}
                  </label>
                  <input
                    className={`border py-1 px-1 focus:outline-none ${data[0][field] === state[field] ? "text-black" : "text-green-600" }`}
                    type="text"
                    onChange={(e) => handleChange(e)}
                    name={field}
                    value={state[field]}
                  />
                </div>
              )
            )}
          <div className="flex items-c enter justify-between mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-dark text-white py-2 px-4 rounded-full"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;