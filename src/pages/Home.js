import React, { useContext, useEffect, useState } from "react";
import Seach from "../component/Search";
import Filter from "../component/Filter";
import Card from "../component/Card";
import "../pages/home.css";
import Axios from "axios";
import Loading from "../component/Loading";
import ThemeContext from "./ThemeContex";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";

// https://restcountries.com/#api-endpoints-v3-region
function Home({ ...rest }) {
  const [isloading, setIsloading] = useState(false); // state for loading
  const [country, setCountry] = useState([]); // state for data api contry
  const [search, setSearch] = useState(""); //state input search
  const [filter, setFilter] = useState("");
  const theme = useContext(ThemeContext);
  let navigate = useNavigate();

  useEffect(() => {
    setIsloading(true);
    Axios.get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountry(response.data);
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home" style={theme}>
      <Navbar {...rest} />
      <div className="section">
        <Seach onChange={(e) => setSearch(e.target.value)} />
        <Filter onChange={(e) => setFilter(e.target.value)} />
      </div>
      <div className="load">{isloading && <Loading />}</div>
      <div className="result">
        {country
          .filter((item) => {
            if (filter === "" && search === "") {
              return item;
            } else if (filter !== "") {
              return item.region.toLowerCase().includes(filter.toLocaleLowerCase());
            } else if (search !== "") {
              return item.name.common.toLowerCase().includes(search.toLowerCase());
            }
          })
          .map((data, index) => {
            return <Card key={index} image={data.flags.png} title={data.name.common} populasi={data.population.toLocaleString()} region={data.region} capital={data.capital} Detail={() => navigate(`/detail/${data.name.common}`)} />;
          })}
      </div>
    </div>
  );
}

export default Home;
