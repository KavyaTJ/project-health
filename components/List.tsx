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
      headerName: "User ID",
      width: 160,
   
     
      
    },
    {
      field: "name",
      headerName: "Name",
      width: 170,
    },
    {
      field: "email",
      headerName: "Email",
      width: 170,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 170,
    },
    {
      field: "role",
      headerName: "Role",
      width: 170,
      renderCell: (params) => {
        return (
          <Chip
            label={params.row.role}
            variant="outlined"
            size="small"
          />)}
    },
    {
      field: "status",
      headerName: "Status",
      width: 170,
      renderCell: (params) => {
       
      return(
          <Typography style={{fontSize:"12px"}} >
           <CheckCircleIcon style={{color:"green",alignItems:"center"}}/> {params.row.status}
          </Typography>)}
        
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
  { id: 1, name: 'Snow', email: 'snow@gmail.com', phone: 788888888888,role:"Admin",status:"Active" },
  { id: 2, name: 'Snow', email: 'snow@gmail.com', phone: 788888888888,role:"Admin",status:"Active" },
  { id: 3, name: 'Snow', email: 'snow@gmail.com', phone: 788888888888,role:"Admin",status:"Active" },
  { id: 4, name: 'Snow', email: 'snow@gmail.com', phone: 788888888888,role:"Admin",status:"Active" },
  { id: 5, name: 'Snow', email: 'snow@gmail.com', phone: 788888888888,role:"Admin",status:"Active" },
  { id: 6, name: 'Snow', email: 'snow@gmail.com', phone: 788888888888,role:"Admin",status:"Active" },
  { id: 7, name: 'Snow', email: 'snow@gmail.com', phone: 788888888888,role:"Admin",status:"Active" },
  { id: 8, name: 'Snow', email: 'snow@gmail.com', phone: 788888888888,role:"Admin",status:"Active" },
  { id: 9, name: 'Snow', email: 'snow@gmail.com', phone: 788888888888,role:"Admin",status:"Active" },
  { id: 10, name: 'Snow', email: 'snow@gmail.com', phone: 788888888888,role:"Admin",status:"Active" },
  
  
];

export default function list1() {
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
