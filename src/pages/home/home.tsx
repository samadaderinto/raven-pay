import React, {FC} from 'react'

import "./home.css";
import { Outlet } from 'react-router-dom';
import { ModeProps } from '../../types/mode';
import { Transact } from '../../components/transact/transact';
import { Header } from '../../layouts/header/header';

const Home: FC<ModeProps> = (props) => {


    return (
      <div className="home"> 
        <Header />
        <Outlet />
        <Transact />
      </div>
    );
  };

export default Home;
  
