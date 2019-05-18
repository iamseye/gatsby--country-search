import React, { Component } from 'react';
import { StaticQuery, navigate, graphql } from 'gatsby';
import * as JsSearch from 'js-search';
import CountryCard from './countryCard';
import SearchBox from './searchBox';
import SelectFilter from './selectFilter';
import '../styles/mainContent.scss';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: props.allCountries,
      resultCountries: props.allCountries,
      filterRegion: '',
      search: [],
    };
  }

  async componentDidMount() {
    this.rebuildIndex();
  }

  // rebuilds the overall index based on the options
  rebuildIndex = () => {
    const { countries } = this.state;
    const countryToSearch = new JsSearch.Search(['node', 'id']);

    countryToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    countryToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();

    countryToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(['node', 'id']);

    countryToSearch.addIndex(['node', 'name']); // sets the index attribute for the data
    countryToSearch.addIndex(['node', 'alpha2Code']); // sets the index attribute for the data
    countryToSearch.addIndex(['node', 'region']); // sets the index attribute for the data
    countryToSearch.addDocuments(countries);

    this.setState({ search: countryToSearch });
  }

  searchCountry = (selectedCountry) => {
    const { search } = this.state;
    const queryResult = search.search(selectedCountry);
    this.setState({ resultCountries: queryResult });
  }

  emptySearch = () => {
    this.listAllCountires();
  }

  handleSelectRegion = (event) => {
    const selectedRegion = event.target.value;
    this.setState({ filterRegion: selectedRegion });
    if (selectedRegion !== '') {
      const { search } = this.state;
      const queryResult = search.search(selectedRegion);
      this.setState({ resultCountries: queryResult });
    } else {
      this.listAllCountires();
    }
  };

  listAllCountires() {
    this.setState({
      countries: this.props.allCountries,
      resultCountries: this.props.allCountries
    });
  }

  clickCard(countryCode) {
    navigate(`/country/${countryCode}`);
  }

  render() {
    const { countries, resultCountries } = this.state;
    return (
      <div className="mainContent">
        <div className="mainContent__searchBar">
          <SearchBox
            countries={countries}
            searchCountry={this.searchCountry}
            emptySearch={this.emptySearch}
          />
          <SelectFilter
            filterRegion={this.state.filterRegion}
            handleSelectRegion={this.handleSelectRegion}
          />
        </div>
        <div className="countryCards">
          {resultCountries.map(({ node }) => (
            <CountryCard
              key={node.alpha2Code}
              countryCode={node.alpha2Code}
              image={node.flag}
              countryName={node.name}
              population={node.population}
              regin={node.region}
              capital={node.capital}
              toDetail={this.clickCard}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allCountries {
          edges {
            node {
              id
              name
              alpha2Code
              region
              borders
              population
              flag
              capital
              borders
            }
          }
        }
      }
    `}
    render={data => (
      <MainContent allCountries={data.allCountries.edges} />
    )}
  />
);
