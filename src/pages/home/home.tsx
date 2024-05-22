import {FC} from 'react'

import { ModeProps } from '../../types/mode';
import { Transact } from '../../components/transact/transact';
import { Header } from '../../layouts/header/header';
import { Rates } from '../../components/rates/rates';

import "./home.css";
import { Data } from '../../components/data/data';

const Home: FC<ModeProps> = ({mode}) => {


    return (
      <div className="home-container" style={{background: mode === "light" ? "#ffffff" : "#1C2127"}}> 
        <Header mode={mode} />
        <Rates/>
        <Data/>
        <Transact />
      </div>
    );
  };

export default Home;
  
