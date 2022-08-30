import Navbar from "./Navbar/Navbar";
import SearchTab from "./SearchTab";
import ShopCart from "./ShopCart";
import './MenuBar.css'

function MenuBar() {
    return (
        <div className="MenuBar">
            <ShopCart />
            <SearchTab />
            <Navbar className="push-left" />
        </div>
    );
  }
  
  export default MenuBar;
  