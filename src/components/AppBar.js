import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Fira Code'
    ].join(','),
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide
      appear={false}
      direction="down"
      in={!trigger}
    >
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <Toolbar>
              <Box
                display="flex"
                justifyContent="center"
                flexGrow="1"
                alignItems="center"
                // spacing="4px"
                // gap="3px"
                sx={{ gap: '13px' }}
              >

                <Box flexGrow={1}>
                  <Typography
                    variant="h6"
                    // mr="auto"
                    // display="flex"
                    // flexGrow="1"
                  >
                    &lt;Absolunet Frontend Test/&gt;
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle2"
                  component="span"
                >
                  by =&gt; &lt;Frédéric Desmarais/&gt;
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />

      </ThemeProvider>
    </>
  );
}
