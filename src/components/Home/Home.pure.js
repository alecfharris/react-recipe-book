import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Logo from '../../shared_components/Logo/Logo';
import Button from '../../shared_components/Button/Button';

const Home = () => (
  <Layout>
    <Logo />
    <Link style={{ textDecoration: 'none' }} to="login">
      <Button text="Log In" />
    </Link>
  </Layout>
);

export default Home;
