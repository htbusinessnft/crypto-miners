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
            Entering The CRYPTO MINERS team means joining an ambitious group of entrepreneurs all aiming to live a
            better life by learning and investing their time in precious assets.
            <br/>
            **Earn passive money while you sleep! 💸
            **
            <br/>
            We are very proud to announce that we are the first NFT collection that will be **considered as an asset.**
            <br/>
            You can expect to get up to **600$ in passive income **per month from owning one single CRYPTO MINER! Now
            imagine having 3 Miners and one of them is a rare one, generating up to 1200$ in revenue each month.
            **That’s a potential 2400$ per month **by investing 0,9 ETH, 4000$ at the time of writing.

        </>
    },
    {
        title: "What is Metamask?",
        description: `Metamask is a crypto wallet that stores your Ethereum, which you need to purchase and mint a CryptoMiners.`
    },
    {
        title: "Where can I see my Champion?",
        description: ` Once you successfully mint a CryptoMiners NFT, you can view it by connecting your crypto wallet to OpenSea.`
    }, {
        title: "WHAT IS CRYPTOCURRENCY MINING?",
        description: `Mining is performed by high-powered computers that solve complex computational math problems, these problems are so complex that they cannot be solved by hand and are complicated enough to tax even incredibly powerful computers. By “mining” cryptocurrency with a computer the miner gets rewarded with the cryptocurrency that they’re mining. This is how miners generate money, by having expensive and powerful computers at home solving these mathematical problems.`
    }, {
        title: "WHAT COMPUTERS DO WE USE?",
        description: `We want to be mining different cryptocurrencies to reduce the risk of investing all the funds into one cryptocurrency, we will mainly be mining Bitcoin and Ethereum. To mine Ethereum we’ll use the RADEON VII, this GPU is one of the best Ethereum miners in the industry. With a Hash rate of 90 mh/s and a power consumption of 300W, building rigs with this GPU is the option we want to go with.

To mine bitcoin we’ll mainly use the Antminer S19j ASIC Pros. The Antminer S19j Pro (100Th) from Bitmain is a high efficiency, high hash rate machine mining SHA-256 algorithm. Produced by Bitmain, the S19j generates a maximum hash rate of 100Th/s and has a power consumption of 3050W.`
    }, {
        title: "HOW WILL THE PROFITS BE SHARED BETWEEN ALL NFT HOLDERS?",
        description: <>
            Here is the most asked question, now that you understand how mining works and how we can generate money with
            it, we’ll explain how all of you will profit from it. There is two ways you will be able to profit from
            buying one of our CRYPTOMINERS.
            <br/>
            Once you will have minted your CRYPTOMINER, you will see if you have a basic one or one that has rare
            assets. Rare assets in our collection will be a gold pick-axe, or bitcoin eyes. If your CRYPTOMINER has both
            you will have a very rare one that will be rewarded more money each month than a basic one. The exact
            revenue generated from each NFT will depend on the exact mint price we’ll set for the public launch.
            We will also do a poll before the launch to know how you’d like the revenue to be distributed (evenly
            between all holders or the rare NFT’s generating a lot and some almost nothing).
            <br/>
            Second way to make money will simply be to resell your CRYPTOMINER. Keep in mind that you are very early in
            the NFT space and our project is the first of it’s kind! Once big investors will understand that our NFT’s
            will generate them money and will be an asset in their portfolio, they will want to buy one, but there is
            only 4,444 available and you’ll be holding one! The demand will be huge with a very little supply, this will
            skyrocket the price of each CRYPTOMINER! Supply and demand baby!
        </>
    },
];
