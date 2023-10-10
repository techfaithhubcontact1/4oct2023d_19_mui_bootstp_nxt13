
"use client";
//1. import Area
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';import Fingerprint from '@mui/icons-material/Fingerprint';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';

import { Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Rating from '@mui/material/Rating';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

import Switch from '@mui/material/Switch';

import TextField from '@mui/material/TextField';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


//2. Defination and export area
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
// for Switc 
// const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function Home() {
  const [value, setValue] = React.useState(2);
 
  // For Selecte
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // For slider 
  // const [value, setValue] = React.useState(30);

    // for toggle buttons 
  const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

  return (
    <main>
      <h1>Material UI Components</h1>
      <h1>Butoons</h1>
      <Button variant="contained" color="error" href="#contained-buttons" >Hello world</Button>

      <Button variant="contained" size="small" color="success"  onClick={ ()=>{ console.log("Ok"); } } > Hello  world
      </Button>
       <br /> <br /> <br />
        
       {/* Icon Buttons */}
       <h1>Butoons Icons</h1>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <br /> <br /> <br />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <br /> <br /> <br />
        <IconButton aria-lable="delete" color="primary"><DeleteIcon /></IconButton>
        <IconButton area-lable="add an alarm" color="secondary"><AlarmIcon /></IconButton>
        <IconButton color="primary" area-lable="add to shopping cart"><AddShoppingCartIcon /></IconButton>
        <IconButton aria-label="fingerprint" color="success" size="large"><Fingerprint /></IconButton>
        <br/> <br/> <br/>

        {/* Buttons group  */}
        <h1>Buttons Group</h1>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Stack>
      <br /> <br /> <br />

      {/* Check Box  */}
      <h1>Check Box</h1>
      <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </div>
      <br /> <br /> <br />

      {/* Floating Action Buttons  */}
      <h1>Floating Action Buttons</h1>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="primary" area-lable="add">
           <AddIcon />
        </Fab>
        <Fab color="secondary" area-lable="edit">
           <EditIcon />
        </Fab>
        <Fab color="error" area-lable="like">
           <FavoriteIcon />
        </Fab>
        <br /> <br /> <br />
         
         {/* Ratings Star  */}
         <h1>Rating Star</h1>
        <Rating name="read-only" value={value} readOnly />
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <br /> <br /> <br />

        {/* Select options  */}
        <h1>Select Options</h1>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br /> <br /> <br />

      {/* Slider  */}
      <h1>Volum Sliders</h1>
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      </Box>
      <br /> <br /> <br />

      {/* switch btt  */}
      <h1>Switch Buttons</h1>
      <div>
        <Switch {...label} defaultChecked />
        <Switch {...label} />
        <Switch {...label} disabled defaultChecked />
        <Switch {...label} disabled />
      </div>
      <br /> <br /> <br />

      {/* for textfild  */}
      <h1>TextField Form</h1>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
      <br /> <br /> <br />

      {/* For Toggle button group  */}
      <h1>Toggle button group</h1>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </main>
  )
}

