import React, {useState} from 'react'
import TableHead from "@material-ui/core/TableHead";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableContent from './TableContent'
import MultiSelectFIlter from "./MultiSelectFIlter";
import {AiFillFilter} from 'react-icons/ai'
import {AiOutlineFilter} from 'react-icons/ai'
import { makeStyles } from '@material-ui/core/styles';
import '../App.css'

  
const useStyles = makeStyles({
  root:{
   verticalAlign:"initial" ,
  background:"#F28808",
  padding:"16px",
      
  }
})


function TableHeader(props) {
const classes = useStyles();

// changing filter colour
  const ChangeFilter = (props) =>{
    console.log(props)
      if(props.filters[props.field] === undefined){
        return (null)
      }
      if(props.filters[props.field].length > 0 && props.autoFilter ){
          return (<AiFillFilter style={{position:"relative", top:"3px", left: "4px"  }} onClick={() => props.toggleVisibleFilter(props.field)}/>)
      } else if( props.filters[props.field].length === 0 && props.autoFilter){
        return (<AiOutlineFilter  style={{position:"relative", top:"3px", left: "4px"  }} onClick={() => props.toggleVisibleFilter(props.field)}/>)
      } else{
        return (null)
      }
  }


  const headerFields = [
    {field: 'ID', label: '', width: '5%'},
  {field: 'bnd', label: 'Brand', width: '25%'  } ,
  {field: 'cnt', label: 'Country', autoFilter: true, width: '5%' } ,
  {field: 'prt', label: 'Product type', autoFilter: true, width: '20%' } ,
  {field: 'cat', label: 'Category', autoFilter: true, width: '20%' } ,
  {field: 'url', label: 'URL', width: '25%' } ,
  ]

    return (
        <>
          <div style={{width:"100%" , height:"85px"}} >         
          <TableRow>
{headerFields.map((d)=>
  <TableCell 
    classes={{
      root:classes.root
    }}
   style={{ textAlign:"left",fontSize:"18px", position:"sticky", width:d.width, background:"#F28808"}}  align="left">{d.label}
  
    <ChangeFilter field={d.field} filters={props.filters}  autoFilter={d.autoFilter} toggleVisibleFilter={props.toggleVisibleFilter} />
    {props.visibleFilter===d.field?<MultiSelectFIlter  filterHandler={props.filterHandler}  API_DATA={props.API_DATA} visibleFilter={props.visibleFilter} setVisibleFilter={props.setVisibleFilter} setFilters={props.setFilters} filters={props.filters} />:(null)}
    </TableCell>
)}

          </TableRow>
           </div>
     
        </>
    )
}

export default TableHeader
