import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import DetailContent from '../components/detailContent';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Detail" keywords={[`gatsby`, `application`, `react`]} />
    <DetailContent />
  </Layout>
);

export default IndexPage;
