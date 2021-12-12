import React, {Fragment, useEffect, useRef, useState} from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import {useMediaQuery} from "react-responsive";
import Fade from "react-reveal/Fade";
const Title = styled("h1")({
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `51px`,
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

const RoadMap = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 700px)"
  });
  return (
    <div>
      <Box
        sx={{
          background: "#27282B",
          padding: "80px 10px 80px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Container maxWidth="lg">
          <Fade bottom>
            <Title>Roadmap</Title>
          </Fade>
          <Box
            sx={{
              maxWidth: "900px",
              margin: "auto",
              "@media (max-width: 650px)": {
                width: "100%"
              }
            }}
          >
            <Timeline position={isTablet ? "left" : "alternate"}>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Fade left>
                    <Box
                      sx={{
                        background: `#1C232D`,
                        border: `3px solid #F48B0C`,
                        borderRadius: `19px`,
                        padding: "37px 30px"
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontWeight: 600,
                          fontSize: `15px`,
                          color: "#FFF"
                        }}
                      >
                          COMMUNITY BUILDING <br/>
                          We will spread the word about our ambitious project and organise multiple giveaways until the official public release date. Our aim here is to gather as many investors as possible and that each one of them understands our project and what we are aiming for. We are not just like any other NFT collection, we are building an asset that will endlessly produce passive income for all holders!
                      </Typography>
                    </Box>
                  </Fade>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector
                    sx={{
                      background: "#F48B0C"
                    }}
                  />
                  <TimelineDot
                    sx={{
                      fontStyle: `normal`,
                      fontWeight: `bold`,
                      fontSize: `11px`,
                      lineHeight: `159.9%`,
                      letterSpacing: ` 0.07em`,
                      color: `#F48B0C`,
                      border: `2px solid #F48B0C`,
                      background: "#1C232D",
                      height: "64px",
                      width: "64px",
                      // padding: "11px 12px 18px",
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems:'center' ,
                    }}
                  >
                      PHASE 1
                  </TimelineDot>
                  <TimelineConnector
                    sx={{
                      background: "#F48B0C"
                    }}
                  />
                </TimelineSeparator>
                {!isTablet ? <TimelineContent sx={{py: "12px", px: 2}} /> : ""}
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Fade right>
                    <Box
                      sx={{
                        background: `#1C232D`,
                        border: `3px solid #F48B0C`,
                        borderRadius: `19px`,
                        padding: "37px 30px"
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontWeight: 600,
                          fontSize: `15px`,
                          color: "#FFF"
                        }}
                      >
                          LAUNCH <br/>
                          1000 Miners will be available to mint 24 hours before the public sale for the whitelisted members, each whitelisted member will have the option to mint 2 Miners, that means that there will be 3,333 Miners available to mint on the date of the public sale. Make sure you grab yourself one because our miners will become an asset generating you passive money each week.
                      </Typography>
                    </Box>
                  </Fade>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector
                    sx={{
                      background: "#F48B0C"
                    }}
                  />
                  <TimelineDot
                    sx={{
                      fontStyle: `normal`,
                      fontWeight: `bold`,
                      fontSize: `11px`,
                      lineHeight: `159.9%`,
                      letterSpacing: ` 0.07em`,
                      color: `#F48B0C`,
                      border: `2px solid #F48B0C`,
                      background: "#1C232D",
                      height: "64px",
                      width: "64px",
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems:'center' ,
                    }}
                  >
                      PHASE 2
                  </TimelineDot>
                  <TimelineConnector
                    sx={{
                      background: "#F48B0C"
                    }}
                  />
                </TimelineSeparator>
                {!isTablet ? <TimelineContent sx={{py: "12px", px: 2}} /> : ""}
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Fade left>
                    <Box
                      sx={{
                        background: `#1C232D`,
                        border: `3px solid #F48B0C`,
                        borderRadius: `19px`,
                        padding: "37px 30px"
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontWeight: 600,
                          fontSize: `15px`,
                          color: "#FFF"
                        }}
                      >
                          MINING RIGS <br/>
                          Buying a new warehouse in Iceland, and filling it with mining rigs, which will be YOUR mining rigs, earning you money while you sleep just by owning and holding a CRYPTOMINER.
                          TO MAKE IT CLEAR: You can expect to get up to 600$ in passive income per month from owning one single CRYPTO MINER! Now imagine having 3 Miners and one of them is a rare one, generating up to 1200$ in revenue each month. That’s a potential 2400$ per month by investing 0,9 ETH, 4000$ at the time of writing.
                      </Typography>
                    </Box>
                  </Fade>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector
                    sx={{
                      background: "#F48B0C"
                    }}
                  />
                  <TimelineDot
                    sx={{
                      fontStyle: `normal`,
                      fontWeight: `bold`,
                      fontSize: `11px`,
                      lineHeight: `159.9%`,
                      letterSpacing: ` 0.07em`,
                      color: `#F48B0C`,
                      border: `2px solid #F48B0C`,
                      background: "#1C232D",
                      height: "64px",
                      width: "64px",
                      // padding: "11px 12px 18px"
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                  >
                      PHASE 3
                  </TimelineDot>
                  <TimelineConnector
                    sx={{
                      background: "#F48B0C"
                    }}
                  />
                </TimelineSeparator>
                {!isTablet ? <TimelineContent sx={{py: "12px", px: 2}} /> : ""}
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Fade right>
                    <Box
                      sx={{
                        background: `#1C232D`,
                        border: `3px solid #F48B0C`,
                        borderRadius: `19px`,
                        padding: "37px 30px"
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontWeight: 600,
                          fontSize: `15px`,
                          color: "#FFF"
                        }}
                      >
                          CHARITY <br/>
                          Once all CRYPTOMINERS will have been minted we will be investing 150.000$ to fund the construction of schools in Asia and Africa. We are so grateful for having had access to education throughout our entire lives, it is what has brought us here today, and we think that more people should have access to proper education, that is why we decided to fund the construction of schools.
                      </Typography>
                    </Box>
                  </Fade>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector
                    sx={{
                      background: "#F48B0C"
                    }}
                  />
                  <TimelineDot
                    sx={{
                      fontStyle: `normal`,
                      fontWeight: `bold`,
                      fontSize: `11px`,
                      lineHeight: `159.9%`,
                      letterSpacing: ` 0.07em`,
                      color: `#F48B0C`,
                      border: `2px solid #F48B0C`,
                      background: "#1C232D",
                      height: "64px",
                      width: "64px",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                  >
                      PHASE 4
                  </TimelineDot>
                  <TimelineConnector
                    sx={{
                      background: "#F48B0C"
                    }}
                  />
                </TimelineSeparator>
                {!isTablet ? <TimelineContent sx={{py: "12px", px: 2}} /> : ""}
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Fade left>
                    <Box
                      sx={{
                        background: `#1C232D`,
                        border: `3px solid #F48B0C`,
                        borderRadius: `19px`,
                        padding: "37px 30px"
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontWeight: 600,
                          fontSize: `15px`,
                          color: "#FFF"
                        }}
                      >
                          300% GAINS ON YOUR INVESTMENT IN ONE MONTH <br/>
                          By January 2022, we will have accomplished a floor price of 1 ETH, how can we be so confident on this floor price you ask?
                          Because even a basic CRYPTOMINER, with no particular rarities will be producing 0,15 ETH per month, meaning it will pay for itself in 6 months and then generating passive income each month (around 600$ at the time of writing).
                          And keep in mind that this is the revenue for owning a CRYPTOMINER that hasn’t any particular rare assets, if you are lucky enough to mint one with a gold axe for example, it will be generating twice this amount of money each month!
                      </Typography>
                    </Box>
                  </Fade>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector
                    sx={{
                      background: "#F48B0C"
                    }}
                  />
                  <TimelineDot
                    sx={{
                      fontStyle: `normal`,
                      fontWeight: `bold`,
                      fontSize: `11px`,
                      lineHeight: `159.9%`,
                      letterSpacing: ` 0.07em`,
                      color: `#F48B0C`,
                      border: `2px solid #F48B0C`,
                      background: "#1C232D",
                      height: "64px",
                      width: "64px",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                  >
                      PHASE 5
                  </TimelineDot>
                  <TimelineConnector
                    sx={{
                      background: "#F48B0C"
                    }}
                  />
                </TimelineSeparator>
                {!isTablet ? <TimelineContent sx={{py: "12px", px: 2}} /> : ""}
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Fade right>
                    <Box
                      sx={{
                        background: `#1C232D`,
                        border: `3px solid #F48B0C`,
                        borderRadius: `19px`,
                        padding: "37px 30px"
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontWeight: 600,
                          fontSize: `15px`,
                          color: "#FFF"
                        }}
                      >

                          GIVEAWAYS <br/>
                          Revenue generated from the royalties will be distributed to holders each month, that is another source of income
                      </Typography>
                    </Box>
                  </Fade>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector
                    sx={{
                      background: "#F48B0C"
                    }}
                  />
                  <TimelineDot
                    sx={{
                      fontStyle: `normal`,
                      fontWeight: `bold`,
                      fontSize: `11px`,
                      lineHeight: `159.9%`,
                      letterSpacing: ` 0.07em`,
                      color: `#F48B0C`,
                      border: `2px solid #F48B0C`,
                      background: "#1C232D",
                      height: "64px",
                      width: "64px",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                  >
                      PHASE 6
                  </TimelineDot>
                  <TimelineConnector
                    sx={{
                      background: "#F48B0C"
                    }}
                  />
                </TimelineSeparator>
                {!isTablet ? <TimelineContent sx={{py: "12px", px: 2}} /> : ""}
              </TimelineItem>

            </Timeline>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default RoadMap;

const data = [
  {
    title: "What will the Mint price be?",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
       eget.`
  },
  {
    title: "What wallet can i use?",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
       eget.`
  },
  {
    title: "How does the raffle works?",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
       eget.`
  },
  {
    title: "How can i use my NFT?",
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
       eget.`
  }
];
