import {useState} from "react"
//import { AsyncPaginate } from 'react-select-async-paginate'

//coponent uses async to asjust install
const Search = ({onSubmitChange}) => {

    //this is saying that the search will start empty
    const [search, setSearch] = useState();
    //the setSearch is able to update what we search for

    const handleSubmit = async (searchData) => {
        searchData.preventDefault();
        onSubmitChange(search) // sends the search city up to app.js setCity
        
      }
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        //the above is basically saying we are searching this up
        //onSearchChange(searchData);
    }
    //async paginate is able to do the drop down of the search bar
    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input onChange={(event) => handleOnChange(event.target.value)} value={search===undefined? "":search} placeholder="City Name" type="text" />
            </label>
            <input type="submit" value="Submit" />
            
        </form>
        
    );
};

export default Search;