import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { withStyles } from '@material-ui/core/styles';
import '../styles/selectFilter.scss';


const SelectFilter = props => (
  <div className="selectFilter">
    <FormControl variant="outlined" className="selectFilter__form" fullWidth="true">
      <Select
        MenuProps={{
          anchorOrigin: {
            vertical: 50,
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
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
        <MenuItem value="africa">Africa</MenuItem>
        <MenuItem value="americas">Americas</MenuItem>
        <MenuItem value="asia">Asia</MenuItem>
        <MenuItem value="europe">Europe</MenuItem>
        <MenuItem value="oceania">Oceania</MenuItem>

      </Select>
    </FormControl>
  </div>
);

export default SelectFilter;
