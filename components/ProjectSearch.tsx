import { Button, Divider } from '@mui/material'
import { useState } from 'react'
import styles from "../styles/search.module.css"
import Modal from "./Add_user_Modal";


function ProjectSearchBar() {
    const[openModal,setopenModal]=useState(false)

    // const [query, setQuery] = useState('')

    // const onChange = async (e: { target: { value: any; }; }) => {
    //     const {value} = e.target;
    //     setQuery(value)

        return (
            <div className={styles.head}>
            <div className={styles.admin}>Projects</div>
         <div className={styles.search}>
            <input 
            className={styles.search1} 
            // onChange={onChange}
            id='city'
            type="search" 
            name="search"
            // value={query} 
            placeholder="Search" /></div>
            <div ><Button className={styles.btn} variant="contained" onClick={()=>setopenModal(true)}><span>+</span>Add Project</Button>
            <Modal 
      open={openModal} 
      onClose={() => setopenModal(false)} /></div>
      
         </div>
        )
       
    }
    
    export default ProjectSearchBar;