import styled from 'styled-components/native';

// Styles
import { colors } from '../../../styles/colors';
import { normalizeFontSize } from '../../../styles/NormalizeFont'

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
    width: 48;
    height: 48;
`;

export const Date = styled.Text`
    color: ${colors.black};
    font-size: ${normalizeFontSize(16)};
    text-align: center;
    top: -50%;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${normalizeFontSize(18)};
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
`;


