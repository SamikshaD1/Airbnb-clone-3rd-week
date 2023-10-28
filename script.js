// async function apiCall() {
//     const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Nagpur&checkin=2023-10-25&checkout=2023-10-27&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '0f42447eabmshcc0e9b18ff75f1ep1cca6djsnfe69c62bad3c',
//             'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
//         }
//     };
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(JSON.parse(result));

//     } catch (error) {
//         console.error(error);
//     }
// }
// apiCall();

let searchbutton = document.getElementById("search-btn");
searchbutton.addEventListener('click', searchLocation);

function searchLocation(event) {
    event.stopPropagation();

    let locationToBeSearched = document.getElementById('location').Value;
    let cheakIn = document.getElementById('cheak-in').value;
    let cheakOut = document.getElementById('cheak-out').value;
    let guests = document.getElementById('guests').value;

    //let link = document.createElement('a');
    //link.href = `standerd-search.html?location=${locationToBeSearched}&cheak-in=${cheakIn}&cheak-out=${cheakOut}&guests=${guests}`;
     //ink.click();
     
   // const searchUrl = `https://www.airbnb.com/s/${locationToBeSearched}/${checkIn}/${checkOut}/${guests}`;

  // Open the search results page in a new tab.
  //window.open(/AirBnb-project/standerd-search, "_blank");
  //window.open(`standerd-search.html?location=${locationToBeSearched}&cheak-in=${cheakIn}&cheak-out=${cheakOut}&guests=${guests}`, "_blank");
   const data ={locationToBeSearched :locationToBeSearched ,cheakIn:cheakIn,cheakOut:cheakOut,guests:guests};
   localStorage.setItem('search-data',JSON.stringify(data));
   window.location.href ='../standerd-search/index.html';
};

