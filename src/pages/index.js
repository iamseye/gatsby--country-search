import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import CountryCard from '../components/countryCard';
import '../styles/mainContent.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="mainContent">
      <div className="countryCards">
        <CountryCard
          image="https://restcountries.eu/data/afg.svg"
          countryName="Germeny"
          population="111111"
          regin="Europe"
          capital="Berlin"
        />
        <CountryCard
          image="https://restcountries.eu/data/afg.svg"
          countryName="Germeny"
          population="111111"
          regin="Europe"
          capital="Berlin"
        />
        <CountryCard
          image="https://restcountries.eu/data/afg.svg"
          countryName="Germeny"
          population="111111"
          regin="Europe"
          capital="Berlin"
        />
        <CountryCard
          image="https://restcountries.eu/data/afg.svg"
          countryName="Germeny"
          population="111111"
          regin="Europe"
          capital="Berlin"
        />
        <CountryCard
          image="https://restcountries.eu/data/afg.svg"
          countryName="Germeny"
          population="111111"
          regin="Europe"
          capital="Berlin"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
