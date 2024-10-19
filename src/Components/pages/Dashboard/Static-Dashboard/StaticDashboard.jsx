import {
  faBookOpenReader,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import useProduct from "../../../Hooks/useProduct/useProduct";
import useGetUser from "../../../Hooks/useGetUser/useGetUser";
import useGetBlogs from "../../../Hooks/useGetBlogs/useGetBlogs";
import { useSpring, animated } from "@react-spring/web";
import { Chart } from "react-google-charts";
import useReviews from "../../../Hooks/useReviews/useReviews";
import useGetListing from "../../../Hooks/useGetListingData/useGetListing";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const StaticDashboard = () => {
  const [allProduct, isLoading, refetch] = useProduct();
  const [allReviews] = useReviews();
  const [AllListing] = useGetListing();
  const [AllUser] = useGetUser();
  const [AllBlog] = useGetBlogs();
  const Number = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 100,
      config: { mass: 1, tension: 10, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  };

  // most viewing blogs..
  const ColumnChartOne = ({ chartTitle }) => {
    const data = [
      ["Title", "Views", { role: "tooltip", type: "string" }],
      ...AllBlog?.slice(0, 6)?.map((item) => [
        item?.title,
        item?.viewCount,
        "Author: " + item.authorData?.authorName,
      ]),
    ];

    const options = {
      title: chartTitle,
      titleTextStyle: {
        color: "#2596be",
        fontSize: 26,
        bold: true,
      },
      chartArea: { width: "75%" },
      hAxis: {
        title: "Views",
        minValue: 0,
      },
      tooltip: { isHtml: true },
      colors: ["#6779b5"],
    };

    return (
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="450px"
        data={data}
        options={options}
      />
    );
  };

  // most review car..
  const BarChartComponent = () => {
    const mostReviewCar = allReviews?.map((rev) => {
      return AllListing?.find((list) => list?._id === rev?.listId);
    });

    const reviewCount = mostReviewCar?.map((rev) => {
      const count = allReviews?.filter((item) => item?.listId === rev?._id);
      return {
        title: rev?.title,
        condition: rev?.condition,
        countValue: count?.length,
      };
    });

    const chartData = {
      labels: reviewCount?.map(({ title }) => title),
      datasets: [
        {
          label: "Review Count",
          data: reviewCount?.map(({ countValue }) => countValue),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: "#36A2EB",
          borderWidth: 1,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Most Reviewed Cars",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
    return (
      <div className="w-[600px] h-[413px]">
        <Bar data={chartData} options={chartOptions} />
      </div>
    );
  };

  if (isLoading) {
    return <p>loading..</p>;
  }
  return (
    <div>
      <Helmet>
        <title>AutoLux | Dashboard</title>
      </Helmet>
      <div className="font-primary lg:w-[1500px] md:w-[650px] w-[320px] mx-auto border rounded-lg p-4">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
          {/* card */}
          <div className=" bg-gradient-to-tr from-blue-400 to-slate-300 rounded-lg h-52">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faUser}
                className="text-white w-10 h-10 bg-blue-500 rounded-br-lg rounded-tl-lg p-3"
              />
              <p className=" font-semibold text-3xl">Users</p>
            </div>
            <div>
              <h1 className="text-center mt-2 font-extrabold text-6xl font-mono">
                <Number n={AllUser.length} />
              </h1>
              <p className="text-center text-xl text-white">
                Total User active in AutoLux.
              </p>
            </div>
          </div>
          <div className=" bg-gradient-to-tr from-blue-400 to-slate-300 rounded-lg h-52">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faBookOpenReader}
                className="text-white w-10 h-10 bg-blue-500 rounded-br-lg rounded-tl-lg p-3"
              />
              <p className=" font-semibold text-3xl">Blogs</p>
            </div>
            <div>
              <h1 className="text-center mt-2 font-extrabold text-6xl font-mono">
                <Number n={AllBlog?.length} />
              </h1>
              <p className="text-center text-xl text-white">
                Total Blogs in AutoLux.
              </p>
            </div>
          </div>
          <div className=" bg-gradient-to-tr from-blue-400 to-slate-300 rounded-lg h-52">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon
                icon={faStore}
                className="text-white w-10 h-10 bg-blue-500 rounded-br-lg rounded-tl-lg p-3"
              />
              <p className=" font-semibold text-3xl">Products</p>
            </div>
            <div>
              <h1 className="text-center mt-2 font-extrabold text-6xl font-mono">
                <Number n={allProduct?.length} />
              </h1>
              <p className="text-center text-xl text-white">
                Total Product in AutoLux.
              </p>
            </div>
          </div>
          <div className="lg:mt-5 mt-10 lg:col-span-full  lg:flex">
            <BarChartComponent />
            <ColumnChartOne chartTitle="AutoLux most viewing blogs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticDashboard;
