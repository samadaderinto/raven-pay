import {FC} from 'react'

import "./home.css";
import { Outlet } from 'react-router-dom';
import { ModeProps } from '../../types/mode';
import { Transact } from '../../components/transact/transact';
import { Header } from '../../layouts/header/header';

const Home: FC<ModeProps> = ({mode, setMode}) => {


    return (
      <div className="home" style={{background: mode === "light" ? "#ffffff" : "#eeeeee"}}> 
        <Header />
        <Outlet />
        <Transact />
      </div>
    );
  };

export default Home;
  
