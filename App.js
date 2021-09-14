import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { countryDataWithAllNames } from "./src/countryDataTransform";

import { Searchbar } from "react-native-paper";
import styled, { ThemeProvider } from "styled-components/native";
import theme from "./src/infrastructure/theme/index";
import { CountryFlatList } from "./src/Components/CountryFlatList";
import { deburr } from "lodash";

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
  const onChangeSearch = (query) => {
    setSearchQuery(query);
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

        <CountryFlatList countryData={countryData} />
      </StyledSafeArea>
    </ThemeProvider>
  );
}
