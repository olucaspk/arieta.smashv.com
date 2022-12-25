import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function PostPreview({ post }: { post: any }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className='flex justify-between bg-gray-100 rounded-md shadow-sm py-5 hover:cursor-pointer hover:bg-gray-200 transition-all ease-in-out duration-300'
    >
      <h1 className='ml-4 text-gray-600'>{post.title}</h1>
      <p className='mr-4 text-gray-500'>
        {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
      </p>
    </Link>
  );
}
