import { allBlogs } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../ui/Footer';
import Header from '../ui/Header';
import Layout from '../ui/Layout';
import PostPreview from '../ui/PostPreview';
import RoughNotate from '../ui/RoughNotate';

export default function Home() {
  // filter all blogs to only show the 5 latest posts order by publishedAt
  const fiveLatestPosts = allBlogs
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 5);

  return (
    <Layout>
      <Header />

      <main className='mt-20 flex'>
        <div className='max-w-[70%] flex flex-col gap-2 text-gray-600'>
          <h1 className='font-bold text-3xl max-w-[80%] mb-3 text-black'>
            Hello! I&apos;m Lucas, a{' '}
            <RoughNotate type='highlight' color='lavender'>
              developer
            </RoughNotate>{' '}
            based in Brazil.
          </h1>

          <p>
            I&apos;m a{' '}
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
            are crucial for success. I am always seeking opportunities to learn
            and grow, both personally and professionally, and think that a
            positive and proactive attitude can make a significant impact in
            achieving success.
          </p>

          <p>
            I&apos;m currently looking for a new role as a developer.{' '}
            <RoughNotate type='circle' color='lightblue'>
              <span className='font-semibold'>Hire me?</span>
            </RoughNotate>
          </p>

          <div className='mt-2 flex gap-5'>
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

        <div className='shadow-2xl rotate-3 ml-10 w-full h-full'>
          <Image
            src='/static/images/avatar2.png'
            alt=''
            className='w-full h-full object-cover rounded-md'
            width={500}
            height={500}
          />
        </div>
      </main>

      <section className='mt-20'>
        <div className='flex flex-col'>
          <div className=' flex items-center justify-between'>
            <h2 className='text-2xl font-bold'>Latest posts</h2>
            <Link
              href='/blog'
              className='px-5 py-2 border border-gray-300 rounded-md text-gray-500'
            >
              View all posts
            </Link>
          </div>

          <p className='text-gray-500'>
            Thoughts on what I&apos;m building and learning.
          </p>
        </div>

        <div className='flex flex-col gap-4 mt-4'>
          {fiveLatestPosts.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mt-20 mb-5'>Get in Touch</h2>
        <p className='text-gray-500'>
          Do you have any job opportunities or ideas that you would like to
          discuss? Feel free to contact me through my{' '}
          <Link
            href='https://www.linkedin.com/in/lucas-arieta/'
            target='_blank'
          >
            <span className='font-semibold underline text-gray-600'>
              LinkedIn
            </span>
          </Link>
          .
        </p>
      </section>

      <Footer />
    </Layout>
  );
}
