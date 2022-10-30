import BlogCard from '../cards/BlogCard';

export const Blog = () => {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};
