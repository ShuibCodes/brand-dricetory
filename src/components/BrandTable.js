import React , {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextInput from './TextInput'
import TableHeader from './TableHeader'
import TableContent from './TableContent'
import MultiSelectFilter from "./MultiSelectFIlter";
import { useHistory , useLocation} from "react-router";
import { useParams } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));



function BrandTable() {

 const API_DATA = [
    {
        "bnd": "test brand 11",
        "url": "htttps://www.test.com/all-products11",
        "cnt": "UK",
        "prt": ['Perf. Supps'],
        "cat": ['Keto']
    },
    {
        "bnd": "test brand 12",
        "url": "htttps://www.test.com/all-products12",
        "cnt": "UK",
        "prt": ['Diet. Supps'],
        "cat": ['Gaming']
    },
    {
        "bnd": "Aguulp",
        "url": "https://www.aguulp.com/shop/",
        "cnt": "UK",
        "prt": ['Diet. Supps','Perf. Supps'],
        "cat": ['None']
    }

]

  const [filters, setFilters] = useState({search:'',prt:[],cnt:[],cat:[]})
  const [visibleFilter, setVisibleFilter] = useState()

const toggleVisibleFilter = (field) =>
{
//if same as set then set to undefined
if(field === visibleFilter){setVisibleFilter()}
else
{setVisibleFilter(field)}

}

  const filterHandler = (field,value) =>{
    let newFilters = {...filters}
   const findIndex =  newFilters[field].indexOf(value)
if(findIndex === -1){newFilters[field].push(value)}
else{delete newFilters[field][findIndex]}
newFilters[field] = newFilters[field].filter(d=>d)
    setFilters(newFilters)
  }

  const history = useHistory()
  const locatio = useLocation()
const searchHandler = (searchString) =>
{
  let newFilters = {...filters} 
  newFilters.search = searchString
  setFilters(newFilters)

  // react router 
  const params = new URLSearchParams()
  if (searchString) {
    params.append("brand", searchString)
  } 
  history.push({search: params.toString()})

 
}


  const classes = useStyles();


  return (
    <div className="App">
      <TextInput searchHandler={searchHandler} filters={filters}  />
      <h3>{API_DATA.length} Brands</h3>
      <Table className={classes.table}>
      <> 
        <TableHeader filterHandler={filterHandler}  API_DATA={API_DATA} toggleVisibleFilter={toggleVisibleFilter} visibleFilter={visibleFilter} setFilters={setFilters} filters={filters} />
        <TableContent visibleFilter={visibleFilter} setVisibleFilter={setVisibleFilter} setFilters={setFilters} filters={filters}   API_DATA={API_DATA}/>
      </> 
      </Table>

    </div>
  );
}

export default BrandTable;
