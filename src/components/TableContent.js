import React , {useState} from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { Waypoint } from 'react-waypoint';
import '../../src/App.css'


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));




export default function TableContent(props) {

  const classes = useStyles();  


const [limit, changeLimit] = useState(12);

  const limitHandler = (newlimit) => {
    if(newlimit > limit)
   changeLimit(newlimit)
  }
console.log([props.API_DATA,props.filters])

    return (
        <>    

        
        <TableBody >
          {props.API_DATA.map((row,index) => (
           <>
           <TableRow  key={row.name}>
            <TableCell style={{ textAlign:"left", width:'5%'}} align="center">{index + 1}</TableCell> 
              <TableCell style={{ textAlign:"left", width:'25%'}}   align="center">{row.bnd}</TableCell> 
              <TableCell style={{ textAlign:"left", width:'5%'}}  align="center">{row.cnt}</TableCell>
              <TableCell style={{ textAlign:"left", width:'20%'}}  align="center">{row.prt.map((e) => <span   key={e}><span style={{backgroundColor:"#FFD9B6", padding:"1px",display:"flex",width:"80px", border:"0.5px solid orange", margin: "10px 0px", borderRadius:"3px"}}>{e}</span></span>)}</TableCell>
              <TableCell style={{ textAlign:"left", width:'20%'}}  align="center">{row.cat.map((e) =><span  key={e}><span style={{backgroundColor:"#F28808", padding:"1px", display:"flex",width:"50px", border:"0.5px solid orange", borderRadius:"3px", margin: "10px 0px"}}>{e}</span></span>)}</TableCell>
              <TableCell style={{ textAlign:"left", width:'25%'}}  align="center"><a href={row.url}>{row.url}</a></TableCell>
            </TableRow>
            <Waypoint onEnter={()=>limitHandler(index + 10)}/>
          </>
          ))}
          
        </TableBody>

        </>
    )
}
