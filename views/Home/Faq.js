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
                                            expandIcon={<ExpandMoreIcon sx={{color: "#1C232D"}}/>}
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
        title: "CryptoMiners NFT minting",
        description: `You can only mint your Miners exclusively on our website. We will share the exact date and time on Discord. So make sure to join us now by clicking here.`
    },
    {
        title: "What is CryptoMiners ?",
        description: <>
            Welcome @everyone <br/>
            **The CRYPTO MINERS** is a collection of 4,444 unique Miners who unite together on the Ethereum Blockchain.
            ‍ <br/>
            Entering The CRYPTO MINERS team means joining an ambitious group of entrepreneurs all aiming to live a better life by learning and investing their time in precious assets.
            <br/>
            **Earn passive money while you sleep! 💸
            **
            <br/>
            We are very proud to announce that we are the first NFT collection that will be **considered as an asset.**
<br/>
            You can expect to get up to **600$ in passive income **per month from owning one single CRYPTO MINER! Now imagine having 3 Miners and one of them is a rare one, generating up to 1200$ in revenue each month. **That’s a potential 2400$ per month **by investing 0,9 ETH, 4000$ at the time of writing.

        </>
    },
    {
        title: "What is Metamask?",
        description: `Metamask is a crypto wallet that stores your Ethereum, which you need to purchase and mint a CryptoMiners.`
    },
    {
        title: "Where can I see my Champion?",
        description: ` Once you successfully mint a CryptoMiners NFT, you can view it by connecting your crypto wallet to OpenSea.`
    }
];
