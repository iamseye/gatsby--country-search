import React from 'react';
import Downshift from 'downshift';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import '../styles/searchBox.scss';

const SearchBox = props => (
  <div>
      <Downshift
        onChange={selection => alert(`You selected ${selection.name}`)}
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
          <div className="searchBox">
            <Paper>
              <FontAwesomeIcon icon={faSearch} />
              <InputBase {...getInputProps()} />
            </Paper>
            <div {...getMenuProps()}>
              {isOpen
                ? (
                  <Paper className="searchBox__selection" square>
                    {props.countries
                      .filter(item => !inputValue || item.name.includes(inputValue))
                      .map((item, index) => (
                        <MenuItem
                          {...getItemProps({
                            key: item.name,
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
