import React, {useState} from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { propTypes } from 'react-bootstrap/esm/Image';

import { makeStyles } from '@material-ui/core/styles';
  
const useStyles = makeStyles({
  root:{
   verticalAlign:"initial" ,
  backgroundColor:"#F28808",
  
  }
})

function MultiSelectFilter(props) {
const classes = useStyles();
console.log(props)
const [openProduct, setOpenProduct] = useState(false)
const [openCountry, setOpenCountry] = useState(false)
const [openCategory, setOpenCategory] = useState(false)



const [value, setValue] = useState('USA');

  const handleChange = (event) => {
    setValue(event.target.value);
    
  };

const showFilters = () =>{
    
}

function getUniqueKeys(data,field)
{
let arr = []
for (let i = 0; i<data.length; i++)
{
if (Array.isArray(data[i][field]))
{
for (let j=0; j<data[i][field].length;j++)
{
if (arr.indexOf(data[i][field][j]) == -1)
{arr.push(data[i][field][j])}
}
}
else
{if (arr.indexOf(data[i][field]) == -1)
{
arr.push(data[i][field])}}
}
return arr.sort()
}

  const [apply, setApply] = useState(true)
    return (
        <>
     

        <div>
        {apply?
          <FormControl
   
           component="fieldset">
                <RadioGroup 
                 classes={{
      root:classes.root
    }} style={{position:"absolute", backgroundColor:"F28808", width:'120px'}} aria-label="gender" name="gender1"  value={value} onChange={handleChange}>
           
                {getUniqueKeys(props.API_DATA, props.visibleFilter).map((d) => <div ><input type="checkbox"   onChange={(e)=>props.filterHandler(props.visibleFilter,e.target.value) } checked={props.filters?.[props.visibleFilter]?.indexOf(d)> -1} id="vehicle1" name="vehicle1" value={d} /> 
                          <label style={{fontSize: "13px"}} for="vehicle1">{d}</label> </div>  )}
                          <button  onClick={(e)=>props.filterHandler(props.visibleFilter,'clear') }  > clear all</button>
                          <button onClick={()=> setApply(!true)}  > Apply </button>
                </RadioGroup>
               
        </FormControl>:<></>
        }
      
              
        </div>
            
          
      
        </>
    )
}

export default MultiSelectFilter
