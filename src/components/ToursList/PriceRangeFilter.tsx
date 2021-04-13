import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import data from "../../store/Data"
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles({
  root: {    
    //maxWidth: 300 
    width: 280       
  },
});

function valuetext(value:any) {
  return `${value} $`;
}

const PriceRangeFilter = observer(() => {
  const classes = useStyles();
  const [value, setValue] = React.useState([data.minPriceFilterMemory, data.maxPriceFilterMemory]);
  
  
  

const handleChange =  (event:any, newValue:any) => {
  console.log("on start ", data.minPriceFilterMemory, data.maxPriceFilterMemory )
      console.log("val1 - ",value)
      setValue(newValue)
      console.log("val2 - ",value)   
        data.setMinPriceFilterMemory(value[0])
        data.setMaxPriceFilterMemory(value[1])
        data.getData(1)
};

const clearRange = () =>{
  value[0] = data.minPriceFilterMemory
  value[1] = data.maxPriceFilterMemory
}


  // const handleChange =  (event:any, newValue:any) => {
  //   console.log("on start ", data.minPriceFilterMemory, data.maxPriceFilterMemory )
  //   clearTimeout(TimerId)
    
  //    TimerId = setTimeout( () => {
  //       setValue(newValue)   
  //         data.setMinPriceFilterMemory(value[0])
  //         data.setMaxPriceFilterMemory(value[1])
  //         data.getData(1) 
       
  //       console.log("val - ",value)  
  //       console.log("min - ", value[0], "max - ", value[1])
  //       console.log("after ", data.minPriceFilterMemory, data.maxPriceFilterMemory )}
  //       , 200
  //   )           
  // };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" >
        <span> price: {data.minPriceFilterMemory} - {data.maxPriceFilterMemory}$ </span>
      </Typography>
      <Slider
        max={2000}
        step={50}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}        
      />      
    </div>
  );
})

export default PriceRangeFilter