import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import Container from '@mui/material/Container';

export interface Data {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export enum Gender {
  Female = "female",
  Male = "male",
  NA = "n/a",
}
export const People = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const data: Data = useFetch("https://swapi.dev/api/people") as Data;

  useEffect((): any => {
    if (data.count === 0) {
      setIsLoading(true);
      console.log(isLoading);
    } else {
      setIsLoading(false);
    }
  }, [data, isLoading]);

  return (
    
       
      <TableContainer  component={Paper} sx={{ mt: 10 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Character</TableCell>
              <TableCell align="left">Birthday</TableCell>
              <TableCell align="left">height</TableCell>
              <TableCell align="left">mass</TableCell>
              <TableCell align="left">hair color</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && <Loader />}
            {!isLoading && data
              ? data.results.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.birth_year}</TableCell>
                    <TableCell align="left">{row.height}</TableCell>
                    <TableCell align="left">{row.mass}</TableCell>
                    <TableCell align="left">{row.hair_color}</TableCell>
                  </TableRow>
                ))
              : null}
           
          </TableBody>
        </Table>
      </TableContainer>
     
      
    
  );
};
