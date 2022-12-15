import './SearchBar.css'
import { FiSearch } from 'react-icons/fi';


function SearchBar() {

    

    return (
        <>
        {/* <i class="fa-magnifying-glass"></i> */}
        <FiSearch className='magnifying-glass'/>
        <input type="text" 
        className='search'
        placeholder='What do you want to listen to?'
        name="" 
        // value=""
        />
        </>
    )
        
        
};

export default SearchBar;