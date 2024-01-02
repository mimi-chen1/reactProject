import { useState } from "react";
import EditDetails from "./EditDetails";
import BusinessDetailsDescription from "./AboutBuisness";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from "@mui/material";
import {BrowserRouter, Route, Routes, Link, Outlet} from 'react-router-dom';
const AdminBusiness = ()=> {
    const [showComponent, setShowComponent] = useState(false);
    const [value, setValue] = useState('1');
    const handleButtonClick = () => {
      setShowComponent(true);
    };
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
return(
   
<div>
{showComponent ?<EditDetails setShowComponent={setShowComponent} /> :<BusinessDetailsDescription />
}

<Button
          onClick={handleButtonClick}
          variant="outlined"
          size="small"
          style={{ marginTop: 16 }}
        >
          Edit
        </Button>
      
<Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Services" value="1" component={Link} to="Services" disabled={showComponent}/>
            <Tab label="meeting" value="2" component={Link} to="meeting" disabled={showComponent}/>

          </TabList>
        </Box>
      </TabContext>
    </Box>
      <Outlet/>
</div>
);
}
export default AdminBusiness;