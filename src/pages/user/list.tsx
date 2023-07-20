import { IResourceComponentsProps, getDefaultFilter,useList,useGetIdentity,useMany,useOne } from "@refinedev/core";

import {
    List,
    useTable,
    EditButton,
    ShowButton,
    getDefaultSortOrder,
    FilterDropdown,
    useSelect,
    Show
} from "@refinedev/antd";

type userData={
    id:string
}
import { Table, Space, Select ,Button, Input,Statistic} from "antd";

import { IPost, ICategory,Analytics,Project } from "../../interfaces";
import { useEffect, useState } from "react";
import { AnyARecord } from "dns";

import {BarChartOutlined} from '@ant-design/icons'

export const PostList: React.FC<IResourceComponentsProps> = () => {
    const [value,setValue]=useState('');
    const [count,setCount]=useState(0);
    // const [options,setOptions]=useState(['']);


    

    const { data} = useGetIdentity<{
        id:string;
    }>();
   // console.log(data);

    

  

    type projectList={
        project:string
    }
    const {tableProps}= useTable<Analytics>();

    const {tableProps:filterProps}= useTable<Analytics>({
        resource:"analytics",
        initialSorter: [
                    {
                        field: "created_at",
                        order: "desc",
                    },]
                    ,
        permanentFilter:[
            {
            
            field:"userId",
            operator:"eq",
            value:data?.id
            },{
                field:"project",
                operator:"eq",
                value:value
            }

        ],
    })

    useEffect(()=>{
        if(filterProps.pagination && filterProps.pagination.total)
         setCount(filterProps.pagination?.total)
    },[value])
   // console.log(filterProps.pagination?.total)

    
    const { selectProps } = useSelect<Analytics>({
        resource: "analytics",
    });
   
const handleChange=(e:any)=>{
    setValue(e.target.value);
    if(filterProps.pagination && filterProps.pagination.total)
    {
        setCount(filterProps.pagination?.total);
    }
    
}
    return (
        <div>
           
         
        <Show title='Stats' headerButtons={({ defaultButtons }) => (
                <>
                    {/* {defaultButtons} */}
                    {/* <Button type="primary">Get Started</Button> */}
                </>
            )}> 
            <div style={{display:'flex',justifyContent:"space-evenly"}}>
            <BarChartOutlined  style={{fontSize:'40px',color:'#722ed1'}} />
             <Statistic  title="Page Views" value={count} />
            </div>
            
        </Show>
        <List 
        headerButtonProps={{
            // style: {
            //     backgroundColor: "g",
            //     padding: "16px",
            // },
        }}
        headerButtons={  <Input type="text" placeholder="Search your project" onChange={handleChange}/>}
        >
        
            <Table {...filterProps} rowKey="created_at">
            <Table.Column
                    key="project"
                    dataIndex="project"
                    title="Project"
                 
                    // defaultSortOrder={getDefaultSortOrder("country", sorters)}
                />
                <Table.Column
                    key="userId"
                    dataIndex="userId"
                    title="ID"
                    
                    // defaultSortOrder={getDefaultSortOrder("userId", sorters)}
                />
                <Table.Column
                    key="country"
                    dataIndex="country"
                    title="country"
                    sorter
                    // defaultSortOrder={getDefaultSortOrder("country", sorters)}
                />
                  {/* <Table.Column
                    key="created_at"
                    dataIndex="created_at"
                    title="Time"
                    sorter
                    // defaultSortOrder={getDefaultSortOrder("country", sorters)}
                /> */}
                  <Table.Column
                    key="os"
                    dataIndex="os"
                    title="OS"
                   
                    // defaultSortOrder={getDefaultSortOrder("country", sorters)}
                />
                  <Table.Column
                    key="browser"
                    dataIndex="browser"
                    title="Browser"
                   
                    // defaultSortOrder={getDefaultSortOrder("country", sorters)}
                />
                  <Table.Column
                    key="time"
                    dataIndex="time"
                    title="Time"
                   
                    // defaultSortOrder={getDefaultSortOrder("country", sorters)}
                />
                  <Table.Column
                    key="date"
                    dataIndex="date"
                    title="Date"
                    
                    // defaultSortOrder={getDefaultSortOrder("country", sorters)}
                />
                  <Table.Column
                    key="link"
                    dataIndex="link"
                    title="URL"
                  
                    // defaultSortOrder={getDefaultSortOrder("country", sorters)}
                />
               
            
            </Table>
        </List>
        </div>
    );
};
