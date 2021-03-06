import React from 'react'
import FilterContext from '../../context/filtrationContext'
class SearchBar extends React.Component {
    
    constructor(props){
        super(props)
    }
    

    render(){
        return <FilterContext.Consumer>
            {({ filterValue, setFilterValue }) => (
                <div className="searchBar">
                    <input value={filterValue} onChange={(e)=>{setFilterValue(e.target.value)}} class="searchInput"></input>
                    <button onClick={(e)=>{setFilterValue("")}} >Clear Filter</button>
                </div>
            )}
         </FilterContext.Consumer>
    } 
}


export default SearchBar;