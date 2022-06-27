import {useDispatch} from "react-redux"
import { searchedCharacters } from "../Redux/Actions/characterActions";
function Searchbar(){
    const dispatch = useDispatch();
    return(
<div className="">
        <input
          className="border border-primary border-2 fs-4  "
          type="search"
          id="outlined-basic"
          onChange={(e) => {
              dispatch(searchedCharacters(e.target.value));
            }}
          variant="outlined"
          fullWidth
          label="Search"
          placeholder="Search Your favorite character"
        />
      </div>
    );
}
export default Searchbar;