import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ pageContext }) => (
  <Layout>
    <SEO title="Detail" keywords={[`gatsby`, `application`, `react`]} />
    {pageContext.id}
    <div>{ pageContext.data.name }</div>
  </Layout>
);

export default IndexPage;
