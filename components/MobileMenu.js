import React, {useState} from "react";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Logo = styled("img")({
  width: "200px",
  marginTop:'10px'
});
const StyledStack = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "& > a": {
    fontStyle: `normal`,
    fontWeight: `bold`,
    fontSize: `20px`,
    lineHeight: `144.4%`,
    color: `#fbfaf5`,
    padding: `14px 26px`
    // borderBottom: "1px solid #fbfaf5"
  }
});

const StyledIcon = styled(MenuIcon)({
    color: "#fbfaf5",
    width: "40px",
    height: "40px",
    cursor: "pointer"
  });
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          background:
            "#27282B",
          paddingX: "30px",
          paddingY: "15px",
          borderBottom: "1px solid #fbfaf5"
        }}
      >
        <div>
          <span >
            <Logo src="/CRYPTO MINERS.png" alt="" />
          </span>
        </div>
        <Stack  onClick={toggleDrawer} sx={{
          display: "flex",
          alignSelf: "center"
        }}>
          <StyledIcon />
        </Stack>
      </Stack>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{
          background:
            "#27282B"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "30px 0px"
          }}
        >
          <Logo src="/CRYPTO MINERS.png" alt="" />
        </Box>
        <Box>
          <StyledStack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
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
                  padding: `14px 28px`,
                  cursor: `pointer`,
                  // marginLeft: `26px`,
                  border: `2px solid #EEE9E6`,
                  boxShadow: `0px 0px 7px #F48B0C`
              }}>Join Discord</Box>
          </StyledStack>
        </Box>
      </Drawer>
    </div>
  );
};

export default MobileMenu;


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
