import React from "react";
import { Button, Divider, Stack, Box, Typography, Paper } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";

const Tabs = [
  { id: 1, text: "Anywhere" },
  { id: 2, text: "Anywhere" },
  { id: 3, text: "Anywhere", withIcon: true },
];

const LocationSearch = () => {
  return (
    <Paper sx={{ borderRadius: 20, ml: 15 }} elevation={3}>
      <Stack
        sx={{ borderRadius: 20, pl: 2 }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {Tabs.map((tab) => {
          return (
            <Button key={tab.id}>
              <Typography
                sx={{
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: "bold",
                }}
              >
                {tab.text}
              </Typography>
              {tab.withIcon && (
                <Box sx={{ ml: 1, mt: 2, mr: 1 }}>
                  <SearchIcon sx={{ color: pink[500] }} size={32} />
                </Box>
              )}
            </Button>
          );
        })}
      </Stack>
    </Paper>
  );
};

export default LocationSearch;
