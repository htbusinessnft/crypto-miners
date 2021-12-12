import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
const LinkWrap = styled("div")({
  "& > a": {
    fontStyle: `normal`,
    fontWeight: `bold`,
    fontSize: `18px`,
    lineHeight: `144.4%`,
    color: `#EEE9E6`,
    padding: `0px 26px`
  },

  "& > span": {
    fontStyle: `normal`,
    fontWeight: `bold`,
    fontSize: `18px`,
    lineHeight: `144.4%`,
    letterSpacing: `0.045em`,
    color: ` #EEE9E6`,
    backgroundColor: `#1C232D`,
    borderRadius: `1px`,
    padding: `14px 28px`,
    cursor: `pointer`,
    marginLeft: `26px`,
    border: `2px solid #EEE9E6`,
    boxShadow: `0px 0px 7px #F48B0C`
  }
  // "@media (max-width: 768px)": {
  //   "& > a": {
  //     fontSize: `16px`
  //   }
  // }
});

const Navbar = () => {
  return (
    <Box
      sx={{
        background: "#27282B",
        paddingX: "10px",
        paddingY: "40px"
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: " space-between"
          }}
        >
          <Box>
            <Box sx={{
              maxWidth: '250px'
            }} component={'img'} src="/CRYPTO MINERS.png" alt="" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignSelf: "center"
            }}
          >
            <LinkWrap>
              {links.map((item, index) => {
                return (
                  <AnchorLink href={`#${item.title}`} key={index}>
                    {item.title}
                  </AnchorLink>
                );
              })}
              <Box as={'a'} target={'_blank'} href={'https://discord.gg/MCG3cfhU'} sx={{
                fontStyle: `normal`,
                fontWeight: `bold`,
                fontSize: `18px`,
                lineHeight: `144.4%`,
                letterSpacing: `0.045em`,
                color: ` #EEE9E6`,
                backgroundColor: `#1C232D`,
                borderRadius: `1px`,
                padding: `14px 28px !important`,
                cursor: `pointer`,
                marginLeft: `26px`,
                border: `2px solid #EEE9E6`,
                boxShadow: `0px 0px 7px #F48B0C`
              }}>Join Discord</Box>
            </LinkWrap>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;

const links = [
  {
    title: "EarnMoney"
  },
  {
    title: "RoadMap"
  },
  {
    title: "FAQ"
  }
];
