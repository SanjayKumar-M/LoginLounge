import React from "react";
import { PacmanLoader } from 'react-spinners';
const LoadingOverlay = () => {
  

  return (
    <div>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 100,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
          <PacmanLoader color="#36d7b7" />
          </div>
        </div>
      
    </div>
  );
};

export default LoadingOverlay;
