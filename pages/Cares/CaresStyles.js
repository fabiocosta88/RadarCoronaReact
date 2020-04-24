import styled from 'styled-components/native';

// Styles
import { colors } from '../../styles/colors';
import { normalizeFontSize } from '../../styles/NormalizeFont'

export const Container = styled.View`
      flex: 1;
      align-items: center;
      top: 1%;
`;

export const Image = styled.Image`
    height: 60;
    width: 60;
`;

export const Text = styled.Text`
    color: #000;
    font-size: ${normalizeFontSize(18)};
    text-align: center;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Title = styled.Text`
    color: ${colors.white};
    font-size: ${normalizeFontSize(22)};
    font-weight: bold;
    text-align: center;
    top: 20%;
`;

export const BigTitle = styled.Text`
    font-size: ${normalizeFontSize(28)};
    font-weight: bold;
    left: 5%;
    top: 1%;
    padding-bottom: 5%;
    color: ${colors.white};
    background-color: ${colors.primary};
`;

export const BigText = styled.Text`
    color: #000;
    font-size: ${normalizeFontSize(15)};
    text-align: center;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    top: 1%;
`;

export const BoldText = styled.Text`
    font-weight: bold;
`;

export const TextContainer = styled.View`
    width: 0;
    flex-grow: 1;
`;

export const TitleContainer = styled.View`
    background-color: ${colors.redPink};
    height: 30%;
    border-top-left-radius: 15;
    border-top-right-radius: 15;
`;

export const BigTitleContainer = styled.View`
    background-color: ${colors.redPink};
    height: 100%;
    border-radius: 15;
`;


