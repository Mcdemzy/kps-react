const BlogAndAnnouncements = () => {
  const blogs = [
    {
      id: 1,
      title: "At Seed of Life College (Schools), Every Child is Teachable",
      image: "/images/gallery3.jpg",
      description: "Blog",
    },
    {
      id: 2,
      title:
        "Understanding Quality Education Before Registering Your Child in Primary School",
      image: "/images/gallery7.jpg",
      description: "Blog",
    },
    {
      id: 3,
      title: "Why Bargaining for Cheapest Secondary School in Ibadan is Risky",
      image: "/images/gallery4.jpg",
      description: "Blog",
    },
  ];

  return (
    <section className="bg-white py-12 px-6 lg:px-24">
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Blog & Announcements
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white text-center">
              <p className="text-sm uppercase font-semibold mb-2">
                {blog.description}
              </p>
              <h2 className="text-lg font-bold">{blog.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="bg-yellow-400 text-white py-2 px-6 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300">
          View All Posts
        </button>
      </div>
    </section>
  );
};

export default BlogAndAnnouncements;
