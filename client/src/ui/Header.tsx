import { Link } from "react-router-dom";
import { logo } from "../assets";


const Header = () => {
        const navigation = [
          { title: "Product", link: "/product" },
          { title: "Cart", link: "/cart" },
          { title: "Category", link: "/category" },
          { title: "Favorite", link: "/favorite" },
          // { title: "NotFound", link: "/notfound" },
          { title: "Orders", link: "/orders" },
          { title: "Cancel", link: "/cancel" },
          { title: "Profile", link: "/profile" },
          { title: "Success", link: "/success" },
        ];
       return (
         <div className="max-w-screen-xl lg:mx-8 h-20 items-center justify-between flex px-6 lg:px-0">
           <Link to="/">
             <img className="w-40" src={logo} alt="" />
           </Link>
           <div className="flex gap-4 font-medium">
             {navigation.map((item) => (
               <ul key={item.title} className="flex">
                 <Link to={item.link} className="flex">
                   {item.title}
                 </Link>
               </ul>
             ))}
           </div>
         </div>
       );
};

export default Header;