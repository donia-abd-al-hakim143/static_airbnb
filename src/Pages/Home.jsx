import React from "react";
import { homeData } from "../Data/HomeData";
import Card from "../Components/Card/Card";

export default function Home() {
  return (
    <div className="container my-5">
      {homeData.map((city, index) => (
        <div key={index} className="mb-5">
          <h3 className="mb-4">{city.cityName}</h3>
          <div className="row">
            {city.details.map((detail, i) => (
              <Card key={i} detail={detail} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
