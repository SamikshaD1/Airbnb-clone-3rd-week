const likeIcon = document.getElementById("likeIcon");

likeIcon.addEventListener("click", () => {
    // Toggle the class to change from regular to solid heart
    likeIcon.classList.toggle("fa-regular");
    likeIcon.classList.toggle("fa-solid");
});

const staricon = document.getElementById("staricon");
staricon.addEventListener("click",() =>{
    staricon.classList.toggle("fa-regular");
    staricon.classList.toggle("fa-solid");
});


let localStorageData = JSON.parse(localStorage.getItem('search-data'));

async function apiCall() {
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=${localStorageData.locationToBeSearched}&checkin=${localStorageData.cheakIn}&checkout=${localStorageData.cheakOut}&adults=${localStorageData.guests}&children=0&infants=0&pets=0&page=1&currency=USD`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0f42447eabmshcc0e9b18ff75f1ep1cca6djsnfe69c62bad3c',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
    } catch (error) {
        console.error(error);
    }
}


apiCall();







