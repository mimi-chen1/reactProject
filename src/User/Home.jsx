
import { observer } from "mobx-react-lite";
import { useState } from "react";
import Button from '@mui/material/Button';
import ServicesData from "../DataStore/ServicesData";
import AddMeeting from "./AddMeeting";
import ShowService from "../Admin/showService";
import BusinessDetailsDescription from "../Admin/AboutBuisness";
import { useNavigate } from 'react-router-dom';
const Home=observer(()=>{
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setShowForm(true);
  };
  

    return(<div>
       <Button className="buttonLogin" variant="outlined" onClick={() => {navigate("/admin") }}
       style={{ position: 'absolute', top: 10, left: 10, padding: '10px' }}>
            Login as admin</Button>
   <BusinessDetailsDescription></BusinessDetailsDescription>
   <ShowService></ShowService>
        
        <Button type='submit' onClick={handleClick} variant="outlined" size="small">
          Schedule
        </Button>
        {showForm && <AddMeeting></AddMeeting>}
    </div>)
})
export default Home;