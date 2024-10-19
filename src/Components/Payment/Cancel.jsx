import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Cancel = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="w-[1320px] mx-auto pt-32 py-20">
      <div className="border p-5 w-[450px] mx-auto h-96 rounded-lg shadow-lg">
        <div className="mx-auto w-28 pt-8 h-28">
          <FontAwesomeIcon
            className="h-28 text-red-700 animate-pulse"
            icon={faCircleExclamation}
          />
        </div>
        <div className="pt-16 space-y-4 text-center">
          <h1 className=" text-sm">ohh! {currentUser?.displayName}</h1>
          <p className="  text-xl">Payment unsuccessful , Try again</p>
          <Link
            to="/cart"
            className="text-center btn btn-ghost bg-slate-600 text-slate-50 w-28"
          >
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
