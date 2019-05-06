import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import '../styles/card.scss';

const CountryCard = props => (
  <Card
    className="country-card"
  >
    <CardMedia
      className="country-card__image"
      image={props.image}
    />
    <CardContent
      className="country-card__content"
    >
      <p>{props.countryName}</p>
      <ul>
        <li>Population: {props.populiation}</li>
        <li>Regin: {props.regin}</li>
        <li>Capital: {props.capital}</li>
      </ul>
    </CardContent>
  </Card>
);

export default CountryCard;
