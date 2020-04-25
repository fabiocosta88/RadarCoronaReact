import styled from 'styled-components/native';

// Styles
import { colors } from '../../styles/colors';
import { normalizeFontSize } from '../../styles/NormalizeFont'

const handleOpacity = (opacity) => {
    return opacity;
};

const handleDisplay = (display) => {
    return display;
};

export const ContainerView = styled.ScrollView`
    height: 100%;
    background-color: ${colors.primary};
`;

export const ViewContainer = styled.View`
    align-items: center;
    justify-content: center;
`;


export const Text = styled.Text`
    color: ${colors.white};
    font-size: ${normalizeFontSize(20)};
`;

export const CardContainer = styled.View`
    width: 100%;
    margin-top: 4%;
    flex: 8;
`;

export const Title = styled.Text`
    font-size: ${normalizeFontSize(42)};
    left: -5%;
    font-weight: bold;
    margin-bottom: 10%;
    color: ${colors.white};
    opacity: ${({ opacity }) => handleOpacity(opacity)};
`;

export const GlobalTitle = styled.Text`
    font-size: ${normalizeFontSize(42)};
    align-self: flex-start;
    font-weight: bold;
    color: ${colors.white};
    opacity: ${({ opacity }) => handleOpacity(opacity)};
`;

export const TitleContainer = styled.View`
    flex: 2;
    display: flex;
    width: 80%;
    justify-content: flex-start;
`;

export const SubTitle = styled.Text`
    font-size: ${normalizeFontSize(28)};
    top: -5%;
    left: -5%;
    font-weight: bold;
    color: ${colors.white};
`;

export const Updated = styled.Text`
    font-size: ${normalizeFontSize(16)};
    top: -5%;
    left: -5%;
    color: ${colors.white};
`;

export const TitlesContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;
