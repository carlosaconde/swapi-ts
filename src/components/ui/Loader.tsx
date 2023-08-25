import React from 'react';
import { CircularProgress } from '@mui/material';


const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <CircularProgress 
                    size={60} 
                    thickness={0} 
                    className="custom-progress" />
    </div>
  );
};

export default Loader;