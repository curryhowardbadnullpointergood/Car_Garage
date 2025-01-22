#!/usr/bin/env node


// interesting so none of the constant are actual vericals

var axios = require('axios');

var data = JSON.stringify({ registrationNumber: 'SA09CYH' });

var make; 
var year; 

var config = {
  method: 'post',
  url:
    'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
  headers: {
    'x-api-key': 'mG1zaRgSH21lGk5mHwqgV6Y4oGkm8UpX5VNbfHoN',
    'Content-Type': 'application/json',
  },
  data: data,
};



  async function fetchData() {
    try {
      const response = await axios(config);
      //console.log(JSON.stringify(response.data));
      //response1 = response.data;
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; // Re-throw the error to propagate it upwards
    }
  }
  
  
  fetchData().then(response => {
    // Do something with the response data

    console.log(JSON.stringify(response));

    make= response.make; 
    year = response.year; 

  }).catch(error => {
    // Handle the error
    console.log(error);
    console.log('There was an error!');
  });

  

  // getter functions 



  async function getMake() {
    return make;
  }

 async  function getYear() {
    return year;
  }



//   async function main() {
//     try {
//       const response = await fetchData();
//       response1 = response; // Now response1 is populated before the getters
  
//       const make = getMake(response1);
//       const year = getYear(response1);
  
//       console.log('Make:', make);
//       console.log('Year:', year);
//     } catch (error) {
//       console.error("Error in main:", error);
//     }
//   }
  
//   main();


  module.exports = {
    fetchData: fetchData,
    getMake: getMake,
    getYear: getYear,
  };