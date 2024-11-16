import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();

  const news = data.data[0];
  console.log(news);

  const { title, image_url, details } = news;

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto mt-[30px] grid grid-cols-12 gap-6">
        <section className="col-span-9">
          <h2 className="text-[20px] font-semibold">Dragon News</h2>
          <div className="card bg-white shadow-xl mt-5 p-10 border rounded-lg overflow-hidden">
            <figure>
              <img
                src={image_url}
                alt="News"
                className="w-full h-[600px] bg-center"
              />
            </figure>
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-bold text-gray-800">
                {title}
              </h2>
              <p className="text-gray-700 mt-2">
                {details}
              </p>
              <div className="flex justify-between items-center mt-4">
                <Link to = {`/category/${news.category_id}`} className="btn btn-outline btn-error flex items-center gap-2">
                  <FaArrowLeft />
                  All news in this category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
