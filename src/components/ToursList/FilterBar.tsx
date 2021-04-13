
import PriceRangeFilter from "../ToursList/PriceRangeFilter"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Container, Box, Button, TextField  } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import Grid from '@material-ui/core/Grid';
import {observer} from "mobx-react-lite";
import data from "../../store/Data"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    rounded: false,    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    rounded: false,
  },
}));


const getData = async () => {
  await fetch("http://localhost:8765/api/tours/?minPrice=100&maxPrice=1000&page=0&size=2&sort=price,desc").then(data => data.json()).then(data => console.log(data))
}

const FilterBar = observer(() => {
  const classes = useStyles();

  return (   
      <div className={classes.root}>        
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              //expandIcon={FilterListIcon}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >             
                <Grid container justify="flex-end" spacing={3}>
                  <Grid item>
                  <FilterListIcon/>
                  </Grid>
                </Grid>                
                </AccordionSummary>
                
            <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item >
                    <PriceRangeFilter /> 
                  </Grid>
                 
                  <Grid item >
                    <Button variant={(data.shouldSorting&&data.cheapFirst)? "contained": "outlined"} 
                            size="small" 
                            color="primary"
                            onClick={()=>data.setCheapFirst()}> 
                            Cheap first 
                    </Button>
                  </Grid>
                  <Grid item >
                    <Button variant={(data.shouldSorting&&!data.cheapFirst)? "contained": "outlined"} 
                            size="small" 
                            color="primary"
                            onClick={()=>data.setExpensiveFirst()}> 
                            Expensive first 
                    </Button>
                  </Grid>
                  <Grid item >
                    <Button variant="outlined" size="small" onClick={()=>data.setFilterClear()} > Clear filter </Button>
                  </Grid>
                  <Grid item >
                    <Button variant="outlined" size="small" onClick={()=>data.getData()} > Get data </Button>
                  </Grid>                  
                </Grid>           
            </AccordionDetails>
          </Accordion>                    
      </div>
   
  );
})

export default FilterBar














      
