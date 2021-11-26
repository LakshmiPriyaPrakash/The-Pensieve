
import { useParams } from "react-router-dom";
import './Search.css';


const Search = () => {

    const { searchTerm } = useParams();

    return (
        <div className="search-res">
            {searchTerm}
        </div>
    );
}



export default Search;
