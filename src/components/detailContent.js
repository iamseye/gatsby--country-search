import React from 'react';
import { StaticQuery, Link } from 'gatsby';
import '../styles/detail.scss';

const DetailContent = ({ data }) => (
  <div className="detail">
    <div className="detail__left">
      <img src={data.flag} alt="flag" />
    </div>
    <div className="detail__right">
      <h1 className="detail__title">{data.name}</h1>
      <div className="detail__info">
        <div className="detail__info--left">
          <ul>
            <li>
              <p className="detail__info-text">Native Name: </p>
              {data.nativeName}
            </li>
            <li>
              <p className="detail__info-text">Population: </p>
              {data.population}
            </li>
            <li>
              <p className="detail__info-text">Region: </p>
              {data.region}
            </li>
            <li>
              <p className="detail__info-text">Sub Region: </p>
              {data.subregion}
            </li>
            <li>
              <p className="detail__info-text">Capital: </p>
              {data.capital}
            </li>
          </ul>
        </div>

        <div className="detail__info--right">
          <ul>
            <li>
              <p className="detail__info-text">Top Level Domain: </p>
              {data.topLevelDomain}
            </li>
            <li>
              <p className="detail__info-text">Currencies: </p>
              {data.currencies.map((currency, index) => (
                index === 0 ? currency.name : `,${currency.name}`
              ))}
            </li>
            <li>
              <p className="detail__info-text">Languages: </p>
              {data.languages.map((lang, index) => (
                index === 0 ? lang.name : `, ${lang.name}`
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="detail__borders">
        <p className="detail__info-text">Border Countries:</p>
        <div className="detail__info-borders">
          {data.borders.map(country => (
            <Link
              to="/detail/"
              className="link-btn"
            >
              {country}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default DetailContent;
