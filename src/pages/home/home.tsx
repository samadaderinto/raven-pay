import {FC} from 'react'


import { Outlet } from 'react-router-dom';
import { ModeProps } from '../../types/mode';
import { Transact } from '../../components/transact/transact';
import { Header } from '../../layouts/header/header';
import { Rates } from '../../components/rates/rates';

import "./home.css";

const Home: FC<ModeProps> = ({mode}) => {


    return (
      <div className="home-container" style={{background: mode === "light" ? "#ffffff" : "#1C2127"}}> 
        <Header mode={mode} />
        <Rates/>
        <Outlet />
        <Transact />
      </div>
    );
  };

export default Home;
  
