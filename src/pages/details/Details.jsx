import React from "react";
import useFetch from "../../hooks/UseFetch";
import "./Details.scss";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosection/VideoSection";
import Similar from "./carousels/Similar";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
