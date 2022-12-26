import type { Blog } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import Layout from './Layout';

interface Props {
  data: Blog;
  children: React.ReactNode;
}

export default function BlogPostComponent({ children, data }: Props) {
  return (
    <Layout
      title={`${data.title} - Lucas Arieta`}
      description={data.summary}
      image={`https://arieta.smashv.com${data.image}`}
      date={new Date(data.publishedAt).toISOString()}
      type='article'
    >
      <header>
        <Link href='/blog'>← Back to blog</Link>
      </header>

      <article className='flex flex-col justify-start items-start'>
        <header className='mt-10 w-full'>
          <h1 className='text-5xl font-bold tet-black tracking-tight'>
            {data.title}
          </h1>

          <div className='flex justify-between items-center mt-5'>
            <div className='flex items-center'>
              <div className='w-8 h-8 mr-2 relative'>
                <Image
                  alt='Lucas Arieta'
                  src='/static/images/io.jpeg'
                  className='rounded-full'
                  width={100}
                  height={100}
                />
              </div>
              <p>Lucas Arieta</p>
            </div>
            <p>{format(parseISO(data.publishedAt), 'MMMM dd, yyyy')}</p>
          </div>
        </header>

        <section className='mt-10 prose-lg w-full'>{children}</section>
      </article>
    </Layout>
  );
}
