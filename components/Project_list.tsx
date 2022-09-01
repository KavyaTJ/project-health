import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Chip, Divider, IconButton, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Project ID",
      width: 160,
   
     
      
    },
    {
      field: "name",
      headerName: "Name",
      width: 170,
    },
    {
      field: "client",
      headerName: "Client",
      width: 170,
    },
    {
      field: "ProjectType",
      headerName: "Project Type",
      width: 170,
    },
    {
      field: "ProjectResponsibility",
      headerName: "Project Responsibility",
      width: 170
    },
    {
        field: "StartDate",
        headerName: "Start Date",
        width: 170
      },
      {
        field: "Enddate",
        headerName: "End Date",
        width: 170
      },
      {
        field: " Project Status",
        headerName: " Project Status",
        width: 170
      },
      {
        field: "Monthly Status",
        headerName: "Monthly Status",
        width: 170
      },
     
      {
        field: "options",
        headerName: "Options",
        width: 170,
        renderCell: () => {
          return(
            <div><MoreVertIcon/></div>)}
        
      },
  ];


const rows = [
  { id: "012345", name: 'Jackson',client:"Michael David", ProjectType: 'lorem ipsum', ProjectResponsibility: "jhfjsfj",StartDate:"01 Aug 2022",EndDate:"24 Sep 2022" },
  { id: "012345", name: 'Jackson',client:"Michael David", ProjectType: 'lorem ipsum', ProjectResponsibility: "jhfjsfj",StartDate:"01 Aug 2022",EndDate:"24 Sep 2022" },
  { id: "012345", name: 'Jackson',client:"Michael David", ProjectType: 'lorem ipsum', ProjectResponsibility: "jhfjsfj",StartDate:"01 Aug 2022",EndDate:"24 Sep 2022" },
  { id: "012345", name: 'Jackson',client:"Michael David", ProjectType: 'lorem ipsum', ProjectResponsibility: "jhfjsfj",StartDate:"01 Aug 2022",EndDate:"24 Sep 2022" },
  { id: "012345", name: 'Jackson',client:"Michael David", ProjectType: 'lorem ipsum', ProjectResponsibility: "jhfjsfj",StartDate:"01 Aug 2022",EndDate:"24 Sep 2022" },
  { id: "012345", name: 'Jackson',client:"Michael David", ProjectType: 'lorem ipsum', ProjectResponsibility: "jhfjsfj",StartDate:"01 Aug 2022",EndDate:"24 Sep 2022" },
  { id: "012345", name: 'Jackson',client:"Michael David", ProjectType: 'lorem ipsum', ProjectResponsibility: "jhfjsfj",StartDate:"01 Aug 2022",EndDate:"24 Sep 2022" },
  { id: "012345", name: 'Jackson',client:"Michael David", ProjectType: 'lorem ipsum', ProjectResponsibility: "jhfjsfj",StartDate:"01 Aug 2022",EndDate:"24 Sep 2022" },
  { id: "012345", name: 'Jackson',client:"Michael David", ProjectType: 'lorem ipsum', ProjectResponsibility: "jhfjsfj",StartDate:"01 Aug 2022",EndDate:"24 Sep 2022" },
  { id: "012345", name: 'Jackson',client:"Michael David", ProjectType: 'lorem ipsum', ProjectResponsibility: "jhfjsfj",StartDate:"01 Aug 2022",EndDate:"24 Sep 2022" },
  { id: "012345", name: 'Jackson',client:"Michael David", ProjectType: 'lorem ipsum', ProjectResponsibility: "jhfjsfj",StartDate:"01 Aug 2022",EndDate:"24 Sep 2022" },
  { id: "012345", name: 'Jackson',client:"Michael David", ProjectType: 'lorem ipsum', ProjectResponsibility: "jhfjsfj",StartDate:"01 Aug 2022",EndDate:"24 Sep 2022" },
  { id: "012345", name: 'Jackson',client:"Michael David", ProjectType: 'lorem ipsum', ProjectResponsibility: "jhfjsfj",StartDate:"01 Aug 2022",EndDate:"24 Sep 2022" },
  
  
];

export default function ProjectList() {
  return (
    <><Divider /><Box style={{ height: "500px", width: "1250px", marginLeft: "70px", marginTop: "20px" }}>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick

        experimentalFeatures={{ newEditingApi: true }} />
    </Box></>
  );
}
