import React from 'react';
import { Link } from 'gatsby';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DetailContent from '../components/detailContent';
import '../styles/detail.scss';

const DetailPage = ({ pageContext }) => (
  <Layout>
    <SEO title="Detail" keywords={[`gatsby`, `application`, `react`]} />
    <div className="detailPage">
      <div style={{
        marginLeft: '3rem',
        marginBottom: '4rem'
      }}
      >
        <Link
          to="/"
          className="link-btn"
          style={{ marginTop: '4rem' }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Link>
      </div>
      <DetailContent data={pageContext.data} />
    </div>
  </Layout>
);

export default DetailPage;
