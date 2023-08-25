import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {Data } from "../pages/People";

export const useFetch = (url:string):Data|null => {
  const [resp, setResp] = useState<Data|null>({ count: 0, next: "", previous: null, results: [] });
  
  try {
    
    const getFetch = async () => {
      const { data } = await axios.get(url);
    //   console.log(data);
      setResp(data);
    };
    useEffect(() => {
        
      getFetch();
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url]);
  } catch (error) {
    console.log(error);
  }

  return resp;
};
