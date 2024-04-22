import React from "react";
import { Link } from "react-router-dom";
import NextIcon from "../icons/NextIcon";

const Breadcrumbs = ({ steps }) => {
  return (
    <div className="flex gap-2 py-5 ">
      <Link className="flex hover:underline " to={"/"}>
        Anasayfa
      </Link>

      {steps.map((step, index) => (
        <Link
          key={index}
          className="flex items-center hover:underline gap-2 "
          to={step.to}
        >
          <span className="text-orange-600 flex mx-auto ">
            <NextIcon width={14} height={14} />
          </span>
          {step.title}
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
