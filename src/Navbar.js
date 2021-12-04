import './Navbar.css';

const Navbar = () => {
    const linkStyle = {
        color: 'white',
        backgroundColor: '#E64A19',
        borderRadius: '0'
    }

    return (
        <nav className="navbar">
            <h1> &#x0226E; Slim Blog &#x0226F;</h1>
            
            
            <div className="links">
                <a href="/">Home</a>
                <a href="/">New Post</a>
                <a href="/create" style={linkStyle}>TUBE</a>
            </div>
        </nav>
    );
}

export default Navbar;