import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import data from "../../store/Data"
import usersStore from "../../store/usersStore"
import CardTour from "../Card/Card";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Container, Box, Button, TextField} from '@material-ui/core'
import PriceRangeFilter from "../ToursList/PriceRangeFilter"
import FilterBar from "../ToursList/FilterBar"
import Pagination from '@material-ui/lab/Pagination';
import {Link, useParams} from "react-router-dom";

const ToursList = observer((props:any) => {
   // const [showSortParams, setShowSortParams] = useState(false);

    

    console.log("tours list props - ",props)
    console.log(props.location.search)
    console.log(props.history)
    //props.history.push("/?page=1")
    data.checkLocation(props.location.search.toString())

    

    let {currentPage, countofPages} = data;


    useEffect(() => {
        if (data.tours.length === 0) {
            data.setLocation(props.history)
            data.getData();
        }
    }, [])

    const paginatorHandle = (e:object, number:number) =>{
        //console.log("<obj> ", e)
        console.log(">>>>> ",number)
        data.setCurrentPage(number)
    }

   

    return (
        <div>
                

            <div >
                {/* <div className="sort-and-filter-box">
                    <div className="sort-and-filter-box__menu">
                        <i className="fas fa-chevron-left arrow" onClick={(e) => showParamsHandler(e)}/>
                        {showSortParams && params}
                    </div>
                </div> */}
                
                <FilterBar/>
                <Grid container  justify="center" spacing={3}>
                    <Grid item justify="center" alignContent="center" alignItems="center"> 
                        <Pagination count={data.countofPages} page={data.currentPage} onChange={paginatorHandle}/> 
                    </Grid>
                </Grid>
                 
                
                {data.tours.length === 0 ? (<h3>Tours is not found</h3>) : (

                <Grid container spacing={3} alignContent="stretch" alignItems="stretch">
                    
                    {data.tours && data.tours.map(value => (
                        <Grid item xs={12} md={6} lg={4} justify="space-between" >
                        <CardTour key={value.id} tour={value} isAuth={usersStore.isAuth} addToCart={usersStore.addTourToCart}/>
                        </Grid>
                    ))}
                    
                </Grid>
                )}

                <Grid container  justify="center" spacing={3}>
                    <Grid item justify="center" alignContent="center" alignItems="center"> 
                        <Pagination count={data.countofPages} page={data.currentPage} onChange={paginatorHandle}/> 
                    </Grid>
                </Grid>
              
            </div>
           
        </div>
    );
})



export default ToursList;
