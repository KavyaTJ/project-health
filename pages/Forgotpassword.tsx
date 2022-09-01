import { Button, TextField ,Link} from "@mui/material";
import React from "react";
import styles from "../styles/Forgotpassword.module.css";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
const Forgotpassword = () => {
  return (
    <div className={styles.for}>
      <Button
        variant="text"
        style={{
          textTransform: "none",
          height: "17px",
          width: "34px",
          left: "88px",
          top: "48px",
        }}
      >
        {" "}
        <ArrowBackIosNewOutlinedIcon
          style={{ fontSize: "small", marginRight: "2px" }}
        />
            <Link href="/login" underline="none">
         back
          </Link>
      </Button>
      <div className={styles.head}>
        <div className={styles.heading}>Forgot your Password</div>
        <div className={styles.footer}>
          Enter your email address, and we’ll send you an email with all the
          instructions.
        </div>
        <div className={styles.text}>
          <TextField
            style={{ width: "350px" }}
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
          />
        </div>
        <div>
          <Button
            style={{
              width: "350px",
              height: "40px",
              marginBottom: "30px",
              marginTop: "50px",
            }}
            variant="contained"
          >
            <Link
            href="/Checkmail"
            underline="none"   style={{ color:"white" }} >
Send me instructions</Link>
          </Button>
        </div>
        <div>
          <Link
            href="/login"
            underline="none"
            style={{ alignItems: "center", marginLeft: "150px" }}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;