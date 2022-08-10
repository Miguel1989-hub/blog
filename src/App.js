import React, { useState } from 'react';
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import RightBar from './components/RightBar'
import NavBar from './components/NavBar'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Add from './components/Add';

function App() {

  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })





  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} >
        <NavBar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <SideBar mode={mode} setMode={setMode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
