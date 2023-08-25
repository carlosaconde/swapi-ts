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
import { Box } from "@mui/material";
import { DataCharacter } from "../../types";





export const People = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const data: DataCharacter = useFetch("https://swapi.dev/api/people") as DataCharacter;

  useEffect((): any => {
    if (data.count === 0) {
      setIsLoading(true);
      console.log(isLoading);
    } else {
      setIsLoading(false);
    }
  }, [data, isLoading]);

  return (
      <Box>
      {isLoading && <Loader />}
      
            
            {!isLoading && data
              ? 
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
              {data.results.map((row) => (
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
                ))}


                </TableBody>
                </Table>
              </TableContainer>
              : null}
           
          
     
      </Box>
    
  );
};
