import * as React from "react";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const loader = (
  <React.Fragment>
    <CardContent>
      <Box sx={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Cargando
        </Typography>
        <Box className="loader-container">
          
          <CircularProgress
            size={60}
            thickness={0}
            className="custom-progress"
          />
        </Box>
      </Box>
    </CardContent>
  </React.Fragment>
);

export default function Loader() {
  return (
    <Box sx={{ 
      
      Width: 230,
      display: "flex",
      justifyContent: "center",
      alignItems:'center', }}>
      <Card sx={{
        backgroundColor:'darkgrey',
          display: "flex",
          mt: 10,
          mb:10
         
        }}
        
        variant="outlined"
      >
        {loader}
      </Card>
    </Box>
  );
}
