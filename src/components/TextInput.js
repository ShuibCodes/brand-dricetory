import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


function TextInput(props) {
    const classes = useStyles();
  
    return (
      <>
    <form className={classes.root} noValidate autoComplete="off">
   
      <TextField onChange={(e)=>props.searchHandler(e.target.value)} value={props.filters.search}  id="outlined-basic" label={props.filters.search==''?'Search brand':''} variant="outlined" />

       
    </form>

    </>

  );
}

export default TextInput
