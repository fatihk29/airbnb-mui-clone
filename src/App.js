import { CssBaseline, Box, Container } from "@mui/material";
import Header from "components/Header";
import OptionsTab from "components/OptionsTab";
import LocationCard from "components/LocationCard";
import { displayOnDesktop } from "themes/commonStyles";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Box>
          <Header />
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCard />
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {/* <MobileFooter /> */}
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          {/* <FooterMenu /> */}
        </Box>
        <Box sx={displayOnDesktop}>{/* <Footer /> */}</Box>
      </Box>
    </>
  );
}

export default App;

{
  /* <Container maxWidth="xl" sx={{ mb: 3 }}>
  <LocationCard />
</Container>; */
}
