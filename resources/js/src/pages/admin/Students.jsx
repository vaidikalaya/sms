import AdminLayout from "@/src/layouts/AdminLayout"
import {Divider } from '@mui/material';
import BasicDataTable from "@/src/components/DataTables/BasicDataTable";


export default function Students(){
    
    return(<>
        <AdminLayout>
            <h1 className="text-lg font-bold mb-3">Students</h1>
            <Divider></Divider>
            <BasicDataTable dataSet={{
                api:"/students",
                columns:[
                    {
                        column:'reg_number',
                        title:'Registration Number',
                        filter:'search'
                    },
                    {
                        column:'first_name',
                        title:'First Name',
                        filter:'search'
                    },
                    {
                        column:'middle_name',
                        title:'Middle Name',
                        filter:'search'
                    },
                    {
                        column:'last_name',
                        title:'Last Name',
                        filter:'search'
                    },
                    {
                        column:'dob',
                        title:'dob',
                        filter:'search'
                    },
                    {
                        column:'admission_date',
                        title:'Admission Date',
                        filter:'search'
                    },
                    {
                        column:'father',
                        title:'Father',
                        filter:'search'
                    },
                    {
                        column:'mother',
                        title:'Mother',
                        filter:'search'
                    }
                ],
            }} />
        </AdminLayout>
    </>)
}