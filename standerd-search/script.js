//like button
const likeIcon = document.getElementById("likeIcon");
const cardWrapper = document.querySelector(".card")

likeIcon.addEventListener("click", () => {
//Toggle the class to change from regular to solid heartx`
    likeIcon.classList.toggle("fa-regular");
    likeIcon.classList.toggle("fa-solid");
});

const staricon = document.getElementById("staricon");
staricon.addEventListener("click",() =>{
    staricon.classList.toggle("fa-regular");
    staricon.classList.toggle("fa-solid");
});

//2.search-input
let localStorageData = JSON.parse(localStorage.getItem('search-data'));

async function apiCall() {
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=${localStorageData.locationToBeSearched}&checkin=${localStorageData.cheakIn}&checkout=${localStorageData.cheakOut}&adults=${localStorageData.guests}&children=0&infants=0&pets=0&page=1&currency=USD`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '050c2523abmsh111253e43ad9abap1a6f0fjsn1b0463cae1d4',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


apiCall();




