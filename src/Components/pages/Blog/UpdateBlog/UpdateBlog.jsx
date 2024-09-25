import { useCallback, useContext, useEffect, useState } from "react";
// img hosting and dropzone..
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic/UseAxiosPublic";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure/UseAxiosSecure";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
const image_hosting_key = import.meta.env.VITE_MEDIA_IMGBB_APIKEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateBlog = () => {
  // user name, email, photo, blog => title, image, car/bikes description, comment section, view counting, etc..
  const { id } = useParams();
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
  const [img, setImg] = useState();
  const [Data, setData] = useState();
  const [addImg, setAddImg] = useState();
  const [files, setFiles] = useState([]);
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
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const data = {
      title: title,
      description: description,
      authorData: authorData,
    };
    // console.log(data, "56 no line ");
    let img = [];
    const promises = files.map(async (file) => {
      const formData = new FormData();
      formData.append("image", file);
      // console.log(formData, "form data line 60");
      try {
        const res = await axiosPublic.post(image_hosting_api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (res?.data?.success) {
          // const imgURL = res?.data;
          img.push(res?.data);
          localStorage.setItem("update-img", JSON.stringify(img));
          localStorage.setItem("update-blog", JSON.stringify(data));
          setAddImg(res?.data?.success);
          // show modal..
        }
        return res.data;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    });

    // Wait for all uploads to finish
    await Promise.all(promises);
    toast.success("updating data add, please check and update!");
    // console.log("All images uploaded:", uploadedImages);
  };
  // post db ..
  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem("update-blog"));
    // console.log(allData, "89 no line");
    setAllData(allData);
    const images = JSON.parse(localStorage.getItem("update-img"));
    const filterURL = images?.map((item) => item.data?.display_url);
    setImg(filterURL);
    const blogData = {
      ...allData,
      images: filterURL,
    };
    setData(blogData);
    // console.log("Updating blog with data:", Data);
  }, []);
  // console.log(Data, "98 line post db");
  const handlePost = async () => {
    await axiosSecure
      .put(`/blogs/${id}`, Data)
      .then((res) => {
        console.log(res.data); // Check response data
        if (res?.data.modifiedCount > 0) {
          toast.success("Blog successfully updated");
          localStorage.removeItem("update-img");
          localStorage.removeItem("update-blog");
          // navigate("/dashboard/all-blogs");
        } else {
          toast.error("Blog was not updated");
        }
      })
      .catch((err) => {
        toast.error("Not update data..");
        console.log({ message: err.message });
      });
  };

  // loading spin
  if (loading) {
    <p>loading..</p>;
  }
  return (
    <div className="font-primary w-[1500px] mx-auto mt-20 mb-10">
      <Helmet>
        <title>AutoLux | Updated Blog Page</title>
      </Helmet>
      <section className="text-center">
        <h1 className="text-4xl font-semibold">Update your blog</h1>
        <p>update your blogs fast!</p>
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
            <button
              type="submit"
              className="bg-blue-600 px-6 text-white rounded-lg py-1 btn"
            >
              Update Blog info
            </button>
            <div>
              <button
                className="bg-blue-600 px-7 text-white rounded-lg py-1 btn"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                Show Blog
              </button>
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-full h-full">
                  <div>
                    <h3 className="font-bold text-2xl">Submit your blog</h3>

                    <div className="grid grid-cols-2">
                      <div>
                        <div className="py-3">
                          <label className="flex space-x-2">
                            <span>Title:</span> <p>{AllData?.title}</p>
                          </label>
                          <label className="flex space-x-2">
                            <span>Description:</span>{" "}
                            <p>{AllData?.description}</p>
                          </label>
                          <label className="flex space-x-2">
                            <span>images:</span>{" "}
                            {img?.map((item, index) => (
                              <img src={item} className="w-44 h-64 rounded" />
                            ))}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-action">
                    <form method="dialog" className="flex space-x-3">
                      {/* if there is a button, it will close the modal */}
                      <button className="btn">Close</button>
                      <button onClick={handlePost} className="btn btn-primary">
                        Update
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;
