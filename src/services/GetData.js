import { useState, useEffect } from "react";
import NProgress from "nprogress";

import Api from "./Api";

const GetData = () => {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [ip, setIp] = useState("0.0.0.0");
  const [asn, setAsn] = useState("-");
  const [city, setCity] = useState("-");
  const [region, setRegion] = useState("-");
  const [country, setCountry] = useState("-");
  const [timezone, setTimezone] = useState("-");
  const [continent, setContinent] = useState("-");
  const [emoji_flag, setEmojiFlag] = useState("");
  const [language_name, setLanguage_name] = useState("");
  const [language_code, setLanguage_code] = useState("");

  const [ipAdress, setIpAdress] = useState();

  const storeData = (data) => {
    setIp(data.ip);
    setCity(data.city);
    setLat(data.latitude);
    setAsn(data.asn.name);
    setLng(data.longitude);
    setRegion(data.region);
    setEmojiFlag(data.emoji_flag);
    setCountry(data.country_name);
    setContinent(data.continent_name);
    setTimezone(data.time_zone.offset);
    setLanguage_name(data.languages[0].name);
    setLanguage_code(data.languages[0].code);
  };

  useEffect(async () => {
    NProgress.start();

    try {
      const data = await Api(
        `?api-key=${process.env.NEXT_PUBLIC_API_IPDATA_KEY}`
      )
        .then((response) => response.data)
        .catch((error) => console.log(error));

      if (data) {
        storeData(data);
      }
    } catch (error) {
      alert(error);
    }

    NProgress.done();
  }, []);

  const handleSearchIp = async (e) => {
    NProgress.start();
    e.preventDefault();

    try {
      const data = await Api(
        `${ipAdress}?api-key=${process.env.NEXT_PUBLIC_API_IPDATA_KEY}`
      )
        .then((response) => response.data)
        .catch((error) => console.log(error));

      if (data) {
        storeData(data);
      }
    } catch (error) {
      alert(error);
    }

    NProgress.done();
  };

  return {
    ip,
    lat,
    lng,
    asn,
    city,
    region,
    country,
    timezone,
    continent,
    emoji_flag,
    setIpAdress,
    language_name,
    language_code,
    handleSearchIp,
  };
};

export default GetData;
