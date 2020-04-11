import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/home/Layout';
import Banner from '../components/home/Banner';

const Index: NextPage = () => {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
};

Index.getInitialProps = ({}) => ({});

export default Index;
