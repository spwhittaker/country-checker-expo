import styled from "styled-components/native";
import React from "react";
import { Dimensions } from "react-native";
import { cardSize } from "../countryDataTransform";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SmallCard = styled.View`
  border: ${(props) =>
      props.colors.DarkVibrant || props.theme.colors.ui.secondary}
    3px solid;
  margin: ${(props) => props.theme.space[1]};
  padding: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  width: ${cardSize}px;
  height: ${cardSize}px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;
const Flag = styled.Image`
  width: ${(props) => props.flagWidth}px;
  height: ${(props) => props.flagHeight}px;
`;

const FlagContainer = styled.View`
  border: ${(props) =>
      props.colors.DarkVibrant || props.theme.colors.ui.secondary}
    3px solid;
  padding: 5px;
  background-color: ${(props) => props.colors.LightestMuted};
`;
const CardList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.colors.DarkMuted || props.theme.colors.bg.primary};
`;
const Capital = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.colors.DarkMuted || props.theme.colors.bg.primary};
`;
const Spacer = styled.View`
  flex-grow: 1;
`;

const NoCountries = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h3};
  margin: ${(props) => props.theme.space[3]};
`;
export const CountryList = ({ countryData }) => {
  console.log(countryData[0]);
  return (
    <CardList>
      {countryData.length === 0 && (
        <NoCountries>Sorry, nothing to see here...</NoCountries>
      )}
      {countryData.length > 0 &&
        countryData.map((country, index) => {
          return (
            <SmallCard
              key={index}
              colors={country.countryColors}
              cardSize={cardSize}
            >
              <Title colors={country.countryColors}>{country.name}</Title>
              <Capital colors={country.countryColors}>
                Capital: {country.capital}
              </Capital>
              <Spacer></Spacer>
              <FlagContainer colors={country.countryColors}>
                <Flag
                  source={country.img}
                  flagHeight={country.flagHeight}
                  flagWidth={country.flagWidth}
                />
              </FlagContainer>
            </SmallCard>
          );
        })}
    </CardList>
  );
};
