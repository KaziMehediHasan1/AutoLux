import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import UseAxiosSecure from "../../../Hooks/useAxiosSecure/UseAxiosSecure";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic/UseAxiosPublic";
const image_hosting_key = import.meta.env.VITE_MEDIA_IMGBB_APIKEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Media = () => {
  const [Data, setData] = useState();
  const [carDetails, setCarDetails] = useState();
  const [carFeature, setCarFeature] = useState();
  const [carImage, setCarImage] = useState();
  const [addImg, setAddImg] = useState();
  const axiosSecure = UseAxiosSecure();
  const axiosPublic = UseAxiosPublic();
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
          // console.log(imgURL);

          localStorage.setItem("car-image", imgURL);
          setAddImg(res?.data?.success);
          // show modal..
        }
        return res.data;
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    });

    // Wait for all uploads to finish
    const uploadedImages = await Promise.all(promises);
    console.log("All images uploaded:", uploadedImages);
  };
  // get car details from localStorage..
  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("car-detail"));
    setCarDetails(details);
    const feature = JSON.parse(localStorage.getItem("car-feature"));
    setCarFeature(feature);
    const img = localStorage.getItem("car-image");
    setCarImage(img);
    const data = {
      ...details,
      carFeature: feature,
      carImage: img,
    };
    // console.log(data, "72");
    setData(data);
  }, []);
  const handlePost = async() => {
    await axiosSecure
      .post("/listingDetail", Data)
      .then((res) => {
        localStorage.removeItem("car-detail");
        localStorage.removeItem("car-feature");
        localStorage.removeItem("car-image");
        if (res?.data) {
          toast.success("Post Your Car Data..");
          // navigate my listing route(dashboard-my listing)
        }
        console.log(res.data);
      })
      .catch((err) => {
        toast.error("Not Available data..");
        console.log({ message: err.message });
      });
  };

  console.log(carFeature);
  // const me = carFeature.map(fea=> fea[0])
  return (
    <form
      onSubmit={handleSubmit}
      className="px-9 py-5 text-2xl text-gray-600 font-primary"
    >
      <h1>Gallery</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-3">
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
        class="flex items-center justify-center my-10 w-full"
      >
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class={`${
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
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              {isDragActive && <p className="text-2xl">Drop the image</p>}

              <span className={`${!isDragActive ? "font-semibold" : "hidden"}`}>
                Click to upload or drag and drop
              </span>
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            {...getInputProps()}
            id="dropzone-file"
            type="file"
            class="hidden"
          />
        </label>
      </div>

      <p
        className={`${
          addImg
            ? "text-center font-semibold text-red-950 mb-5"
            : "hidden text-center mb-5"
        }`}
      >
        Show your adding car data and submit car identity , click Car Data !
      </p>

      {/* submit data */}
      <div className="flex justify-center space-x-6">
        <button className="bg-blue-600 px-6 text-white rounded-lg py-1 btn">
          Add image
        </button>
        <div>
          <button
            className="bg-blue-600 px-6 text-white rounded-lg py-1 btn"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Car Data
          </button>

          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-full h-full">
              <div>
                <h3 className="font-bold text-2xl">
                  Submit your car-details, features, media etc..
                </h3>

                <div className="grid grid-cols-2">
                  <div>
                    <img
                      className="w-80 mt-2 rounded-md grid grid-flow-col"
                      src={carImage}
                      alt=""
                    />

                    <div className="py-3">
                      <h1 className="bg-blue-600 inline-block text-white rounded px-3">
                        Car Details
                      </h1>
                      <label className="flex space-x-2">
                        <span>Title:</span> <p>{carDetails?.title}</p>
                      </label>
                      <label className="flex space-x-2">
                        <span>Category:</span> <p>{carDetails?.category}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>Condition :</span> <p>{carDetails?.condition}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>Type :</span> <p>{carDetails?.type}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>Make :</span> <p>{carDetails?.make}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>Model :</span> <p>{carDetails?.model}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>Year :</span> <p>{carDetails?.year}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>Offer :</span> <p>{carDetails?.offer}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>Drive Type :</span> <p>{carDetails?.drive}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>Transmission :</span>{" "}
                        <p>{carDetails?.transmission}</p>
                      </label>

                      <label className=" flex space-x-2">
                        <span>Fuel :</span> <p>{carDetails?.fuel}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>Mileage:</span> <p>{carDetails?.mileage}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>Engine Size:</span> <p>{carDetails?.engine}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>Cylinder:</span> <p>{carDetails?.cylinder}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>Color:</span> <p>{carDetails?.color}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>Door:</span> <p>{carDetails?.door}</p>
                      </label>
                      <label className=" flex space-x-2">
                        <span>VIN:</span> <p>{carDetails?.vin}</p>
                      </label>
                    </div>
                  </div>
                  <div>
                    <h1 className="bg-blue-600 inline-block text-white rounded px-3">
                      Features
                    </h1>
                    {carFeature?.map((item, index) => (
                      <p>
                        {index + 1}. {item}
                      </p>
                    ))}
                  </div>
                  <p>{carDetails?.description}</p>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog" className="flex space-x-3">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>

                  <button onClick={handlePost} className="btn btn-primary ">
                    Post
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </form>
  );
};

export default Media;
