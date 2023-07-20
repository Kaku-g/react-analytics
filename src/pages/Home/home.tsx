
import React, { useState } from "react";

import { IResourceComponentsProps, getDefaultFilter,useList,useGetIdentity,useMany,useOne } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Button,Typography,Image } from "antd";
import {BarChartOutlined,LineChartOutlined} from '@ant-design/icons'
 import projectStyles from './style.module.css'
import styles from './home.module.css'
import Carbon from './images/carbon (1).svg';
import './home.css';
import Graph from './images/graphs.svg';
import Use from './images/carbon (3).svg'
import Chart from './images/chart.svg';
import Stats from './images/stats.png';
import { Navigate } from "react-router-dom";




const {Title,Paragraph,Text,Link}=Typography;

export const Home: React.FC<IResourceComponentsProps> = () => {


    return(
        

        <div className="home">

            
            <div className="navbar" >
                <div>React-Analytics</div>
                <a href="./login">
                <Button className="button"  style={{color:'purple'}}>Get started</Button>
                </a>

            </div>

            <div className="hero">
            
               
                <div className="hero_content">
                    <h3 className='heading'>Take Control of your website</h3>
                    <h5 className="subheading">library that tracks your react-website logs</h5>
                </div>
                <Image  width={500} preview={false} src={Graph}/>
            
            </div>
           

            <div className="main">
               
              
                <Image preview={false} src={Carbon} />
                <div className="main_text">
                  <h3 className="heading" style={{fontWeight:'400'}}>Track your Analytics</h3>
                  <h5 className="subheading">
                  Easy to implement with single line of code</h5>
                  </div>
            </div>

            <div className="how">
                <div className="how_cont">
                <div>
                    <h3 className="heading">Usage</h3>
                    <h5 className="subheading">
                        create your unique id and start tracking as simple as that</h5>

                    <Button className="button docs_button">Read Docs</Button>

                </div>
                <Image width={700} preview={false} src={Use}  />
                
                </div>
               
            </div>

            <div className="footer">
                Created by <a href="https://github.com/Kaku-g">Kaku-g</a>
            </div>
        </div>
     
       
    );
  };
  

  


 
   


  
        

