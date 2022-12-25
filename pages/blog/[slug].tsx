import BlogPostComponent from '@/ui/BlogPost';
import { MDXComponents } from '@/ui/MDXComponents';
import type { Blog } from 'contentlayer/generated';
import { allBlogs } from 'contentlayer/generated';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { ParsedUrlQuery } from 'querystring';

interface IProps {
  post: Blog;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function BlogPost({ post }: IProps) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogPostComponent data={post}>
      <Component components={{ ...MDXComponents }} />
    </BlogPostComponent>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allBlogs.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IProps, IParams> = async ({
  params,
}) => {
  const post = allBlogs.find((post) => post.slug === params?.slug);

  if (post) {
    return { props: { post } };
  }

  return { notFound: true };
};
