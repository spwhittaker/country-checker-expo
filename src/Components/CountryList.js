import styled from "styled-components/native";

import colourData from "../colourData";
import React from "react";
import images from "../../assets/images/index";
import { aspectRatios } from "../../assets/images/aspectRatio";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { Dimensions } from "react-native";
import { SvgUri, SvgCssUri } from "react-native-svg";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const cardSize = 180;
const SmallCard = styled.View`
  border: ${(props) => props.theme.colors.ui.secondary} 1px solid;
  margin: ${(props) => props.theme.space[1]};
  padding: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: ${cardSize}px;
  height: ${cardSize}px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;
const FlagContainer = styled.Image`
  width: ${(props) => props.flagWidth}px;
  height: ${(props) => props.flagHeight}px;
`;
const CardList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const Capital = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Spacer = styled.View`
  flex-grow: 1;
`;
export const CountryList = ({ countryData }) => {
  return (
    <CardList>
      {countryData.length === 0 && <Text>Sorry, nothing to see here...</Text>}
      {countryData.length > 0 &&
        countryData.map((country, index) => {
          const img = images[country.alpha3Code.toLowerCase()];

          const flagAspectRatio =
            aspectRatios[country.alpha3Code.toLowerCase()];
          let flagWidth;
          let flagHeight;
          if (flagAspectRatio >= 1) {
            flagWidth = cardSize * 0.8;
            flagHeight = Math.floor(flagWidth * (1 / flagAspectRatio));
          }
          if (flagAspectRatio < 1) {
            flagHeight = cardSize * 0.8;
            flagWidth = Math.floor(flagHeight * flagAspectRatio);
          }

          /*         const flagWidth =
            windowWidth > windowHeight
              ? Math.floor(windowHeight / 2)
              : Math.floor(windowWidth / 2);
          const flagHeight = Math.floor(flagWidth * (1 / flagAspectRatio)); */

          return (
            <SmallCard key={index}>
              <Title>{country.name}</Title>
              <Capital>Capital: {country.capital}</Capital>
              <Spacer></Spacer>
              <FlagContainer
                source={img}
                flagHeight={flagHeight}
                flagWidth={flagWidth}
              />
            </SmallCard>
          );
        })}
    </CardList>
  );
};
