import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import styles from "../styles/login.module.css"
import{ Button,IconButton,Input,InputAdornment,InputLabel,Link,Typography} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {emailValidator,passwordValidator} from "./Validation";
import { useRouter } from 'next/router'

interface data{
  email:string
  password:string
}

const Login = () => {
  const router = useRouter()
  

  const [email, setEmail] = useState('');
  const [password,setPassword]=useState('');
  const [errorMessage, seterrorMessage] = useState('');
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
 

    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event:any) => {
    event.preventDefault();
  };

  const handleSubmit = (e: any) =>{
  if (!emailValidator(email)) return seterrorMessage('Please enter valid email id');

		if (!passwordValidator(password))
			return seterrorMessage(
				'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
			);
		
		if(email !== 'kavya@gmail.com' || password !== 'Password@1') return seterrorMessage('Invalid email or password');
        // router.push("/Topbar")
     <Link href="/Topbar"/>
  
      }
 
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.img}>
            <img
              src="background.png"
              style={{ height: "650px", width: "600px" }}
            ></img>
          </div>
          <div className={styles.health}>
            <img src="Health.png"></img>
          </div>
        </div>

        <div className={styles.right}>
          <div
            style={{
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "18px",
              fontFamily: "inter",
              marginTop: "80px",
            }}
          >
            <h1>Log In</h1>
            {errorMessage.length > 0 && (
              <div style={{ marginBottom: "10px", color: "red" }}>
                {errorMessage}
              </div>
            )}
          </div>
          <div>
            <InputLabel
              htmlFor="standard-adornment-password"
              style={{ marginTop: "12px", fontSize: "10px" }}
            >
              Email
            </InputLabel>
            <TextField
              id="standard-basic"
              value={email}
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                marginTop: "10px",
                fontSize: "12px",
                marginBottom: "10px",
                width: "350px",
              }}
              required
            />
          </div>
          <div>
            <InputLabel
              htmlFor="standard-adornment-password"
              style={{ marginTop: "30px", fontSize: "10px" }}
            >
              Password
            </InputLabel>
            <Input
              type={values.showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                marginTop: "10px",
                fontSize: "12px",
                marginBottom: "10px",
                width: "350px",
              }}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div
            style={{
              marginTop: "12px",
              marginBottom: "40px",
              fontSize: "14px",
              marginLeft: "20px",
            }}
          >
            Maximum 8 character with atleast 1 number
          </div>
          <div className={styles.btn}>
            <Button
              style={{ width: "350px", height: "35px" }}
              variant="contained"
              onClick={handleSubmit}
            >
              Login{" "}
            </Button>
          </div>
          <div className={styles.sign}>
            By Signing in you agree to Health
            <Link href="" underline="none">
              Terms of service{" "}
            </Link>
            and
          </div>
          <div className={styles.sign}>
            <Link href="" underline="none">
              Privacy policy
            </Link>
          </div>
          <div className={styles.sign2}>
            <Link href="/Forgotpassword" underline="none">
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;