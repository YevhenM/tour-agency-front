import React from 'react';
import axios from 'axios';

const instance = axios.create({
    withCredentials: false,
    baseURL: 'http://localhost:8765/api',
    
})

export const toursAPI = {
    getTours(page = 1, size = 6, minPrice=0, maxPrice=2000, sort="") {
        return instance.get(`tours?page=${page}&size=${size}&minprice=${minPrice}&maxprice${maxPrice}&sort=${sort}`)
            /*.then(response => response.data);*/
    },
   
}
/*

export const toursfAPI = {
    toursData = {},
    getTours = (page = 1, size = 6, minPrice=0, maxPrice=2000, sort="") => {
        fetch(`http://localhost:8765/api/tours?page=${page}&size=${size}&minprice=${minPrice}&maxprice${maxPrice}&sort=${sort}`)
            .then(response => response.json())
            .then(data => { this.toursData = data})
    }


}
*/