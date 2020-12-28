import './Navbar.css';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="logo-section">
        <MenuIcon className="menu" />
        <img className="logo" src="assets/images/logo.png" alt="youtube logo" />
        <span className="logo-text">Youtube</span>
        <span className="country">EG</span>
      </div>
      <div className="search-section">
        <input className="searchbar" placeholder="Search" />
        <button className="search-button">
          <SearchIcon />
        </button>
      </div>
      <div className="action-section">
        <VideoCallIcon className="record" />
        <AppsIcon className="apps" />
        <MoreVertIcon className="more" />
        <button className="sign-in-button">
          <AccountCircleIcon />
          <span>SIGN IN</span>
        </button>
      </div>
    </nav>
  );
}
