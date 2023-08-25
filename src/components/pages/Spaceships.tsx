import { useEffect, useState } from "react";
import { useFetch } from '../hooks/useFetch';
import { DataStarship} from '../../types';
import { Box } from '@mui/material';
import Loader from "../ui/Loader";
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const Spaceships = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
const url:string = "https://swapi.dev/api/starships"

  const data: DataStarship = useFetch(url) as DataStarship;
console.log(data);
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
        <TableRow sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Starship</TableCell>
              
              <TableCell align="left">Manufacturer</TableCell>
              <TableCell align="left">Cargo Capacity</TableCell>
              <TableCell align="left">films</TableCell>
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
                    <TableCell align="left">{row.manufacturer}</TableCell>
                    <TableCell align="left">{row.cargo_capacity}</TableCell>
                    {/* <TableCell align="left">{title}</TableCell> */}
                    
                  </TableRow>
                ))}


                </TableBody>
                </TableRow>
              </TableContainer>
              : null}
           
          
     
      </Box>
    
  );
};
