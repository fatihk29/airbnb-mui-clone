import { CssBaseline, Box, Container } from "@mui/material";
import Header from "components/Header";
import OptionsTab from "components/OptionsTab";
import LocationCard from "components/LocationCard";
import { displayOnDesktop } from "themes/commonStyles";
import Footer from "components/Footer";
import FooterMenu from "components/Footer/FooterMenu";

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
                display: { xs: "block", md: "none" },
              }}
            >
              {/* <MobileFooter /> */}
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
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
