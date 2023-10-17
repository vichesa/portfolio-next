const PostList = ({ posts }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Fungsi untuk mengonversi format tanggal
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[month]} ${day}, ${year}`;
  }

  return (
    <div className="w-full h-[400px] border rounded-lg overflow-auto">
      <ul>
        {posts.map((post) => (
          <li
            className="p-4 border-b last:border-b-0 bg-gray-200"
            key={post.id}
          >
            <h1 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h1>
            <p className="text-gray-600">{post.description}</p>
            <p className="text-sm text-right text-gray-400">
              {formatDate(post.createdAt)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
