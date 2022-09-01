
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from "../styles/Modal.module.css"
import { Button, Divider, Paper, styled, Typography } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Modal = ({ open, onClose }:any) => {
    
  const[openModal,setopenModal]=useState(true)


  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className={styles.head}>
          <Box
            sx={{
              bgcolor: "white",
              color: "text.secondary",
              border: 1,
              borderRadius: 2,
              px: 2,
              fontWeight: "fontWeightBold",
              zIndex: "tooltip",
              boxShadow: 8,
              height: 500,
              width: 500,
              position: "absolute",
              marginLeft: "-300px",
            }}
            className={styles.box}
          >
            <Typography className={styles.invite}>
              Invite user{" "}
              <Button className={styles.btn3} onClick={onClose}>
                <CloseOutlinedIcon />
              </Button>
            </Typography>
            <Divider />
            <Typography className={styles.name}> Name </Typography>

            <select className={styles.named}>
              <option value="Harvard">Harvard</option>
            </select>

            <Typography className={styles.email}>Email</Typography>
            <select className={styles.named}>
              <option value="Harvard">Harvard</option>
            </select>

            <Box className={styles.box1}>
              <Typography className={styles.phno}>PHONE <span>{" "}</span></Typography>
              <Typography className={styles.phno}>NUMBER </Typography>
              <select className={styles.named1}>
                <option value="Harvard">+1</option>
              </select>

              <Typography className={styles.Role}>Role </Typography>
              <select className={styles.named2}>
                <option value="Harvard">Select Role</option>
              </select>
            </Box>
            <Button className={styles.btn} variant="outlined">
              <span>+</span>Add User
            </Button>
            <Button variant="outlined" className={styles.btn1}>
              cancel
            </Button>
            <Button variant="outlined" className={styles.btn2} disabled>
              Invite user
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Modal;
