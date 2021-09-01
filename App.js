import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, StatusBar, SafeAreaView } from "react-native";
import localCountryData from "./src/countryData";
import colourData from "../country-checker-expo/src/colourData";
import { defaultSearch, nameSearch } from "./src/utils/API";
import { Searchbar } from "react-native-paper";
import styled, { ThemeProvider } from "styled-components/native";
import theme from "./src/infrastructure/theme/index";
import { CountryList } from "./src/Components/CountryList";
const StyledSafeArea = styled.SafeAreaView`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export default function App() {
  const onChangeSearch = (query) => setSearchQuery(query);
  const [searchQuery, setSearchQuery] = useState("");

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
        <ScrollView>
          <CountryList></CountryList>
          <Text>Lorem, ipsum dolor.</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ea.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ea.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ea.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ea.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ea.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ea.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ea.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ea.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ea.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ea.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ea.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ea.
          </Text>
        </ScrollView>
      </StyledSafeArea>
    </ThemeProvider>
  );
}
