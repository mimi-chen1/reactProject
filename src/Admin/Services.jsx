
import React from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import red from '@mui/material/colors/red';
import Button from '@mui/material/Button';
import AddService from './addService';
import ServicesData from '../DataStore/ServicesData';
import { pink } from '@mui/material/colors';
import ShowService from './showService';

const Service = observer(() => {
    const [open, setOpen] = React.useState(false);
  const [isFormVisible, setIsFormVisible] = React.useState(false);
   const handleClick = () => {
    setIsFormVisible(!isFormVisible);
    setOpen(true);
  };
  return (
    <div>
      <h1>Service</h1>
      <ShowService></ShowService>
       <Button onClick={handleClick} variant="outlined" size="small">
        Add New Service
      </Button>
      {open && <AddService setOpen={setOpen} />}
    </div>
  );
});

export default Service;