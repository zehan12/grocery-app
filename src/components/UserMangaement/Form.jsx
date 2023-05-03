import { Fragment } from "react";

const Form = () => {
  return (
    <Fragment>
      <div className="bg-grey-lightest mx-auto">
        <div className="container">
          <div className="w-full bg-white rounded shadow">
            <div className="py-4 px-8 text-black text-2xl border-b border-grey-lighter">
              User Management Form
            </div>
            <div className="py-4 px-8">
              <div className="flex mb-4">
                <div className="w-1/2 mr-1">
                  <label className="block text-grey-darker text-sm font-bold mb-2">
                    First Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="first_name"
                    type="text"
                    placeholder="Your first name"
                  />
                </div>
                <div className="w-1/2 ml-1">
                  <label className="block text-grey-darker text-sm font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="last_name"
                    type="text"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="email"
                  type="email"
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="password"
                  type="password"
                  placeholder="Your secure password"
                />
                <p className="text-grey text-xs mt-1">At least 6 characters</p>
              </div>
              <div className="flex items-center justify-between mt-8">
                <button
                  className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full"
                  type="submit"
                > 
                Submit

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
