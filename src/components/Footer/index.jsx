import React from "react";
import { Paper, Box, Link, Stack, Button, Container } from "@mui/material";

import { BsGlobe } from "react-icons/bs";
import { IoChevronUpOutline } from "react-icons/io5";
import {
  flexBetweenCenter,
  justifyCenter,
  fullWidthFlex,
} from "themes/commonStyles";

const footerLinks = [
  { id: 1, text: "Privacy", url: "#" },
  { id: 2, text: "Terms", url: "#" },
  { id: 3, text: "Sitemap", url: "#" },
  { id: 4, text: "Destinations", url: "#" },
];

const Footer = () => {
  return (
    <Box sx={{ ...fullWidthFlex, borderTop: "1px solid #ddd" }}>
      <Container maxWidth="xl">
        <Box sx={{ ...flexBetweenCenter, width: "100%" }}>
          <Stack>
            <Paper>
              <Link href="#">2022 AirBnb Copyright</Link>
            </Paper>
            {footerLinks.map((item) => {
              return (
                <Paper key={item.id}>
                  <Link href={item.url}></Link>
                </Paper>
              );
            })}
          </Stack>
          <Stack>
            <Paper sx={justifyCenter}>
              <Button>
                <Box sx={{ ...justifyCenter, mr: 1 }}>
                  <BsGlobe size={24} />
                </Box>
                Englist CA
              </Button>
              <Button>USD</Button>
              <Button>
                Support & Resources
                <Box sx={{ ...justifyCenter, ml: 1 }}>
                  <IoChevronUpOutline size={24} />
                </Box>
              </Button>
            </Paper>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
