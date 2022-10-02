import { CssBaseline, Box } from "@mui/material";
import Header from "components/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", heigh: "100vh" }}>
        <Box>
          <Header />
        </Box>
      </Box>
    </>
  );
}

export default App;
