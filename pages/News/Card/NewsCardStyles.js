import styled from 'styled-components/native';

// Styles
import { colors } from '../../../styles/colors';
import { normalizeFontSize } from '../../../styles/NormalizeFont'

export const Container = styled.View`
    margin: 10;
    padding: 10;
    width: 100%;
`;

export const TitleContainer = styled.View`
    width: 100%;
`;

export const FooterContainer = styled.View`
    position: absolute;
    flex: 0.1;
    left: 0;
    right: 0;
    bottom: -10;
    background-color: ${colors.white};
    height: 6%;
    border-bottom-left-radius: 10;
    border-bottom-right-radius: 10;
`;

export const Image = styled.Image`
    width: 100%;
    height: 62%;
    border-top-left-radius: 10;
    border-top-right-radius: 10;
`;

export const Text = styled.Text`
    font-size: ${normalizeFontSize(15)};
    text-align: center;
    top: 0.5%;
`;

export const Date = styled.Text`
    color: ${colors.black};
    font-size: ${normalizeFontSize(16)};
    text-align: center;
    top: -50%;
`;

export const Title = styled.Text`
    text-align: center;
    top: 1%;
    font-size: ${normalizeFontSize(18)};
    font-weight: bold;
    flex-direction: row;
    flex-wrap: wrap;
`;


