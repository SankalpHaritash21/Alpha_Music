"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://spotify23.p.rapidapi.com/search/",
        params: {
          q: "Your Search Query", // Make sure to replace <REQUIRED> with an actual query
          type: "multi",
          offset: "0",
          limit: "10",
          numberOfTopResults: "5",
        },
        headers: {
          "X-RapidAPI-Key":
            "17651ead7dmsh75f59bfbd837d19p1dca6ajsn337a76332559",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setData(response.data); // Save the fetched data to state
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  console.log(data);
  if (!data) return <div>Loading...</div>; // Display loading state or handle it as needed

  return <div>Hi Sam</div>; // Update this to render your data as needed
};

export default Page;
