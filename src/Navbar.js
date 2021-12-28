import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>Nippon</h1>

            <div className="links">
                <Link to ="/">Home</Link>
                <Link to ="/create" >New Project</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;