
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Lottie from "lottie-react";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const lottieFiles = [
  {
    lottiePath: "src/lottiefiles/resumeicon2.json",
  },

  {
    lottiePath: "src/lottiefiles/resumeicon1.json",
  },

  {
    lottiePath: "src/lottiefiles/resumeicon4.json",
  },
];

function SwipeableLottieStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [lottieData, setLottieData] = React.useState(null);

  React.useEffect(() => {
    const fetchLottieData = async () => {
      try {
        const response = await fetch(lottieFiles[activeStep].lottiePath);
        const data = await response.json();
        setLottieData(data);
      } catch (error) {
        console.error("Error fetching Lottie data:", error);
      }
    };

    fetchLottieData();
  }, [activeStep]);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        interval={7000}
        enableMouseEvents
      >
        {lottieFiles.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100vh",
                  width: "100vh",
                  padding: "0",
                }}
              >
                {/* Render Lottie animation */}
                {lottieData && (
                  <Lottie
                    style={{ height: "700px", width: "700px" }}
                    animationData={lottieData}
                    loop={true}
                    autoplay={true}
                  />
                )}
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableLottieStepper;
