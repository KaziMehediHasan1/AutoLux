import React, { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure/UseAxiosSecure";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic/UseAxiosPublic";
import { AuthContext } from "../../../Authentication/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useGetListing from "../../../Hooks/useGetListingData/useGetListing";

const image_hosting_key = import.meta.env.VITE_MEDIA_IMGBB_APIKEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Media = () => {
  const [, , refetch] = useGetListing();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const user = currentUser?.email;
  const [DataIsCreate, setDataIsCreate] = useState(false);
  const [Data, setData] = useState();
  const [addImg, setAddImg] = useState(false);
  const axiosSecure = UseAxiosSecure();
  const axiosPublic = UseAxiosPublic();
  const [files, setFiles] = useState([]);

  // Handle file drop
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

  // Remove a file
  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  // Handle image upload
  const handleSubmit = async (e) => {
    e.preventDefault();
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
          const imgURL = res?.data?.data?.display_url;
          localStorage.setItem("car-image", JSON.stringify(imgURL));
          localStorage.setItem("car-owner", JSON.stringify(user));
          setAddImg(res?.data?.success);
        }

        // Retrieve car details and feature data from localStorage
        const details = JSON.parse(localStorage.getItem("car-detail"));
        const feature = JSON.parse(localStorage.getItem("car-feature"));
        const img = JSON.parse(localStorage.getItem("car-image"));
        const owner = JSON.parse(localStorage.getItem("car-owner"));

        // Check if the data is correctly set
        console.log({ details, feature, img, owner });

        // Combine all data for the car listing
        const data = {
          ...details,
          carFeature: feature,
          carImage: img,
          user: owner,
        };
        setData(data);
        return res.data;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    });

    // Wait for all uploads to finish
    await Promise.all(promises);
  };

  // Post data to server and clear localStorage
  const handlePost = async () => {
    try {
      const res = await axiosSecure.post("/listingDetail", Data);

      if (res?.data) {
        // Remove items after successful post
        localStorage.removeItem("car-detail");
        localStorage.removeItem("car-feature");
        localStorage.removeItem("car-image");
        localStorage.removeItem("car-owner");

        toast.success("Post Your Car Data..");

        // Delay navigation to ensure removal happens first
        setTimeout(() => {
          navigate("/dashboard/my-listing");
        }, 1000);

        setDataIsCreate(res?.data);
      }
    } catch (err) {
      toast.error("Data not available..");
      console.log({ message: err.message });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-9 py-5 text-2xl text-gray-600 font-primary"
    >
      <h1>Gallery</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-0 mt-3">
        {files.map((file) => (
          <span key={file.preview}>
            <img
              src={file.preview}
              onLoad={() => URL.revokeObjectURL(file.preview)}
              className="md:w-72 md:h-44 w-44 h-20 rounded-lg border border-gray-300 shadow-lg "
            />
            <button
              type="button"
              className="mt-3 md:text-[12px] text-[8px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md md:px-3 px-2 hover:bg-secondary-400 hover:text-white transition-colors"
              onClick={() => removeFile(file.name)}
            >
              remove
            </button>
          </span>
        ))}
      </div>

      <div {...getRootProps()} className="flex items-center justify-center my-10 w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              {isDragActive && <span className="text-2xl">Drop the image</span>}
              <span className={`${!isDragActive ? "md:font-semibold" : "hidden"}`}>
                Click to upload or drag and drop
              </span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-start">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input {...getInputProps()} id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <p className={`${addImg ? "text-center font-semibold text-red-950 mb-5" : "hidden"}`}>
        Now Add your car! 😊
      </p>

      {/* Submit Data */}
      <div className="flex justify-center space-x-6">
        {!addImg ? (
          <button className="bg-blue-600 px-4 text-white rounded-lg md:px-8 py-2 text-xs md:text-[16px] btn">
            Add Images
          </button>
        ) : (
          <button
            onClick={handlePost}
            className="bg-green-500 px-6 text-white rounded-lg py-1 md:px-8 text-xs md:text-[16px] btn w-full"
          >
            Add Listing
          </button>
        )}
      </div>
    </form>
  );
};

export default Media;
