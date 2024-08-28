import car1 from "../../../assets/car13-660x440.jpg.png";
const Blog = () => {
  return (
    <div className="max-w-[1320px] mx-auto mt-14">
      <h1>Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-[440px] h-[410px]">
          <img src={car1} alt="blog" className="w-[440px] h-[280px]" />
          <div className="flex space-x-3">
            <p>Admin</p>
            <p>November 20,2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
