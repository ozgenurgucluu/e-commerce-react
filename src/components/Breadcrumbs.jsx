import React from "react";
import { Link } from "react-router-dom";
import NextIcon from "../icons/NextIcon";

const Breadcrumbs = ({ steps }) => {
  return (
    <div className="flex gap-1 py-4 ">
      <Link className="flex items-center hover:underline " to={"/"}>
        Anasayfa
      </Link>
      {steps.map((step) => (
        <Link className="flex items-center gap-1 hover:underline" to={step.to}>
          <span className="text-orange-600 flex">
            <NextIcon width={14} height={14} />
          </span>
          {step.title}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
