import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import '../styles/selectFilter.scss';

const SelectFilter = props => (
  <div className="selectFilter">
    <FormControl variant="outlined" className="selectFilter__form">
      <Select
        MenuProps={{
          anchorOrigin: {
            vertical: 50,
            horizontal: 'left'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
          },
          getContentAnchorEl: null,
          classes: { paper: 'selectFilter__menu' },
        }}
        className="selectFilter__select"
        displayEmpty
        name="Filter by Region"
        value={props.filterRegion}
        onChange={props.handleSelectRegion}
        input={(
          <OutlinedInput
            className="selectFilter__input"
            labelWidth="0"
            name="selectFilter"
            id="component-outlined"
          />
        )}
      >
        <MenuItem value="">
          <em>Filter by Region</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </div>
);
export default SelectFilter;
