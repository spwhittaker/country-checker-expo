import styled from "styled-components/native";
import React from "react";
import { FlatList } from "react-native";
import { Dimensions } from "react-native";
import { cardSize } from "../countryDataTransform";
import { TouchableOpacity } from "react-native";
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
export const CountryFlatList = ({ countryData, handleCountryPress }) => {
  return (
    <FlatList
      numColumns={2}
      ListEmptyComponent={
        <NoCountries>Sorry, nothing to see here...</NoCountries>
      }
      data={countryData}
      keyExtractor={(item) => item.alpha3Code}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity onPress={() => handleCountryPress(item.alpha3Code)}>
            <SmallCard colors={item.countryColors} cardSize={cardSize}>
              <Title colors={item.countryColors}>{item.name}</Title>
              <Capital colors={item.countryColors}>
                Capital: {item.capital}
              </Capital>
              <Spacer></Spacer>
              <FlagContainer colors={item.countryColors}>
                <Flag
                  source={item.img}
                  flagHeight={item.flagHeight}
                  flagWidth={item.flagWidth}
                />
              </FlagContainer>
            </SmallCard>
          </TouchableOpacity>
        );
      }}
    />
  );
};
