import { Button, TextField ,Link} from "@mui/material";
import React from "react";
import styles from "../styles/Forgotpassword.module.css";

const Passwordreset = () => {
  return (
    <div className={styles.for}>
      <div className={styles.head}>
        <div className={styles.heading}>
        Password reset
        </div>
        <div className={styles.footer}>Your password has been successfully reset.Click below to log in magically</div>
      
        <div>
        <Button style={{width: "450px",height: "50px"}}variant="contained">
        Continue</Button>
        </div >
       
      </div>
    </div>
  );
};

export default Passwordreset;