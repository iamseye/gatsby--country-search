import React, { Component } from 'react';
import CountryCard from './countryCard';
import SearchBox from './searchBox';
import SelectFilter from './selectFilter';
import '../styles/mainContent.scss';

class MainContent extends Component {
  state = {
    countries: [],
    resultCountries: [],
    filterRegion: '',
  }

  componentDidMount() {
    fetch(`${process.env.GATSBY_ALL_COUNTRIES_API}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ countries: data, resultCountries: data });
        console.log(data);
      })
      .catch(console.log);
  }

  searchCountry = (selectedCountry) => {
    fetch(`${process.env.GATSBY_SEARCH_COUNTRY_API}${selectedCountry}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ resultCountries: [data] });
      })
      .catch(console.log);
  }

  handleSelectRegion = (event) => {
    this.setState({ filterRegion: event.target.value });
  };

  render() {
    const { countries, resultCountries } = this.state;
    return (
      <div className="mainContent">
        <div className="mainContent__searchBar">
          <SearchBox
            countries={countries}
            searchCountry={this.searchCountry}
          />
          <SelectFilter
            filterRegion={this.state.filterRegion}
            handleSelectRegion={this.handleSelectRegion}
          />
        </div>
        <div className="countryCards">
          {resultCountries.map(country => (
            <CountryCard
              key={country.alpha2Code}
              image={country.flag}
              countryName={country.name}
              population={country.population}
              regin={country.region}
              capital={country.capital}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MainContent;
