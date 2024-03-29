
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel';
import ServicesData from "../DataStore/ServicesData";
import MyDatePicker from "./MyDatePicker";
 import MeetingData from "../DataStore/MeetingData";
import BuisnessDetails from "../DataStore/BuisnessDetails";


const AddMeeting=observer(({setOpen})=>
{
      const list=ServicesData.listServices
    const [service, setService] = useState({

      id: "",
      serviceType: "",
      dateTime: "",
      clientName: "",
      clientPhone: "",
      clientEmail: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setService({
        ...service,
        [name]: value,
      });
    };
    const handleSubmit = async (e) => {

      e.preventDefault();
      MeetingData.postmeeting(service)
      setOpen(false)
      e.target.reset();
    }
         return(<>
    
    <Dialog open={open} >
        <DialogTitle>Add Meeting</DialogTitle>
        <DialogContent>
    <form onSubmit={handleSubmit}>
    
     <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">serviceType</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name="serviceType"
        //   value={service?.id} 
          onChange={handleChange}
          // {...register('serviceType')} 
          label="Service"
        >
          {list.map((service) => (
            <MenuItem value={service.name}>{service.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <p><TextField name="id" id="outlined-password-input" label="id" type="text" autoComplete="current-password"
          onChange={handleChange}/> </p>
           <p><TextField name="clientName" id="outlined-password-input" label="clientName" type="text" autoComplete="current-password"
        onChange={handleChange}/> </p>
        <p><TextField name="clientPhone" id="outlined-password-input" label="clientPhone" type="text" autoComplete="current-password"
      onChange={handleChange}/></p>
       <p><TextField name="clientEmail" id="outlined-password-input" label="clientEmail" type="text" autoComplete="current-password"
    onChange={handleChange}

  /></p>
  <MyDatePicker
              name="dateTime"
              onChange={(date) => {
                setService((prevService) => ({
                  ...prevService,
                  dateTime: date,
                }));
              }}
            />
            <Button type="submit">Save</Button>

    </form>
    </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </>)
}
);
export default AddMeeting;