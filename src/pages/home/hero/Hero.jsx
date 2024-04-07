import React, { useEffect, useState } from "react";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/UseFetch";
import { useSelector } from "react-redux";

import { Image } from "../../../components/lazyloadimage/Img";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
const Hero = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch(`/movie/popular`);
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)].backdrop_path;
    setBackground(bg);
  }, [data]);

  const SearchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Image src={background}></Image>
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Unlimited movies, TV shows and more</span>
          <span className="subTitle">Watch anywhere. Cancel anytime.</span>

          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for Movies , tv show"
              onKeyUp={SearchQueryHandler}
              onClick={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Hero;
