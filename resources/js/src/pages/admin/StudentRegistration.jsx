import AdminLayout from "@/src/layouts/AdminLayout"
import {Divider} from '@mui/material';
import VAccordionGroup from "@/src/components/AccordionGroup";
import Accordion from '@mui/joy/Accordion';
import {AccordionDetails,AccordionSummary} from '@mui/joy';
import Grid from '@mui/joy/Grid';
import {FormLabel,FormControl,FormHelperText,Input,Select,Option,Autocomplete,
    Table,
} from '@mui/joy';
import Button from '@mui/joy/Button';
import { useState } from "react";
import { styled } from '@mui/joy';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SvgIcon from '@mui/joy/SvgIcon';
import { states,districts } from "@/src/storage/states";
import { classes } from "@/src/storage/classes";
import {years} from "@/src/storage/yearrange";

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function StudentRegistration(){

    const [expanded, setExpanded] = useState(false);
    const [sDistricts,setSDistricts]=useState([]);
    

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleState=(value)=>{
        setSDistricts(districts[value]);
    }
    const handleDistrict=(value)=>{

    }
    return(<>
        <AdminLayout>
            <h1 className="text-lg font-bold mb-3">Student Registration</h1>
            <Divider></Divider>

            {/* Basic Detail */}
            <VAccordionGroup>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary>Basic Detail</AccordionSummary>
                    <AccordionDetails>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: '100%' }}>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>First Name <span className='important'>*</span></FormLabel>
                                    <Input placeholder="Enter First Name" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>Middle Name</FormLabel>
                                    <Input placeholder="Enter Middle Name" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>Last Name</FormLabel>
                                    <Input placeholder="Enter Last Name" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>Gender<span className='important'>*</span></FormLabel>
                                    <Select placeholder="Select Gender">
                                        <Option value="male">Male</Option>
                                        <Option value="female">Femal</Option>
                                        <Option value="other">Other</Option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>DOB <span className='important'>*</span></FormLabel>
                                    <Input type="date" placeholder="Enter Date Of Birth" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>Aadhaar No <span className='important'>*</span></FormLabel>
                                    <Input placeholder="Enter Aadhaar No" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input placeholder="Enter Email" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>Phone</FormLabel>
                                    <Input placeholder="Enter Phone" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>Admission Class <span className='important'>*</span></FormLabel>
                                    <Select placeholder="Select Class">
                                        {
                                            classes.map((cls,index)=>(
                                                <Option value={cls} key={index}>{cls}</Option>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                            <Button sx={{mt: 2,mr:3,width:100}}>Save</Button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </VAccordionGroup>

            {/* Parents Detail */}
            <VAccordionGroup>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary>Parents Detail</AccordionSummary>
                    <AccordionDetails>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: '100%' }}>
                            <Grid xs={6} md={6}>
                                <FormControl>
                                    <FormLabel>Father Name <span className='important'>*</span></FormLabel>
                                    <Input placeholder="Enter Father Name" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={6}>
                                <FormControl>
                                    <FormLabel>Mother Name <span className='important'>*</span></FormLabel>
                                    <Input placeholder="Enter Mother Name" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={6}>
                                <FormControl>
                                    <FormLabel>Father Phone</FormLabel>
                                    <Input placeholder="Enter Father Phone No" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={6}>
                                <FormControl>
                                    <FormLabel>Mother Phone</FormLabel>
                                    <Input placeholder="Enter Mother Phone No" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={6}>
                                <FormControl>
                                    <FormLabel>Father Occupation</FormLabel>
                                    <Input placeholder="Enter Father Occupation" />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                            <Button sx={{mt: 2,mr:3,width:100}}>Save</Button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </VAccordionGroup>

            {/* Address Detail */}
            <VAccordionGroup>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary>Address Detail</AccordionSummary>
                    <AccordionDetails>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: '100%' }}>
                            <Grid xs={6} md={6}>
                                <FormControl>
                                    <FormLabel>State <span className='important'>*</span></FormLabel>
                                    <Autocomplete onChange={(e,value)=>handleState(value)} options={states} placeholder="Select State"/>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={6}>
                                <FormControl>
                                    <FormLabel>District <span className='important'>*</span></FormLabel>
                                    <Autocomplete onChange={(e,value)=>handleDistrict(value)} options={sDistricts} placeholder="Select District"/>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={6}>
                                <FormControl>
                                    <FormLabel>City <span className='important'>*</span></FormLabel>
                                    <Input placeholder="Enter City" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={6}>
                                <FormControl>
                                    <FormLabel>Mohalla/Sector/Village <span className='important'>*</span></FormLabel>
                                    <Input placeholder="Enter Mohalla/Sector/Village" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={6}>
                                <FormControl>
                                    <FormLabel>Area Locality</FormLabel>
                                    <Input placeholder="Enter Area Locality" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={6}>
                                <FormControl>
                                    <FormLabel>Pincode <span className='important'>*</span></FormLabel>
                                    <Input type="number" placeholder="Enter Pincode" />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                            <Button sx={{mt: 2,mr:3,width:100}}>Save</Button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </VAccordionGroup>

            {/* Previous Qualifications */}
            <VAccordionGroup>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary>Previous Qualification</AccordionSummary>
                    <AccordionDetails>
                        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: '100%' }}>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>Select Class <span className='important'>*</span></FormLabel>
                                    <Select placeholder="Select Education">
                                        {
                                            classes.map((cls,index)=>(
                                                <Option value={cls} key={index}>{cls}</Option>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>School Name <span className='important'>*</span></FormLabel>
                                    <Input placeholder="Enter School Name" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>Status <span className='important'>*</span></FormLabel>
                                    <Select placeholder="Select Status">
                                        <Option value="going on">Going On</Option>
                                        <Option value="passed">Passed</Option>
                                        <Option value="failed">Failed</Option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>Passed/Failed Year <span className='important'>*</span></FormLabel>
                                    <Select placeholder="Select Year">
                                        {
                                            years.map((year,index)=>(
                                                <Option value={year} key={index}>{year}</Option>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>State <span className='important'>*</span></FormLabel>
                                    <Autocomplete onChange={(e,value)=>handleState(value,'qstate')} options={states} placeholder="Select State"/>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>District <span className='important'>*</span></FormLabel>
                                    <Autocomplete onChange={(e,value)=>handleDistrict(value,'qdistrict')} options={sDistricts} placeholder="Select District"/>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>City</FormLabel>
                                    <Input placeholder="Enter City" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>Pincode <span className='important'>*</span></FormLabel>
                                    <Input type="number" placeholder="Enter Pincode" />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                            <Button sx={{mt: 2,mr:3,width:100}}>Save</Button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </VAccordionGroup>

            {/* Documents Detail */}
            <VAccordionGroup>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary>Documents</AccordionSummary>
                    <AccordionDetails>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ width: '100%',mb:1}}>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>Select Document Type <span className='important'>*</span></FormLabel>
                                    <Select placeholder="Select Document Type">
                                        <Option value="photo">Photo</Option>
                                        <Option value="aadhaar">Aadhaar</Option>
                                        <Option value="aadhaar">Transfer Certificate</Option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <FormControl>
                                    <FormLabel>Upload File <span className='important'>*</span></FormLabel>
                                    <input type="file" />
                                </FormControl>
                            </Grid>
                            <Grid xs={6} md={4}>
                                <Button sx={{float:'right',mt: 2,mr:3,width:100}}>
                                    <CloudUploadIcon sx={{mr:1}}/>
                                    <span className="mt-[2px]">Upload</span>
                                </Button>
                            </Grid>
                        </Grid>
                        <Table borderAxis="both" sx={{mt:3}}>
                            <tbody>
                                <tr>
                                    <td className="border font-bold">1. Photo</td>
                                    <td className="border">
                                        <Button
                                            component="label"
                                            role={undefined}
                                            tabIndex={-1}
                                            variant="outlined"
                                            color="neutral"
                                            startDecorator={
                                                <SvgIcon>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                                    />
                                                </svg>
                                                </SvgIcon>
                                            }
                                            >
                                            Upload a file
                                            <VisuallyHiddenInput type="file" />
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border font-bold">2. Aadhaar</td>
                                    <td className="border">
                                        <Button
                                            component="label"
                                            role={undefined}
                                            tabIndex={-1}
                                            variant="outlined"
                                            color="neutral"
                                            startDecorator={
                                                <SvgIcon>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                                    />
                                                </svg>
                                                </SvgIcon>
                                            }
                                            >
                                            Upload a file
                                            <VisuallyHiddenInput type="file" />
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </AccordionDetails>
                </Accordion>
            </VAccordionGroup>
        </AdminLayout>
    </>) 
}