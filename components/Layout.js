import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>BitzPrice</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
    </Head>
    <div className="container">
      <Navbar />
    </div>
    {props.children}
  </div>
);

export default Layout;