import { useParams } from "react-router-dom";
import YTFeed from "./YTFeed";
import "./SearchPage.css";

function SearchPage(){
    const {query} = useParams();

    return(
        <div className="search-page">
            <YTFeed searchTerm={query}/>
        </div>
    );
}


export default SearchPage;