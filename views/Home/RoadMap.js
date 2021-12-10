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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In pulvinar lacus quis arcu blandit, at fermentum risus
                        bibendum.
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
                      padding: "11px 12px 18px"
                    }}
                  >
                    Lorem ipsum
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In pulvinar lacus quis arcu blandit, at fermentum risus
                        bibendum.
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
                      padding: "11px 12px 18px"
                    }}
                  >
                    Lorem ipsum
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In pulvinar lacus quis arcu blandit, at fermentum risus
                        bibendum.
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
                      padding: "11px 12px 18px"
                    }}
                  >
                    Lorem ipsum
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In pulvinar lacus quis arcu blandit, at fermentum risus
                        bibendum.
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
                      padding: "11px 12px 18px"
                    }}
                  >
                    Lorem ipsum
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In pulvinar lacus quis arcu blandit, at fermentum risus
                        bibendum.
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
                      padding: "11px 12px 18px"
                    }}
                  >
                    Lorem ipsum
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In pulvinar lacus quis arcu blandit, at fermentum risus
                        bibendum.
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
                      padding: "11px 12px 18px"
                    }}
                  >
                    Lorem ipsum
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In pulvinar lacus quis arcu blandit, at fermentum risus
                        bibendum.
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
                      padding: "11px 12px 18px"
                    }}
                  >
                    Lorem ipsum
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In pulvinar lacus quis arcu blandit, at fermentum risus
                        bibendum.
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
                      padding: "11px 12px 18px"
                    }}
                  >
                    Lorem ipsum
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
