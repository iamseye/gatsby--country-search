import React, { Component } from 'react';
import CountryCard from './countryCard';
import SearchBox from './searchBox';
import '../styles/mainContent.scss';

class MainContent extends Component {
  state = {
    countries: [],
  }

  componentDidMount() {
    fetch(`${process.env.GATSBY_ALL_COUNTRIES_API}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ countries: data });
        console.log(data);
      })
      .catch(console.log);
  }

  render() {
    const { countries } = this.state;
    return (
      <div className="mainContent">
        <SearchBox
          countries={this.state.countries}
        />
        <div className="countryCards">
          {countries.map(country => (
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
