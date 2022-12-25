import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../ui/Header';
import Layout from '../ui/Layout';
import RoughNotate from '../ui/RoughNotate';

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

        <main className='mt-20 flex'>
          <div className='max-w-[70%] flex flex-col gap-2 text-gray-600'>
            <h1 className='font-bold text-3xl max-w-[80%] mb-3 text-black'>
              Hello! I'm Lucas, a{' '}
              <RoughNotate type='highlight' color='lavender'>
                developer
              </RoughNotate>{' '}
              based in Brazil.
            </h1>

            <p>
              I'm a{' '}
              <RoughNotate type='highlight' color='lightpink'>
                full-stack web developer
              </RoughNotate>{' '}
              currently studing in technical high school program at Senac RS.
            </p>

            <p>
              I have a passion for{' '}
              <RoughNotate type='highlight' color='lemonchiffon'>
                creating practical, minimalistic
              </RoughNotate>{' '}
              and{' '}
              <RoughNotate type='highlight' color='lavender'>
                useful applications
              </RoughNotate>{' '}
              for people to use. Whether it be a straightforward website or a
              complex web application, I take pleasure in the challenge of
              bringing ideas to fruition through coding.
            </p>

            <p>
              In addition to constantly improving my technical abilities, I am
              also committed to enhancing my soft skills and believe that
              qualities such as{' '}
              <RoughNotate type='highlight' color='lightpink'>
                adaptability, clear communication
              </RoughNotate>{' '}
              and{' '}
              <RoughNotate type='highlight' color='lightskyblue'>
                teamwork
              </RoughNotate>{' '}
              are crucial for success. I am always seeking opportunities to
              learn and grow, both personally and professionally, and think that
              a positive and proactive attitude can make a significant impact in
              achieving success.
            </p>

            <p>
              I'm currently looking for a new role as a developer?{' '}
              <RoughNotate type='circle' color='lightblue'>
                <span className='font-semibold'>Hire me?</span>
              </RoughNotate>
            </p>

            <div className='mt-2 flex gap-5' id='contacts'>
              <Link
                href='https://www.linkedin.com/in/lucas-arieta/'
                target='_blank'
                className='bg-black text-white px-8 py-3 rounded-md'
              >
                View LinkedIn
              </Link>
              <Link
                href='https://github.com/olucaspk'
                target='_blank'
                className='px-8 py-3 border border-gray-300 rounded-md text-gray-600'
              >
                View GitHub
              </Link>
            </div>
          </div>

          <div className='shadow-lg rotate-3 ml-10 w-full h-full'>
            <Image
              src='https://github.com/olucaspk.png'
              alt=''
              className='w-full h-full object-cover rounded-md'
              width={500}
              height={500}
            />
          </div>
        </main>
      </Layout>
    </>
  );
}
