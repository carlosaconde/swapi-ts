
import { useFetch } from "../components/hooks/useFetch";
import { DataFilms } from "../types";


 export const GetFilmName = (url:string):string[] => {

 const data: DataFilms = useFetch(url) as DataFilms;

 const title = data.results.map(row =>(row.title))

 return title

 }


