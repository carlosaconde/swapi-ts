import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { DataStarship, DataCharacter, DataFilms } from "../../types";

export const useFetch = (
  url: string
): DataStarship | DataCharacter | DataFilms | null => {
  const [resp, setResp] = useState<
    DataStarship | DataCharacter | DataFilms | null
  >({ count: 0, next: "", previous: null, results: [] });

  try {
    const getFetch = async () => {
      const { data } = await axios.get(url);
      //   console.log(data);
      setResp(data);
    };
    useEffect(() => {
      getFetch();

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);
  } catch (error) {
    console.log(error);
  }

  return resp;
};
