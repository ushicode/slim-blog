import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const linkStyle = {
        color: 'white',
        backgroundColor: '#E64A19',
        borderRadius: '0'
    }

    return (
        <nav className="navbar">
            <h1> &#123; Slim Blog &#125;</h1>
            
            
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Post</Link>
                <a href="/" style={linkStyle}>TUBE</a>
            </div>
        </nav>
    );
}

export default Navbar;