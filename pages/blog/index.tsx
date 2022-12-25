import Header from '@/ui/Header';
import Layout from '@/ui/Layout';
import PostPreview from '@/ui/PostPreview';

import { allBlogs } from 'contentlayer/generated';

export default function Blog() {
  return (
    <Layout>
      <Header />

      <section className='mt-20'>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-bold'>Posts</h2>
          <p className='text-gray-500'>
            Thoughts on what I&apos;m building and learning.
          </p>
        </div>

        <div className='flex flex-col gap-4 mt-4'>
          {allBlogs.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
