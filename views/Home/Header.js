import React, {useState} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import {useMediaQuery} from "react-responsive";
import Fade from "react-reveal/Fade";
const Title = styled("h1")({
  fontStyle: `normal`,
  fontWeight: `800`,
  fontSize: "40px",
  lineHeight: `68px`,
  letterSpacing: `0.05em`,
  color: `#fbfaf5`,
  marginBottom: "28px",
  "& > span": {
    border: "1px solid #F48B0C",
    padding: "5px 10px",
    borderRadius: "6px",
    paddingLeft: "10px"
  },
  "@media (max-width: 900px)": {
    fontSize: "40px",
    lineHeight: `68px`
  },
  "@media (max-width: 1000px)": {
    fontSize: "40px",
    lineHeight: `48px`,
    "& > span": {
      border: "0px solid #F48B0C"
    }
  }
});
const TinyText = styled("h5")({
  fontStyle: `normal`,
  fontWeight: `800`,
  fontSize: `48px`,
  lineHeight: `144.4%`,
  letterSpacing: `0.05em`,
  color: `#F48B0C`
});
const ArrowIcon = styled("img")({
  width: "40px",
  marginTop: "11px"
});
const Paragraph = styled("p")({
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `16px`,
  lineHeight: `25px`,
  color: `#B5B5B5`,
  marginBottom: `50px`,
  maxWidth: "500px"
});
const ButtonCustom = styled("a")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `20px`,
  lineHeight: `137.4%`,
  letterSpacing: `0.05em`,
  color: `#1C232D`,
  boxSizing: ` border-box`,
  borderRadius: `7px`,
  background: `#F48B0C`,
  padding: `10px 40px`,
  cursor: `pointer`
});
const MintButton = styled("a")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `20px`,
  lineHeight: `137.4%`,
  letterSpacing: `0.05em`,
  color: `#1C232D`,
  boxSizing: ` border-box`,
  borderRadius: `7px`,
  background: `#F48B0C`,
  padding: `10px 25px`,
  cursor: `pointer`
});
const MintTilte = styled("p")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `13px`,
  lineHeight: `25px`,
  color: `#EEE9E6`,
  marginBottom: `5px`,
  textAlign: "center"
});
const PriceTilte = styled("p")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `22px`,
  lineHeight: `25px`,
  color: `#1C232D`,
  textAlign: "center",

  "& > span": {
    paddingTop: "26px",
    fontSize: `10px`
  }
});
const Input = styled("input")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `15px`,
  lineHeight: `18px`,
  color: `#F48B0C`,
  padding: "10px",
  background: "#1C232D",
  outline: "none",
  border: "none",
  width: "60px",
  borderRadius: "6px"
});
const Header = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 500px)"
  });
  return (
    <Box
      sx={{
        background: "#27282B",
        paddingX: "10px",
        paddingTop: "80px",
        paddingBottom: "50px"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className="header">
              <Stack direction="row" spacing={2}>
                <Fade left>
                  <TinyText>Explore</TinyText>
                </Fade>
                <Box>
                  <Fade>
                    <ArrowIcon src="/arrow.png" alt="" />
                  </Fade>
                </Box>
              </Stack>
              <Fade bottom>
                <Title>
                  The Unique Miners <br /> on<span>Eth BlockChain</span>
                </Title>
              </Fade>
              <Fade bottom>
                <Paragraph>
                  The CRYPTO MINERS is a collection of 4,444 unique Miners who
                  unite together on the Ethereum Blockchain.
                </Paragraph>
              </Fade>
              <Box
                sx={{
                  display: "flex",
                  marginLeft: "78px",
                  marginBottom: "40px",
                  "@media (max-width: 768px)": {
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "0px",
                  }
                }}
              >
                <Fade bottom>
                  <ButtonCustom>Connect wallet</ButtonCustom>
                </Fade>
              </Box>
              <Box
                sx={{
                  "@media (max-width: 768px)": {
                    display: "flex",
                    justifyContent: "center"
                  }
                }}
              >
                <Stack
                  direction={isTablet ? "column" : "row"}
                  justifyContent={isTablet ? "center" : "pace-between"}
                  alignItems="center"
                  spacing={2}
                >
                  <Box
                    sx={{
                      paddingTop: "26px",
                      "@media (max-width: 500px)": {
                        marginBottom: "20px"
                      }
                    }}
                  >
                    <Fade bottom>
                      <MintButton>Mint</MintButton>
                    </Fade>
                  </Box>
                  <Box>
                    <Fade bottom>
                      <MintTilte>MINT Number</MintTilte>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center"
                        }}
                      >
                        <MintButton>1</MintButton>
                      </Box>
                    </Fade>
                  </Box>
                  <Fade bottom>
                    <Box
                      sx={{
                        "@media (max-width: 500px)": {
                          paddingTop: "10px"
                        }
                      }}
                    >
                      <MintTilte>Price</MintTilte>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center"
                        }}
                      >
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={2}
                          sx={{
                            background: "#F48B0C",
                            borderRadius: "8px",
                            padding: "6px 10px"
                          }}
                        >
                          <PriceTilte>
                            Price <span>(ETH)</span>
                          </PriceTilte>

                          <Input type="text" placeholder="0.00" />
                        </Stack>
                      </Box>
                    </Box>
                  </Fade>
                </Stack>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{display: "flex", justifyContent: "center"}}
              className="zoomContainer"
            >
              <Box className="image-card">
                <img src="/3.png" alt="" className="CustomImage" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
