import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";
// img hosting and dropzone..
import { useDropzone } from "react-dropzone";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic/UseAxiosPublic";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure/UseAxiosSecure";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const image_hosting_key = import.meta.env.VITE_MEDIA_IMGBB_APIKEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddBlog = () => {
  // user name, email, photo, blog => title, image, car/bikes description, comment section, view counting, etc..
  const { loading, currentUser } = useContext(AuthContext);
  const email = currentUser?.email;
  const name = currentUser?.displayName;
  const photo = currentUser?.photoURL;
  const authorData = {
    authorMail: email,
    authorName: name,
    authorPhoto: photo,
  };
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  // dropzone section ..
  const [AllData, setAllData] = useState();
  const [Data, setData] = useState();
  const [success, setSuccess] = useState(false);
  const [addImg, setAddImg] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  // remove files
  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  // get files and uploaded to the imgBB
  const handleSubmit = async (e) => {
    console.log("handleSubmit");
    // setAddImg(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const data = {
      title: title,
      description: description,
      authorData: authorData,
    };
    let img = [];
    const promises = files.map(async (file) => {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await axiosPublic.post(image_hosting_api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (res?.data?.success) {
          img.push(res?.data);
          localStorage.setItem("blog-img", JSON.stringify(img));
          localStorage.setItem("blog-data", JSON.stringify(data));
          setAddImg(true);
        }
        return res.data;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    });

    // Wait for all uploads to finish
    await Promise.all(promises);
    toast.success("blog data add, please check and post!");
  };

  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem("blog-data"));
    const images = JSON.parse(localStorage.getItem("blog-img"));
    // console.log(allData, images, "91");
    if (allData && images) {
      const filterURL = images?.map((item) => item.data?.display_url);
      const blogData = {
        ...allData,
        images: filterURL,
      };
      setData(blogData);
    }
  }, [addImg]);
  console.log(Data);

  const handlePost = async () => {
    console.log("handlePost");
    try {
      const res = await axiosSecure.post("/blogs", Data);
      if (res?.data) {
        toast.success("Blog successfully created");
        navigate("/dashboard/all-blogs");
      } else {
        toast.error("Failed to create the blog.");
      }
    } catch (error) {
      toast.error("Error creating blog.");
      console.log("Error:", error.message);
    }
  };

  // loading spinner
  if (loading) {
    <p>loading..</p>;
  }
  return (
    <div className="font-primary lg:w-[1500px] md:w-[650px] w-[320px] mx-auto">
      <section>
        <h1 className="md:text-4xl text-2xl font-semibold">Add Blogs</h1>
        <p className="text-gray-600 text-sm md:text-xl">
          Add your blogs and selling fast!
        </p>
      </section>
      <form
        onSubmit={handleSubmit}
        className="border border-gray-300 rounded-xl mt-5 py-5"
      >
        <div className="px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-3">
            {/* file add */}
            {files.map((file) => (
              <span key={file.preview}>
                <img
                  src={file.preview}
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                  className="w-72 h-44 rounded-lg border border-gray-300 shadow-lg "
                ></img>
                {/* button */}
                <button
                  type="button"
                  className="mt-3 text-[12px]  uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors"
                  onClick={() => removeFile(file.name)}
                >
                  remove
                </button>
              </span>
            ))}
          </div>
          {/* drag and drop */}
          <div
            {...getRootProps()}
            className="flex items-center justify-center my-10 w-full"
          >
            <label
              for="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className={`${
                    isDragActive
                      ? "w-14 h-8 mb-4 text-gray-500 dark:text-gray-400 animate-bounce"
                      : "w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {isDragActive && <p className="text-2xl">Drop the image</p>}

                  <span
                    className={`${!isDragActive ? "font-semibold" : "hidden"}`}
                  >
                    Click to upload or drag and drop
                  </span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                {...getInputProps()}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
          </div>
          {/* input field */}
          <div className="grid grid-cols-4 gap-x-5 mb-5">
            <div className="col-span-2">
              <label
                for="email"
                class="block text-sm text-gray-500 dark:text-gray-300"
              >
                Blog Title
              </label>

              <input
                type="text"
                placeholder="blog title"
                name="title"
                class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </div>
            <div className="col-span-2">
              <label
                for="description"
                class="block text-sm text-gray-500 dark:text-gray-300"
              >
                Description
              </label>

              <input
                type="text"
                name="description"
                placeholder="blog description"
                class="mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </div>
          </div>
          {/* submit data */}
          <div className="flex justify-center space-x-6">
            {addImg ? (
              <button
                onClick={handlePost}
                className="bg-green-600 px-6 text-white rounded-lg py-1 btn"
              >
                Post
              </button>
            ) : (
              <button
                type="submit"
                className="bg-blue-600 px-6 text-white rounded-lg py-1 btn"
                disabled={loadingBtn} // Disable button while loading
              >
                {loadingBtn ? (
                  <ClipLoader color="#fff" size={20} /> // Display spinner when loading
                ) : (
                  "Add Blog info" // Display text when not loading
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
