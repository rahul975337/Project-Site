import React, { useState } from "react";
import "./App.css";
import Project from "./Project";
import projects from "./data";
import Categories from "./Categories";
/////////////////////Getting the unique categories from the data////
const allCategories = [
  "all",
  ...new Set(projects.map((item) => item.category)),
];

///////////
function App() {
  const [menuItems, setMenuItems] = useState(projects);
  // eslint-disable-next-line
  const [categories, setCategories] = useState(allCategories);
  ////////////////////////////////////
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(projects);
    } else {
      const newItems = projects.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };
  ///////////////
  return (
    <div className="App">
      <header>
        <h1 className="heading">Projects</h1>
      </header>
      <Categories
        className="categories-section"
        categories={categories}
        filterItems={filterItems}
      />
      <Project items={menuItems} />
    </div>
  );
}

export default App;
