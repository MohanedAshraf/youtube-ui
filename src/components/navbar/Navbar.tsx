import './Navbar.css';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LabelButton from '../labelButton/LabelButton';

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
        <LabelButton
          label="Search"
          className="search-button"
          content={<SearchIcon />}
        />
      </div>
      <div className="action-section">
        <LabelButton
          label="Create"
          className="record"
          content={<VideoCallIcon />}
        />
        <LabelButton
          label="Youtube Apps"
          className="apps"
          content={<AppsIcon />}
        />
        <LabelButton
          label="Settings"
          className="more"
          content={<MoreVertIcon />}
        />

        <button className="sign-in-button">
          <AccountCircleIcon />
          <span>SIGN IN</span>
        </button>
      </div>
    </nav>
  );
}
