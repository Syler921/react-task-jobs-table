import React from "react";

// set the defaults
const FilterContext = React.createContext({
  filterValue: "",
  setFilterValue: () => {}
});

export default FilterContext;
