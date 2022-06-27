import { Link } from "react-router-dom";
import '../Components/NavBar.css'
function NavBar() {
  

    return(
      <div className="char">
      <Link to="/fav">
      <div className="char2 btn btn-success">Favorite Character </div>
      </Link>
  </div>
    );
}
export default NavBar;