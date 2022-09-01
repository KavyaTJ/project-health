import React from 'react';
import styles from "../styles/Settingpassword.module.css";
import{ Button,IconButton,InputAdornment,TextField,Link} from "@mui/material";
import { VisibilityOff } from "@mui/icons-material";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useRouter } from 'next/router'

const Settingpassword =()=>  {
    const router = useRouter()
    return (
        <div className={styles.for}>
             <Button variant="text" style={{textTransform: 'none',height: "17px",width: "34px",left: "88px",top: "58px"
}}>  < ArrowBackIosNewOutlinedIcon style={{fontSize:"small",marginRight:"2px"}} />back</Button>
        <div className={styles.head}>
          <div className={styles.heading}>
          Set new password
          </div>
          <div className={styles.footer}>Your new password must be different from previous used passwords.</div>
          <div >
              <TextField id="standard-basic" label="Password" variant="standard" style={{marginTop:"60px",fontSize:"12px",width:"450px"}} />
          

          <InputAdornment position="end">
          <IconButton style={{marginLeft:"400px",marginTop:"-40px"}}
              aria-label="toggle password visibility">
          <VisibilityOff /> 
          </IconButton>
          </InputAdornment>
              </div>
              <div style={{marginTop:"8px",marginBottom:"52px"}}>Maximum 8 character with atleast 1 number</div>
              <div >
              <TextField id="standard-basic" label="Password" variant="standard" style={{fontSize:"12px",width:"450px"}} />
          

          <InputAdornment position="end">
          <IconButton style={{marginLeft:"400px",marginTop:"-40px"}}
              aria-label="toggle password visibility">
          <VisibilityOff /> 
          </IconButton>
          </InputAdornment>
              </div>
              <div style={{marginTop:"8px"}}>Both password must match.</div>

          <div>

          <div>
            
          <Button style={{width: "450px",height: "50px",marginBottom:"30px",marginTop:"59px"}}variant="contained" onClick={() => router.push('/pages/login')}>
          Reset password</Button>
          </div >
          <div ><Link href="#" underline="none" style={{alignItems:"center",marginLeft:"200px"}}>Cancel</Link></div>
        </div>
      </div>
      </div>
    );
}

export default Settingpassword;