import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { countryDataWithAllNames } from "./src/countryDataTransform";

import { Searchbar } from "react-native-paper";
import styled, { ThemeProvider } from "styled-components/native";
import theme from "./src/infrastructure/theme/index";
import { CountryFlatList } from "./src/Components/CountryFlatList";
import { deburr } from "lodash";
import { DetailedCountryInfo } from "./src/Components/DetailedCountryInfo";

const StyledSafeArea = styled.SafeAreaView`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export default function App() {
  const [countryData, setCountryData] = useState(countryDataWithAllNames);
  const [searchQuery, setSearchQuery] = useState("");
  //TODO const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);
  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCountryPress = (alpha3Code) => {
    setSelectedCountry(
      countryData.find((country) => country.alpha3Code === alpha3Code)
    );
  };

  useEffect(() => {
    const searchText = deburr(searchQuery).toLowerCase();
    const filteredList = countryDataWithAllNames.filter((country) => {
      if (searchQuery === "") {
        return true;
      }

      return country.deburredAllNames.includes(searchText);
    });

    return setCountryData(filteredList);
  }, [searchQuery]);
  return (
    <ThemeProvider theme={theme}>
      <StyledSafeArea>
        <SearchContainer>
          <Searchbar
            placeholder='Search'
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchContainer>
        {selectedCountry && (
          <DetailedCountryInfo selectedCountry={selectedCountry} />
        )}
        <CountryFlatList
          countryData={countryData}
          handleCountryPress={handleCountryPress}
        />
      </StyledSafeArea>
    </ThemeProvider>
  );
}
