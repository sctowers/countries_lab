

// function to fetch country information by name
const getCountryByName = async (countryName) => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await response.json();

        // extract info 
        const countryInfo = {
            name: data[0].name.common,
            capital: data[0].capital,
            languages: Object.values(data[0].languages).join(", "),
            population: data[0].population,
        }

        // display info on web
        displayCountryInfo(countryInfo);
    } catch (error) {
        console.log(error);
    }
}

// function to fetch info for all countries
const getAllCountries = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();

        data.forEach(country => {
            const countryInfo = {
                name: country.name.common,
                capital: country.capital,
                languages: Object.values(country.languages).join(", "),
                population: country.population,
            }

            // display info on web
            displayCountryInfo(countryInfo);
        });
    } catch (error) {
        console.log(error);
    }
}

// function to handle the search button click
const searchCountry = () => {
    const countryInput = document.querySelector('#country-input');
    const countryName = countryInput.value.trim();

    if (countryName !== '') {
        getCountryByName(countryName);
    } else {
        alert('Please enter a country name.');
    }
}

// function to display info
const displayCountryInfo = (countryInfo) => {
    try {
        const countryContainer = document.querySelector('#country-container');

        // create and append HTML nodes with fetched data
        const countryInfoNode = document.createElement('div');

        const countryNameNode = document.createElement('p');
        countryNameNode.textContent = `Country: ${countryInfo.name}`;
        countryInfoNode.appendChild(countryNameNode);

        const capitalNode = document.createElement('p');
        capitalNode.textContent = `Capital: ${countryInfo.capital}`;
        countryInfoNode.appendChild(capitalNode);

        const languagesNode = document.createElement('p');
        languagesNode.textContent = `Languages: ${countryInfo.languages}`;
        countryInfoNode.appendChild(languagesNode);

        const populationNode = document.createElement('p');
        populationNode.textContent = `Population: ${countryInfo.population}`;
        countryInfoNode.appendChild(populationNode);

        const hrNode = document.createElement('hr');
        countryInfoNode.appendChild(hrNode);

        countryContainer.appendChild(countryInfoNode);
    } catch (error) {
        console.log(error);
    }
}

// function to handle the clear button click
const clearCountries = () => {
    const countryContainer = document.querySelector('#country-container');
    countryContainer.innerHTML = ''; 
}