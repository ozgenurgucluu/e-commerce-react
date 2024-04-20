import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";
import TrendyolLogo from "../icons/TrendyolLogo";
import { useState } from "react";
import axios from "axios";
import LoginIcon from "../icons/LoginIcon";
import FavoriteIcon from "../icons/FavoriteIcon";
import BasketIcon from "../icons/BasketIcon";

const Header = () => {
  const businessLink = [
    {
      text: "İndirim Kuponlarım",
    },
    {
      text: "Trendyol'da Satış Yap",
    },
    {
      text: "Hakkımızda",
    },
    {
      text: "Yardım&Destek",
    },
  ];

  const [categories, setCategories] = useState([]);
  const getCategory = () => {
    axios.get("http://localhost:3000/categories").then((response) => {
      setCategories(response.data);
    });
  };
  useEffect(() => {
    getCategory();
  }, []);
  console.log(categories);

  return (
    <div className="flex flex-col ">
      <div className="container flex items-center justify-end gap-3">
        {businessLink.map((business, index) => (
          <div
            key={index}
            className=" text-xs text-gray-700 opacity-75 hover:opacity-100 my-2"
          >
            <Link>{business.text}</Link>
          </div>
        ))}
      </div>
      <div className=" flex my-1">
        <Link to={"/"}>
          <TrendyolLogo fill="black" />
        </Link>
        <div className="flex">
          <div className="mx-20 position-relative ">
            <input
              className="w-[598px] h-[42px] bg-gray-200/60 p-2 rounded-md focus:outline-none focus:ring focus:ring-orange-600 focus:bg-white text-sm"
              placeholder="Aradığınız ürün, kategori veya markayı yazınız"
            ></input>
          </div>
          <div className="-mx-28 my-3 cursor-pointer">
            <SearchIcon />
          </div>
        </div>

        <div className="container flex items-center justify-end gap-12 text-sm ">
          <Link className="flex hover:text-orange-600 text-black/70">
            <LoginIcon />
            Giriş Yap
          </Link>
          <Link className="flex hover:text-orange-600 text-black/70">
            <FavoriteIcon />
            Favorilerim
          </Link>
          <Link className="flex hover:text-orange-600 text-black/70">
            <BasketIcon />
            Sepetim
          </Link>
        </div>
      </div>

      <div className="flex justify-center gap-8 p-3">
        {categories.map((category) => (
          <div
            className="text-sm font-semibold hover:text-orange-600"
            key={category.id}
          >
            <Link
              className="focus:underline focus:text-orange-600"
              to={`/category/${category.id}`}
            >
              {category.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
