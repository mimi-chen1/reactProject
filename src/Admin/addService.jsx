import { observer } from "mobx-react-lite";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ServicesData from "../DataStore/ServicesData";
const AddService=observer(({setOpen})=>{
    const { register, handleSubmit , formState: { errors }} = useForm();
  const handleClickOpen = () =>setOpen(true);

  const onSubmit = (data) => {
         console.log(data);
   ServicesData.postservice(data);
   setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} >
        <DialogTitle>Add Service</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the service details:
          </DialogContentText>
          <form onSubmit={handleSubmit(onSubmit)}>
          <TextField autoFocus margin="dense"  id="id" label="id" type="text" fullWidth variant="standard" required {...register('id',{ required:true })}/>
          {errors.id && <p> Id is required</p>}
          <TextField autoFocus margin="dense"  id="name" label="name" type="text" fullWidth variant="standard" required {...register('name',{ required:true })}/>
          {errors.name && <p> Name is required</p>}
          <TextField autoFocus margin="dense"  id="description" label="description" type="text" fullWidth variant="standard" required {...register('description',{ required:true })}/>
          {errors.description && <p> Description is required</p>}
          <TextField autoFocus margin="dense"  id="price" label="price" type="text" fullWidth variant="standard" required {...register('price',{ required:true })}/>
          {errors.price && <p> Price is required</p>}
          <TextField autoFocus margin="dense"  id="duration" label="duration" type="text" fullWidth variant="standard" required {...register('duration',{ required:true })}/>
          {errors.duration && <p> Duration is required</p>}
          <Button type="submit">Save</Button>
          </form>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
})
export default AddService;