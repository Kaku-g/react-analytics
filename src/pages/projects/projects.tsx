import { IResourceComponentsProps, getDefaultFilter,useList,useMany,useIsAuthenticated ,useGetIdentity} from "@refinedev/core";
import {Show} from '@refinedev/antd';
import { Table, Space, Select,Form,Input,Typography,Divider, Button} from "antd";
import {
    List,
    useTable,
    EditButton,
    ShowButton,
    Create,
    getDefaultSortOrder,
    FilterDropdown,
    useSelect,
    useForm
} from "@refinedev/antd";
import {
    GitHubBanner,
    Refine,
    AuthBindings,
    Authenticated,
} from "@refinedev/core";

const {Title,Paragraph,Text,Link}=Typography;
import { IPost, ICategory,Analytics, Project } from "../../interfaces";
import { dataProvider } from "@refinedev/supabase";
import { supabaseClient } from "../../utility";
import { authProvider } from "../../utility/authProvider";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { CatchAllNavigate } from "@refinedev/react-router-v6";
import { useState } from "react";

export const Projects: React.FC<IResourceComponentsProps> =()=>{
    // const[user,setUser]=useState()
    const { formProps, saveButtonProps } = useForm<Project>();

    const { data} = useGetIdentity<{
        id:string;
        email:string
    }>();
  //  console.log(data)




     return(
        
       
        <Refine dataProvider={dataProvider(supabaseClient)}
        authProvider={authProvider}>
             
                     <Show  headerButtons={({ defaultButtons }) => (
                <>
                    
                </>
            )}  title="Profile">
                        <Typography>
                        <Text strong style={{color:'#722ed1'}}>Email:</Text>  <p>{data?.email}</p>
                        <Divider/>
                      <Text strong style={{color:'#722ed1'}}>Unique Id:</Text> <p>{data?.id}</p>
                      <Button onClick={() => {navigator.clipboard.writeText(`${data?.id}`)}}
                      style={{background:'#722ed1',color:'white'}}>Copy</Button>
           
                        </Typography>
                    
                    
                   
               
               
                     </Show>
               
             
        </Refine>
    
     
     )
}