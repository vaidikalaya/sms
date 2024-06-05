import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {TableContainer,Table} from "@mui/material";
import { Input, Option, Select, Sheet } from "@mui/joy";
import { Search } from "@mui/icons-material";
import Loader from "./../Loader";
import axios from "../../services/axios";
import axiosp from "@/src/services/axiosp";
import Pagination from "./Pagination";

export default function DataTable({data}){
    
    const API=data.api;
    const columns=data.columns;
    const actions=data.actions?data.actions:[];
    let tempFilter={};
    columns.map((column)=>{
        tempFilter[column.column]='';
    })

    const navigate = useNavigate();
    const [tableData, setTableData] = useState([]);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [totalRows, setTotalRows] = useState(0);
    const [filters, setFilters] = useState(tempFilter)

    const [loading, setLoading] = useState(true);

    const fetchData= async ()=>{
        setLoading(true);
        const query = new URLSearchParams({
            page:page,
            ...filters
        }).toString();

        try{
            setLoading(true);
            axios.get("/sanctum/csrf-cookie?").then((res) => {});
            const res=await axiosp.get(API+`?${query}`)
            if(res.data.status=='success' && res.data.message!="Data not found"){
                setTableData(res.data.data.data);
                setRowsPerPage(res.data.data.per_page);
                setTotalRows(res.data.data.total);
                setLoading(false);
            }
            if(res.data.message=="Data not found"){
                setTableData([]);
            }
        }
        catch(error) {
            console.error("Error fetching data: ", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    },[filters,page]);

    const onFilterInputChange = (value,column) => {
        setFilters({ ...filters, [column]: value });
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

    const setPagination = (number) => {
        setPage(number);
    };

    return(<>
        <Loader show={loading} />
        <TableContainer>
            <Table className="border shadow-sm" border={true}>
                <thead className={"bg-[#CF212F] text-white border shadow-sm w-full"}>
                    <tr>
                        {
                            columns.map((column,index) =>(
                                <th key={index} className={"uppercase p-2.5 font-bold text-center text-sm whitespace-nowrap"}>
                                    {column.title}
                                </th>
                            ))
                        }
                        {
                            actions.map((action,aindex) =>(
                                <th key={aindex}></th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {columns.map((column,cindex) => (
                            <td className={"p-2"} key={cindex}>
                                {
                                    filterTemplate(column.filter,column.column)
                                }
                            </td>
                        ))}
                    </tr>
                    {
                        tableData.length>0 &&
                        tableData.map((tdata,tdindex)=>(
                            <tr key={tdindex} className={"border border-b-1"}>
                                {
                                    columns.map((column,cindex)=>(
                                        <td key={cindex} className={"whitespace-nowrap p-3 text-center"}>
                                            {tdata[column.column]}
                                        </td> 
                                    ))
                                }
                                <td className={"whitespace-nowrap"}>
                                {
                                    actions.map((action,aindex) =>(
                                        <button key={aindex} 
                                            onClick={() =>navigate(action.navigateUrl+'/'+tdata[action.navigateValue])}
                                            className={"bg-zinc-600 py-1 rounded-full px-2 text-sm text-white"}
                                        >
                                            {action.title}
                                        </button>
                                        
                                    ))
                                }
                                </td>
                            </tr>       
                        ))
                    }
                </tbody>
            </Table>
        </TableContainer>

        <div className="flex justify-end my-4">
            <Pagination
                itemsPerPage={rowsPerPage}
                currentPage={page}
                totalItems={totalRows}
                paginate={setPagination}
            />
        </div>
    </>)
}