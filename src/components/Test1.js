import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Test() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='md' spacing={4}>
        <Typography
          component='div'
          style={{
            backgroundColor: "#cfe8fc",
            height: "100vh",
          }}
        >
          {/* <iframe
            src='https://codesandbox.io/embed/absolunet-frontendtest-v4ihw?autoresize=1&fontsize=14&hidenavigation=1&theme=dark'
            style={{
              width: "100%",
              height: "500px",
              border: "0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
            title='Absolunet-FrontendTest'
            allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
            sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
          ></iframe> */}
          
          <code>
          Absolunet
Télécopieur : 1 888 563-3057
Sans frais : 1 877 979-2276
Courriel: info@absolunet.com 

Montréal
4398 boul. St-Laurent, suite 204
Montréal, Québec H2W 1Z5
Téléphone : 514 982-6560

Ste-Thérèse
SIÈGE SOCIAL
260 rue Sicard, bureau 300
Ste-Thérèse, Québec J7E 3X4
Téléphone : 450 979-7620

Hébergement par Amazon Web Services (AWS)
410 Terry Ave. North
Seattle, WA
98109-5210

          </code>
        </Typography>
      </Container>
    </>
  );
}
