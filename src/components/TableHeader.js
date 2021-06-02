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
import {FiFilter} from 'react-icons/fi'

function TableHeader(props) {


const headerFields = [
  {field: 'ID', label: ''},
{field: 'bnd', label: 'Brand'  } ,
{field: 'cnt', label: 'Country', autoFilter: true } ,
{field: 'prt', label: 'Product type', autoFilter: true } ,
{field: 'cat', label: 'Category', autoFilter: true } ,
{field: 'url', label: 'URL' } ,
]

  


    return (
        <>
            <TableHead >
          <TableRow>
{headerFields.map((d)=>
  <TableCell  style={{ textAlign:"left"}}  align="center">{d.label}
  {d.autoFilter?<FiFilter style={{position:"relative", top:"4px", left: "4px"}} onClick={() => props.toggleVisibleFilter(d.field)}/>:<div/>}
  {props.visibleFilter===d.field?<MultiSelectFIlter filterHandler={props.filterHandler}  API_DATA={props.API_DATA} visibleFilter={props.visibleFilter} setVisibleFilter={props.setVisibleFilter} setFilters={props.setFilters} filters={props.filters} />:(null)}
    </TableCell>
)}

          </TableRow>
        </TableHead>
        </>
    )
}

export default TableHeader
