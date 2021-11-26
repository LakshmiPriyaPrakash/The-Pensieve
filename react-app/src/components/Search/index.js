
import { useState } from "react";
import './Search.css';


const Search = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handle = () => console.log(searchTerm);

    return (
        <div className="search-cont">
            <i className="fas fa-search" />
            <input
                className="search-input"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handle()}
            />
        </div>
    );
}



export default Search;
