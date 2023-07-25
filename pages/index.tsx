import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { GradientBackgroundCon } from "@/components/QuoteGenerator/QuoteGeneratorElements"; // Components
import {
  BackgroundImage1,
  BackgroundImage2,
  FooterCon,
  FooterLink,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorSubTitle,
  QuoteGeneratorTitle,
} from "@/components/QuoteGenerator/QuoteGeneratorElements";
import Clouds1 from "../assets/cloud-and-thunder.png";
import Clouds2 from "../assets/cloudy-weather.png";

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  const [openGenerator, setOpenGenerator] = useState(false);
  const [processingQuote, setProcessingQuote] = useState(false);
  const [quoteReceived, setQuoteReceived] = useState<String | null>(null);
  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        {/* Quote Generator Modal Pop-Up */}
        {/* <QuoteGeneratorModal
          open={openGenerator}
          close={handleCloseGenerator}
          processingQuote={processingQuote}
          setProcessingQuote={setProcessingQuote}
          quoteReceived={quoteReceived}
          setQuoteReceived={setQuoteReceived}
        /> */}

        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>

            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration? Generate a quote card with a
              random inspirational quote provided by{" "}
              <FooterLink
                href="https://zenquotes.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ZenQuotes API
              </FooterLink>
              .
            </QuoteGeneratorSubTitle>

            {
              <GenerateQuoteButton>
                <GenerateQuoteButtonText onClick={null}>
                  Make a Quote
                </GenerateQuoteButtonText>
              </GenerateQuoteButton>
            }
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        {/* Background Images */}
        <BackgroundImage1 src={Clouds1} height="300" alt="cloudybackground1" />

        <BackgroundImage2 src={Clouds2} height="300" alt="cloudybackground1" />

        <FooterCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Made by{" "}
            <FooterLink
              href="https://github.com/mikeycrystal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Michael Crystal{" "}
            </FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>
    </>
  );
}
