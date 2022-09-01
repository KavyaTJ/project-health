import { Link,Button} from "@mui/material";
import React from 'react';
import styles from "../styles/Checkmail.module.css";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const Checkmail= () => {
    return (
        
        <div className={styles.for}>
         <Button variant="text" style={{textTransform: 'none',height: "17px",width: "34px",left: "88px",top: "58px"
}}>  < ArrowBackIosNewOutlinedIcon style={{fontSize:"small",marginRight:"2px"}} /><Link href="/Forgotpassword" underline="none">back</Link></Button>
        <div className={styles.head}>
        <div className={styles.heading}>
        Check your email
        </div> 
        <div className={styles.sub}>We sent a password reset link to  </div>
        <div className={styles.sub1}><strong>bingwen@hotmail.com </strong> </div>
        <div className={styles.mail}>Didn’t receive the email?<Link href="" underline="none"> Click to resend</Link></div>
        </div>
        </div>
    );
}

export default Checkmail;