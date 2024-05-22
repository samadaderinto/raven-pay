import { FC } from "react";
import { GlobeIcon, LogoDarkIcon, LogoLightIcon, MenuIcon } from "../../assets/icons";
import ProfileImage from "../../assets/profile.png";
import { ModeProps } from "../../types/mode";
import "./header.css"


export const Header: FC<ModeProps> = ({mode}) => {
  return (
    <div className="header">
      {mode == "light" ? <LogoLightIcon/> : <LogoDarkIcon/>}
     

      <div className="header__nav">
        <img className="header__nav--img" src={ProfileImage} alt="user profile"/>
        <GlobeIcon/>
        <MenuIcon />
      </div>

    </div>
  )
}

