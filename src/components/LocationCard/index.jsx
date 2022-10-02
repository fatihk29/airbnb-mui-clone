import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { locations as cardLocations } from "data/mock-data";
import CarouselCard from "../CarouselCard";

const LocationCard = () => {
  const [data] = useState(cardLocations);

  if (!data?.length) {
    return null;
  }

  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {data.map((i) => {
          return (
            <Grid key={i.id} item xs={12} sm={6} md={4} lg={3}>
              <CarouselCard location={i} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCard;
