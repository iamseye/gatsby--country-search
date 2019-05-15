import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { withStyles } from '@material-ui/core/styles';
import '../styles/selectFilter.scss';

const styles = theme => ({
  dropdownStyle: {
    backgroundColor: 'var(--bg)',
    color: 'var(--textColor)',
  },
  menuStyle: {
    color: 'var(--textColor)',
  },
  iconStyle: {
    color: 'var(--textColor)',
  },
});

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
          classes: {
            paper: props.classes.dropdownStyle,
          },
        }}
        classes={{
          icon: props.classes.iconStyle,
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
        <MenuItem className={props.classes.menuStyle} value="">
          <em>Filter by Region</em>
        </MenuItem>
        <MenuItem className={props.classes.menuStyle} value="africa">Africa</MenuItem>
        <MenuItem className={props.classes.menuStyle} value="americas">Americas</MenuItem>
        <MenuItem className={props.classes.menuStyle} value="asia">Asia</MenuItem>
        <MenuItem className={props.classes.menuStyle} value="europe">Europe</MenuItem>
        <MenuItem className={props.classes.menuStyle} value="oceania">Oceania</MenuItem>

      </Select>
    </FormControl>
  </div>
);

export default withStyles(styles)(SelectFilter);
