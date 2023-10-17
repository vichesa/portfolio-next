import AddPost from "../components/AddPost";
import PostList from "../components/PostList";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Crud = async () => {
  const posts = await getData();
  posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section>
      {/* <div className='my-5 flex flex-col gap-4'> */}
      {/* <h1 className='text-3xl font-bold'>Todo List App</h1> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div>
          <h1 className="text-4xl font-bold text-center lg:text-left">
            Guest Book
          </h1>
          <div className="my-10">
            <AddPost />
          </div>
        </div>
        <div className="lg:ml-10 mt-6">
          <PostList posts={posts} />
        </div>
      </div>
    </section>
  );
};

export default Crud;
