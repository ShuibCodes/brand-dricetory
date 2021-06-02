import React , {useState} from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
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


const [rowLimit, setRowLimit] = useState()

const [changeRowLimit, setChangeRowLimit] = useState()

const filteredData = (data,filters) => {
const filterKeys = Object.keys(filters).filter(d=>d !== 'search')
console.log(filters[filterKeys[0]])
  let newData = []
for (let i=0; i<data.length; i++)
{
  let mismatch = 0;
  for (let j=0; j<filterKeys.length; j++)
  {
    console.log(filters[filterKeys[j]])
    if(mismatch > 0)  {continue}
    if(filters[filterKeys[j]].length===0){continue}
  if(Array.isArray(data[i][filterKeys[j]]))
  { 
  //overlapping array
  console.log(filters[filterKeys[j]].filter(value => data[i][filterKeys[j]]?.includes(value)))
  if(filters[filterKeys[j]].filter(value => data[i][filterKeys[j]]?.includes(value)).length === 0){mismatch++}
  }
  else
  {if(filters[filterKeys[j]].indexOf(data[i][filterKeys[j]]) === -1){mismatch++}}
  }
  if(mismatch === 0){newData.push(data[i])}
}
console.log(newData)

return newData.filter(d=>d.bnd.toLowerCase().match(filters.search.toLowerCase()))
}

console.log([props.API_DATA,props.filters])

    return (
        <>    

        
        <TableBody >
          {filteredData(props.API_DATA,props.filters).map(row => (
           
            <TableRow  key={row.name}>
            
            <TableCell style={{ textAlign:"left"}}   align="center">{row.bnd}</TableCell> 
              <TableCell style={{ textAlign:"left"}}   align="center">{row.bnd}</TableCell> 
              <TableCell style={{ textAlign:"left"}}  align="center">{row.cnt}</TableCell>
              <TableCell style={{ textAlign:"left"}}  align="center">{row.prt.map((e) => <span style={{padding: "5px"}} key={e} >{`${e + ','}`}</span>)}</TableCell>
              <TableCell style={{ textAlign:"left"}}  align="center">{row.cat}</TableCell>
              <TableCell style={{ textAlign:"left"}}  align="center"><a href={row.url}>{row.url}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>

        </>
    )
}
