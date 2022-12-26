import Head from 'next/head';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
}

export default function Layout({ children, ...customMeta }: LayoutProps) {
  const router = useRouter();

  const meta = {
    title: 'Lucas Arieta',
    description: 'Software developer',
    image: 'http://arieta.smashv.com/images/banner.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://arieta.smashv.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://arieta.smashv.com${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Lucas Arieta' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@olucaspk' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>

      <div className='mx-auto my-6 max-w-screen-lg px-4'>{children}</div>
    </>
  );
}
