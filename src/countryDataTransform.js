import { deburr } from "lodash";
import { images } from "../assets/images";
import { aspectRatios } from "../assets/images/aspectRatio";
import { countryData } from "./countryData";
import { colorData } from "./colourData";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const cardSize =
  windowHeight >= windowWidth ? windowWidth * 0.48 : windowHeight * 0.48;
// export const cardSize = 210;

export const countryDataWithAllNames = countryData.map((country) => {
  const allNames = [country.name];
  country.altSpellings && allNames.push(...country.altSpellings);

  if (country.alpha2Code) {
    allNames.push(country.alpha2Code);
  }
  if (country.alpha3Code) {
    allNames.push(country.alpha3Code);
  }
  if (country.capital) {
    allNames.push(country.capital);
  }
  const deburredAllNames = allNames.map((e) => deburr(e).toLowerCase()).join();
  const lowerCaseAlpha3Code = country.alpha3Code.toLowerCase();
  const img = images[lowerCaseAlpha3Code];
  const flagAspectRatio = aspectRatios[lowerCaseAlpha3Code];
  const countryColors = colorData[lowerCaseAlpha3Code];
  let flagWidth;
  let flagHeight;
  if (flagAspectRatio > 1) {
    flagWidth = cardSize * 0.8;
    flagHeight = Math.floor(flagWidth * (1 / flagAspectRatio));
  }
  if (flagAspectRatio <= 1) {
    flagHeight = cardSize * 0.6;
    flagWidth = Math.floor(flagHeight * flagAspectRatio);
  }
  return {
    ...country,
    deburredAllNames,
    lowerCaseAlpha3Code,
    img,
    flagWidth,
    flagHeight,
    countryColors,
  };
});
