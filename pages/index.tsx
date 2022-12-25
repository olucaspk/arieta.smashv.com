import Head from 'next/head';
import Header from '../ui/Header';
import Layout from '../ui/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Arieta</title>
        <meta name='description' content='My personal website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Header />
      </Layout>
    </>
  );
}
