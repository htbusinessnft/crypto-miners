import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Fade from "react-reveal/Fade";
const Title = styled("h1")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `50px`,
  lineHeight: `66px`,
  letterSpacing: `0.05em`,
  color: `#EEE9E6`,
  marginBottom: "60px",
  textAlign: "center",
  "@media (max-width: 520px)": {
    fontSize: "36px",
    lineHeight: `48px`
  }
});
const SubTitile = styled("h1")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `30px`,
  lineHeight: `157.4%`,
  color: `#F48B0C`,
  letterSpacing: `0.05em`,
  marginBottom: "50px"
});
const Paragraph = styled("p")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `20px`,
  lineHeight: `189.4%`,
  color: `#666666`,
  fontFamily: `Montserrat, sans-serif`,
  paddingBottom: "30px"
});
const CustomImage = styled("img")({
  width: "100%",
  transition: `0.4s ease`,
  "&hover": {
    transform: `scale(1.08)`
  }
});
const EarnMoney = () => {
  return (
    <div>
      <Box
        sx={{
          background: "#27282B",
          padding: "50px 10px 100px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Container maxWidth="lg">
          <Fade bottom>
            <Title>EarnMoney</Title>
          </Fade>
          <Grid container spacing={10} sx={{marginBottom: "130px"}}>
            <Grid item xs={12} md={7}>
              <Fade bottom>
                <SubTitile>Earn passive money while you sleep!</SubTitile>
              </Fade>
              <Fade bottom>
                <Paragraph>
                  You can expect to get up to 600$ in passive income per month
                  from owning one single CRYPTO MINER! Now imagine having 3
                  Miners and one of them is a rare one, generating up to 1200$
                  in revenue each month. That’s a potential 2400$ per month by
                  investing 0,9 ETH, 4000$ at the time of writing.
                </Paragraph>
              </Fade>
              <Fade bottom>
                <Paragraph>
                  We are very proud to announce that we are the first NFT
                  collection that will be considered as an asset.
                </Paragraph>
              </Fade>
              <Fade bottom>
                <Paragraph>
                  Buying a Miner will generate you passive income from mining
                  rigs installed in Iceland, where geothermal energy is
                  available and the mining of crypto currencies is less
                  expensive, thus, more profitable.
                </Paragraph>
              </Fade>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%"
                }}
                className="zoomContainer"
              >
                <Box className="image-card">
                  <Fade bottom>
                    <CustomImage
                      src="/1.png"
                      alt=""
                      className="CustomImage"
                    />
                  </Fade>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item xs={12} md={5} order={{xs: 2, md: 1}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%"
                }}
                className="zoomContainer"
              >
                <Fade bottom>
                  <Box className="image-card">
                    <CustomImage
                      src="/2.png"
                      alt=""
                      className="CustomImage"
                    />
                  </Box>
                </Fade>
              </Box>
            </Grid>
            <Grid item xs={12} md={7} order={{xs: 1, md: 2}}>
              <Fade bottom>
                <SubTitile>Why should I buy a CRYPTO MINER?</SubTitile>
              </Fade>
              <Fade bottom>
                <Paragraph>
                  In summary, owning a CRYPTO MINER NFT will be like having your
                  own mining rig, but without the hassle of building it, the
                  noise it makes, and your profitability wouldn’t be as good as
                  ours because we buy equipment in bulk and pay almost no
                  electricity fees.
                </Paragraph>
              </Fade>
              <Fade bottom>
                <Paragraph>
                  Keep in mind that while your nft will generate passive income,
                  it’s value will also appreciate, because you will probably
                  have minted yours at 0.3 ETH, but our floor price will be at
                  minimum 2 ETH in January.
                </Paragraph>
              </Fade>
              <Fade bottom>
                <Paragraph>
                  That’s a 7x on your investment in one month.
                </Paragraph>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default EarnMoney;
