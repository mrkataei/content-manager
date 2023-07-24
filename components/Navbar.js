import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" href="../">
            Content Manager
          </Link>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <Link href="/" className="navbar-item is-active">
              Home
            </Link>
            <Link href="/resources/new" className="navbar-item">
              New
            </Link>
            <a className="navbar-item">Features</a>
            <a className="navbar-item">Team</a>
            <a className="navbar-item">Archives</a>
            <a className="navbar-item">Help</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Account</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Dashboard</a>
                <a className="navbar-item">Profile</a>
                <a className="navbar-item">Settings</a>
                <hr className="navbar-divider" />
                <div className="navbar-item">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
