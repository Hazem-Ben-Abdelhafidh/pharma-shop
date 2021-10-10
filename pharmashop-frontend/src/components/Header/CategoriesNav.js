import { Link } from "react-router-dom";

const CategoriesBar = () => {
    return (   
        <div>
            <nav className="Navigation">
                <ul className="categoriesbar">
                    <li><Link to="/categories/1">Face</Link></li>
                    <li><Link to="/categories/2">Hair</Link></li>
                    <li><Link to="/categories/3">Food Supplements</Link></li>
                </ul>
            </nav>
        </div> );
}
 
export default CategoriesBar;