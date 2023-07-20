
import React, { useEffect, useState } from "react";

import { IResourceComponentsProps, getDefaultFilter,useList,useGetIdentity,useMany,useOne } from "@refinedev/core";
import { Show } from "@refinedev/antd";
import { Button,Typography,Image,Steps,ConfigProvider } from "antd";
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

    const { data} = useGetIdentity<{
        id:string,
        email:string
    }>();
   
    return(
        

        <div className="home">

            
            <div className="navbar" >
                <div>React-Analytics</div>
                
                    
                {!data && 
                <a href="./login">
                    <Button className="button"  style={{color:'purple'}}>Get started</Button>
                </a>
}
               
                {data && 
                 <a href="./profile"> <Button className="button"  style={{color:'purple'}}>View Dashboard</Button> 
                </a>}

            </div>

            <div>
                
            </div>

            <div className="hero">
            
               
                <div className="hero_content">
                    <h3 className='heading'>Take Control of your website</h3>
                    <h5 className="subheading">library that tracks your react-website logs</h5>
                </div>
                <Image  width={400} preview={false} src={Graph}/>
            
            </div>

<div className="steps">
            <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#7958a8',
      },
    }}
  >
  <Steps
    current={3}

style={{color:'red'}}
   items={[
      {
        title: 'Install library',
        description:'npm',
        
        
      },
      {
        title: 'Sign up',
        description:'dashboard',
        subTitle: 'unique id',
        status:'finish'
      },
      {
        title: 'Start tracking',
        description:'react-app',
        status:'finish'
      },
    ]}
  />
      </ConfigProvider>
      </div>
           

            <div className="main">
               
              
                <Image width={600} preview={false} src={Carbon} />
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

<a href="https://github.com/Kaku-g/react-analytics">
<Button className="button docs_button">Read Docs</Button>
</a>
                    

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
  

  


 
   


  
        

