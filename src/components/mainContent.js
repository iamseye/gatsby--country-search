import React, { Component } from 'react';
import CountryCard from './countryCard';
import '../styles/mainContent.scss';

class MainContent extends Component {
  state = {
    countires: [],
  }

  componentDidMount() {
    fetch(`${process.env.GATSBY_ALL_COUNTRIES_API}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ countires: data });
      })
      .catch(console.log);
  }

  render() {
    const { countires } = this.state;
    return (
      <div className="mainContent">
        <div className="countryCards">
          {countires.map(country => (
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
