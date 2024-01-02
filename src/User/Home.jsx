

import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ServicesData from "../DataStore/ServicesData";
import AddMeeting from "./AddMeeting";
import BuisnessDetails from "../DataStore/BuisnessDetails";
import BusinessDetailsDescription from "../Admin/AboutBuisness";
import ShowService from "../Admin/showService";
const Home=observer(()=>{
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(true);
  };

    return(<div >
      <Button className="buttonLogin" variant="outlined" onClick={() => { navigate("/admin") }}
       style={{ position: 'absolute', top: 10, left: 10, padding: '10px' }}>
            Login as admin</Button>

 <BusinessDetailsDescription></BusinessDetailsDescription>
    
        <ShowService/>
      
        <Button onClick={handleClick} variant="outlined" size="small">
          Schedule
        </Button>
        {open && <AddMeeting setOpen={setOpen}/>}
    </div>)
})
export default Home;