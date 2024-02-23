import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);




const images = [
  {
    
    imgPath:
"https://cdn.dribbble.com/users/36126/screenshots/2228873/rb-logo.png"    },
  {
    
    imgPath:
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAolBMVEX///8AAAAAhsqH1vYAg8nz+v2A1PYAgMhZpdfT7/uzs7NwcHDKysru7u5ra2ukpKQUFBS61+ypqanc7PZRoNUVFRW5ubn29vYvLy/k5OTc3Nz5+fnn5+eIiIix5Pnf39+Dg4PCwsKTk5NDQ0NiYmJYWFjR0dE4ODhNTU0kJCQsLCxGRkZ6tN16enocHBybm5uXxeXH6/ub3Pe45vkAdsRrrdpiQQoqAAAEeUlEQVR4nO3a/UPaOBzH8eZw7CxPDs9WKpUHkQedcrfb/f//2uWbpG2osAoWZdv79QstLWnzaZImbkEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgVfPqBj763d/L18w98/ei7ex9/nf2x09mfH31374MMyECQwc+QQT8dHPkKJ5/BVCkVH/cSJ5/Bnc6gfdxLnHwGfZ3BzXEvcfIZBO3+kbvCT5DB8R2YwWiUbXWSzWE7TkaVTXeQ3GQnDzePdMpflK+bdKoK3185g7OKDNpKTYIn3UdtzdfPelO18huPFrJ/NzE7+tjafd9VaiafSnWDnpwy03WZL2Wrl5cdp7KvnjaqGepv3Ob8Xg6v1kE9Gk2nvDb8+3NlBouVchmMVKZvj46z/VT2rosMWlL5QDJQ9+6UYd9tdLMq5qVNvAvqDC7yMpyklgyaDat5WTrwpToDS2cwVIVQDk6K/fnODDIXpQDn3jHvZZhnMPOOj4IaNLIMzg/KoD8c6B4t7T7Vg/ZcNqQ76Ee80NlE7uHuyOC+E3SWWXByrm3rkslal9qWZlYMKVkG0moudDZDaQ6rWjP455AMbIedFJ1ZT2Ra+uPBPUHdr593ZrDKa9x3dTRtW+oY2ZN1CNP8glkGEoFNZpo1uzfKMmjclg68JgN3A7pxPrhvR/Zh6vYw9s7dnkEvr4itkitQ//beu0ZeiMug7fUQXe5y3wpvkWfQLB14TQZuzmJ6Qse4WZkRQCp2lbazhrw9A/uw9WO/socuTCyxpONKi/OmFuQZTPOh0TaZNyfgZ1AaEF6Tga3jjdokg/nCbj5Ge2cwLJU2L2XQKt4fQeJnVEMGjW+HZhCX7trUredG+7t9MxhUZNC1I44xqjuD0tvx9RlIfZat3My9r0Z98xJzQ2SWwVNVBh15YXillfvC2OUqJqqW5XTDc2gG+mXwtL30se2wj8UJj1UZyMfWCaDLIPSefbcYjN/Ci6C58WrYI4O1mxVo8yiKbD81X9zYBzXO7ztRlRmMi4fbNqU5LgNpJ7MgLyx9cwKb7aD5r3dgjwykpheJu0+pYuz6gFkRBHbmd91xd12VgQyK1ybBtaujXR5l8wOZGplWNVeqluFgI4ONlrBHBqbqapmm18o9Q1kKLNJ0mdXYzAZbqV0hVGRgqq5m6VimiVe2sMjLwL6GxmlpnVVXBo3mt3zptE8G9rYt0x68wd08qLhYE1RnUCy4TI+SwX/hZeAXXkdPKGcg/eHTARkE7Qd7U0s3LiRu/87tx26h8zTM184uA9dd7FduMIyu7NkzaVOxGwCKtXPsFo7P/rKyxgz0Wvr2XGL48r3458bv/738YSeMNubqSS9N+95fUebrNO15a9tBL52GulFMQjPT1b+2J4/CbNyLojDxfj0NXX7tx65kMQiLAbITTtN1PnN4qxcZmBj0jOn20lPX1U7Ttgxevih/bWRABoIMyECQARmI5i6/UQaX5zv8Lv8fDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwgf4HC7lMi+eI0OQAAAAASUVORK5CYII=" },
  {
    
    imgPath:
"https://cdn.dribbble.com/users/1040427/screenshots/12824696/media/cc28b38206a264473d13fcf22c8bb349.jpg?resize=400x0"},
 
];

function SwipeableTextMobileStepper() {
  
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
   
    <Box sx={{ width: "100%", maxHeight: "100vh"}}>
      
       
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
              
                component="img"
                sx={{
                  height: "100vh",
                  overflow: 'hidden',
                  width: '100%',
                  padding:"0",
                 
                  
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
    </Box>
   
  );
}

export default SwipeableTextMobileStepper;