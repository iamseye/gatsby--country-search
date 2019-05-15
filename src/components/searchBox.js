import React from 'react';
import Downshift from 'downshift';
import deburr from 'lodash/deburr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import '../styles/searchBox.scss';

function getSuggestions(countries, value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : countries.filter((country) => {
      const keep =
        count < 5 && country.name.slice(0, inputLength).toLowerCase() === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
}

const SearchBox = props => (
  <div className="searchBox">
    <Downshift
      onChange={selection => props.searchCountry(selection.alpha2Code)}
      itemToString={item => (item ? item.name : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <Paper className="searchBox__input">
            <FontAwesomeIcon icon={faSearch} />
            <InputBase
              placeholder="Search for a country..."
              {...getInputProps({
                onChange: (e) => {
                  if (e.target.value === '') {
                    props.emptySearch();
                  }
                }
              })}
            />
          </Paper>
          <div {...getMenuProps()}>
            {isOpen
              ? (
                <Paper className="searchBox__selection" square>
                  {getSuggestions(props.countries, inputValue)
                    .map((item, index) => (
                      <MenuItem
                        {...getItemProps({
                          key: item.alpha2Code,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index ? 'lightgray' : 'white',
                            fontWeight: selectedItem === item ? 'bold' : 'normal',
                          },
                        })}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                </Paper>
              )
              : null}
          </div>

        </div>
      )}
    </Downshift>
  </div>
);

export default SearchBox;
