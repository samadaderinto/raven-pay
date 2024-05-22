import { GlobeIcon, LogoIcon, MenuIcon } from "../../assets/icons";
import ProfileImage from "../../assets/profile.png";


export const Header = () => {
  return (
    <div className="header">
      <LogoIcon/>

      <div className="">
        <img src={ProfileImage} alt="user profile"/>
        <GlobeIcon/>
        <MenuIcon />
      </div>

    </div>
  )
}

