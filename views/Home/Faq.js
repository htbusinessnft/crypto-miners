import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
const Faq = () => {
  return (
    <div>
      <Box
        sx={{
          background: "#1F2B3A",
          padding: "80px 10px 80px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Container maxWidth="lg">
          <Fade bottom>
            <Title>Frequently Asked Questions</Title>
          </Fade>
          <Box
            sx={{
              maxWidth: "700px",
              margin: "auto"
            }}
          >
            {data.map((item, index) => {
              return (
                <Fade bottom key={index}>
                  <Accordion
                    sx={{
                      marginBottom: "30px",
                      borderRadius: "8px"
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{color: "#1C232D"}} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography
                        sx={{
                          fontStyle: `normal`,
                          fontWeight: `bold`,
                          fontSize: `22px`,
                          lineHeight: `185.9%`,
                          color: `#1C232D`
                        }}
                      >
                        {item.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontStyle: `normal`,
                          fontWeight: `500`,
                          fontSize: `18px`,
                          lineHeight: `26px`,
                          color: `#1C232D`
                        }}
                      >
                        {item.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Fade>
              );
            })}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Faq;

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
