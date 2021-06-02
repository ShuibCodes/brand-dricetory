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

    console.log(props.filters)

//useHistory here 







    return (
      <>
    <form   action="/" method="get" className={classes.root} noValidate autoComplete="off">
   
      <TextField style={{width:"600px"}} onChange={(e)=>props.searchHandler(e.target.value)} value={props.filters.search}  id="outlined-basic" label={props.filters.search==''?'Search brand':''} variant="outlined" />

       
    </form>

    </>

  );
}

export default TextInput

