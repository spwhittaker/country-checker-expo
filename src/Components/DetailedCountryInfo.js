import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

const Spacer = styled.View`
  padding: 5px;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
  width: 45%;
  height: 0px;
`;

const CountryInfo = styled.View`
  flex-grow: 1;
  z-index: 99;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.View`
  justify-content: space-between;
  flex-direction: row;
  max-width: 300px;
  flex-grow: 0;
`;
const Capital = styled.View`
  justify-content: space-between;
  flex-direction: row;
  max-width: 300px;
  flex-grow: 0;
`;
const NamesBox = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px black solid;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
`;
const NamesHeading = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h3};
`;
const OtherNames = styled.View`
  flex-direction: row;
  justify-content: center;

  flex-wrap: wrap;
  margin: auto;
`;

const Name = styled.Text`
  color: black;
  background-color: pink;
  padding: 5px;
  text-align: center;
  margin: 5px;
  width: 45%;

  flex-grow: 0;
`;

const Button = styled.Button``;

export const DetailedCountryInfo = ({
  selectedCountry,
  handleCountryPress,
}) => {
  const {
    name = "blah",
    capital = "blahtown",
    altSpellings = [
      "bl",
      "ah",
      "foobar",
      "bl",
      "ah",
      "foobar",
      "bl",
      "ah",
      "foobar",
      "bl",
      "ah",
      "foobar",
      "bl",
      "ah",
      "foobar",
      "bl",
      "ah",
      "foobar",
      "bl",
      "ah",
      "foobar",
      "bl",
      "ah",
      "foobar",
      "bl",
      "ah",
      "foobar",
      "bl",
      "ah",
      "foobar",
      "bl",
      "ah",
      "foobar",
      "bl",
      "ah",
      "foobar",
    ],
  } = selectedCountry;
  return (
    <CountryInfo>
      {name && (
        <Title>
          <Text>Country Name: </Text>
          <Text>{name}</Text>
        </Title>
      )}
      {capital.length > 0 && (
        <Capital>
          <Text>Capital City: </Text>
          <Text>{capital}</Text>
        </Capital>
      )}
      {altSpellings.length > 0 && (
        <NamesBox>
          <NamesHeading>Alternative names</NamesHeading>
          <OtherNames>
            {altSpellings.map((otherName, index) => (
              <Name key={index}>{otherName}</Name>
            ))}
            {altSpellings.length % 2 !== 0 && <Spacer />}
          </OtherNames>
        </NamesBox>
      )}
      <TouchableOpacity>
        <Button title='Close' onPress={() => handleCountryPress("")}></Button>
      </TouchableOpacity>
    </CountryInfo>
  );
};
