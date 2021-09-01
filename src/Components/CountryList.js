import styled from "styled-components/native";
import localCountryData from "../countryData";
import colourData from "../colourData";
import React from "react";
import images from "../../assets/images/index";
import { aspectRatios } from "../../assets/images/aspectRatio";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { Dimensions } from "react-native";
const SmallCard = styled.View`
  border: ${(props) => props.theme.colors.ui.secondary} 1px solid;
  margin: ${(props) => props.theme.space[3]};
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  align-items: center;
`;
const FlagContainer = styled.Image`
  width: ${(props) => props.flagWidth}px;
  height: ${(props) => props.flagHeight}px;
`;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const CountryList = () => {
  return (
    <View>
      {localCountryData.map((country, index) => {
        const img = images[country.alpha3Code.toLowerCase()];

        const flagAspectRatio = aspectRatios[country.alpha3Code.toLowerCase()];
        /*  const flagWidth = Math.floor(200 * flagAspectRatio);
         */
        const flagWidth =
          windowWidth > windowHeight
            ? Math.floor(windowHeight / 2)
            : Math.floor(windowWidth / 2);
        const flagHeight = Math.floor(flagWidth * (1 / flagAspectRatio));

        console.log(country.name, flagWidth, flagHeight);

        return (
          <SmallCard key={index}>
            <Text>Name: {country.name}</Text>
            <Text>Capital: {country.capital}</Text>
            <FlagContainer
              source={img}
              flagHeight={flagHeight}
              flagWidth={flagWidth}
            />
          </SmallCard>
        );
      })}
    </View>
  );
};
