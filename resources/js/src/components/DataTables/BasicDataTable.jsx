import React, { useState, useEffect, useRef } from "react";
import axios from "../../services/axios";
import axiosp from "@/src/services/axiosp";
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,TableSortLabel} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { Input, Option, Select, } from "@mui/joy";
import { Search } from "@mui/icons-material";


export default function BasicDataTable({dataSet}){
    
    const API=dataSet.api;
    const columns=dataSet.columns;
    const actions=dataSet.actions?dataSet.actions:[];
    let tempFilter={};
    columns.map((column)=>{
        tempFilter[column.column]='';
    })

    const [tableData, setTableData] = useState([])
    const [page, setPage] = useState(1)
    const [orderBy, setOrderBy] = useState()
    const [order, setOrder] = useState("asc")
    const [filters, setFilters] = useState(tempFilter)
    const [selected, setSelected] = useState([]);

    const fetchData= async ()=>{

        const query = new URLSearchParams({
            page:page,
            ...filters
        }).toString();

        try{

            axios.get("/sanctum/csrf-cookie?").then((res) => {});
            const res=await axiosp.get(API+`?${query}`)
            if(res.data.status=='success' && res.data.message!="Data not found"){
                setTableData(res.data.data.data);
            }
            if(res.data.message=="Data not found"){
                setTableData([]);
            }
        }
        catch(error) {
            console.error("Error fetching data: ", error);
        } finally {
            
        }
    }

    useEffect(() => {
        fetchData();
    },[]);

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
          const newSelected = tableData.map((data) => data.id);
          setSelected(newSelected);
          return;
        }
        setSelected([]);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    const handleClick = (event,id) =>{
        let newSelected=[];
        if(selected.includes(id)) {
            newSelected=selected.filter(selectedId => selectedId !== id);
        } 
        else {
            newSelected=newSelected.concat(selected,id);
        }
        setSelected(newSelected);
    }

    const sortHandler = (column) => {
        setOrderBy(column);
        setOrder(order=="asc"?"desc":"asc");
    };

    const filterTemplate = (filter,column) => {
        switch(filter){
            case "search":
                return (
                    <Input
                        type="text"
                        value={filters[column]}
                        startDecorator={<Search />}
                        placeholder={"Search"}
                        onChange={(e) => onFilterInputChange(e.target.value,column)}
                        className="p-column-filter"
                    />
                );

            case "select":
                const values = fieldElement.options;
                return (
                    <Select
                        placeholder={field.toUpperCase()}
                        onChange={(e, newValue) =>
                            onFilterSelectChange(newValue, field)
                        }
                    >
                        {values.map((item) => (
                            <Option value={item}>{item}</Option>
                        ))}
                    </Select>
                );

            default:
                return <></>

        }
    }

    return(<>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                inputProps={{'aria-label': 'select all desserts',}}
                                onChange={handleSelectAllClick}
                            />
                        </TableCell>
                        {
                            columns.map((column,cindex)=>(
                                <TableCell key={cindex} sortDirection={column.column==orderBy ? order : false}>
                                    {column.title}
                                    <TableSortLabel active sx={{marginTop:"-3px"}}
                                        onClick={()=>{sortHandler(column.column)}}  
                                        direction={column.column==orderBy?order:"asc"}>
                                    </TableSortLabel>
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {columns.map((column,cindex) => (
                            <TableCell className={"p-2"} key={cindex}>
                                {
                                    filterTemplate(column.filter,column.column)
                                }
                            </TableCell>
                        ))}
                    </TableRow>
                    {
                        tableData.length>0 &&
                        tableData.map((tdata,tdindex)=>{
                            const isItemSelected=isSelected(tdata.id)
                            return(
                                <TableRow key={tdindex} onClick={(event) => handleClick(event, tdata.id)} aria-checked={isItemSelected} selected={isItemSelected} sx={{ cursor: 'pointer' }}>
                                    <TableCell padding="checkbox"> 
                                        <Checkbox color="primary" checked={isItemSelected}/>
                                    </TableCell>
                                    {
                                        columns.map((column,cindex)=>(
                                            <TableCell key={cindex}>
                                                {tdata[column.column]}
                                            </TableCell> 
                                        ))
                                    }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </>)
}