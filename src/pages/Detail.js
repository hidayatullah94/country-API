import React, { useContext, useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import "./detail.css";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ThemeContext from "./ThemeContex";

function Detail() {
  const [detail, setDetail] = useState([]);
  let { name } = useParams();
  let navigate = useNavigate();
  let theme = useContext(ThemeContext);

  useEffect(() => {
    Axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => {
        setDetail(response.data);
      })
      .catch((err) => console.log(err));
  }, [name]);
  return (
    <div className="details" style={theme}>
      <Navbar />
      <button style={theme} className="back" onClick={() => navigate("/")}>
        <i className="fas fa-arrow-left "></i> Back
      </button>
      {detail.map((list, index) => {
        return (
          <div className="content" key={index}>
            <div className="img-detail">
              <img src={list.flags.png} alt="flag" />
            </div>
            <div className="detail-list">
              <h2>{list.name.common}</h2>
              <div className="detail">
                <div className="list">
                  <p className="name">Native name : {list.name.common}</p>
                  <p className="pop">Population : {list.population.toLocaleString()}</p>
                  <p className="reg">Region : {list.region}</p>
                  <p className="sub-reg">Sub Region : {list.subregion}</p>
                  <div className="cap">Capital : {list.capital}</div>
                </div>
                <div className="list">
                  <p className="top">Top Level domain : {list.tld}</p>
                  <p className="cur">
                    Currencies :{" "}
                    {Object.values(list.currencies).map((current) => {
                      return <p> {current.name}</p>;
                    })}
                  </p>
                  <p className="lang">Languages : {Object.values(list.languages)}</p>
                </div>
              </div>
              <div className="borders">
                <div className="detail-border">
                  <h5>Border Country : </h5>
                </div>
                <div className="detail-border">
                  <p className="border">{list.borders[0]}</p>
                  <p className="border">{list.borders[1]}</p>
                  <p className="border">{list.borders[2]}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Detail;
