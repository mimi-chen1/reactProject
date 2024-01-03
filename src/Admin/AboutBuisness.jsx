

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
 import { observer } from 'mobx-react-lite';
 import BuisnessDetails from "../DataStore/BuisnessDetails";
 import CardMedia from '@mui/material/CardMedia';
const BusinessDetailsDescription = observer(()=> {
  
  return (
    <Card
      sx={{
        maxWidth: 400,
         margin: 'auto',
        marginTop: 4,
      //  backgroundColor: '#fce4ec',
        boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={BuisnessDetails.business.logo}
        alt="Logo"
      />
      
      <CardContent>
        <Typography variant="h5" component="div">
          {BuisnessDetails.business.name}
        </Typography>
        <Typography color="text.secondary">
          <strong>ID:</strong> {BuisnessDetails.business.id}
        </Typography>
        <Typography color="text.secondary">
          <strong>Address:</strong> {BuisnessDetails.business.address}
        </Typography>
        <Typography color="text.secondary">
          <strong>Phone:</strong> {BuisnessDetails.business.phone}
        </Typography>
        <Typography color="text.secondary">
          <strong>Owner:</strong> {BuisnessDetails.business.owner}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ marginTop: 8 }}>
          {BuisnessDetails.business.description}
        </Typography>
      
      </CardContent>
    </Card>
  );
});

export default BusinessDetailsDescription;