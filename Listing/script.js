async function apiCall() {
    const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Nagpur&checkin=2023-10-25&checkout=2023-10-27&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
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

