import { GlobeIcon, LogoIcon, MenuIcon } from "../../assets/icons";
import ProfileImage from "../../assets/profile.png";
import "./header.css"


export const Header = () => {
  return (
    <div className="header">
      <LogoIcon/>

      <div className="header__nav">
        <img className="header__nav--img" src={ProfileImage} alt="user profile"/>
        <GlobeIcon/>
        <MenuIcon />
      </div>

    </div>
  )
}

