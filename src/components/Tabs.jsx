import React, { Fragment, useState } from "react";

const Tabs = (props) => {
  return (
    <Fragment>
      <nav className="relative z-0 flex border overflow-hidden dark:border-gray-700">
        {props.tabs.map((tab) => (
          <button
            onClick={() => props.setActiveTab(tab.name)}
            key={tab.name}
            type="button"
            className={`dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1  py-4 px-4 text-gray-500  hover:text-white text-sm font-medium text-center overflow-hidden hover:bg-blue-500 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-blue-700 dark:hover:text-400 
            ${props.activeTab === tab.name ? "bg-blue-500 text-white" : ""}`}
          >
            {tab.name}
          </button>
        ))}
      </nav>
    </Fragment>
  );
};

export default Tabs;
