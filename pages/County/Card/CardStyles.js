import styled from 'styled-components/native';

import { colors } from '../../../styles/colors';

export const handleColorType = (color) => {
    return color;
};

export const Label = styled.View`
    align-self: center;
    background-color: ${colors.white};
    width: 30%;
    border-radius: 10px;
    left: 10%;
    margin-right: 2.5%;
    height: 80px;
    margin-bottom: 20px;
    elevation: 6;
`;

export const Casos = styled.Text`
    color: ${colors.black};
    font-weight: bold;
    font-size: 16;
`;

export const CasosNumber = styled.Text`
    color: ${({ color }) => handleColorType(color)};
    font-weight: bold;
    font-size: 28;
`;

export const DataContainer = styled.View`
    width: 75%;
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    top: -60px;
`;

export const Color = styled.View`
    width: 1.5px;
    border: 2px solid ${({ color }) => handleColorType(color)};
    background-color: ${({ color }) => handleColorType(color)};
    height: 40px;
    margin-top: 20px;
    border-radius: 10px;
`;

export const BigLabel = styled.View`
    align-self: center;
    background-color: ${colors.white};
    width: 45%;
    border-radius: 10px;
    left: 10%;
    margin-right: 5%;
    height: 80px;
    margin-bottom: 20px;
    elevation: 6;
`;

export const BigCasos = styled.Text`
    color: ${colors.black};
    font-weight: bold;
    font-size: 16;
`;

export const BigCasosNumber = styled.Text`
    color: ${({ color }) => handleColorType(color)};
    font-weight: bold;
    font-size: 28;
`;

export const BigDataContainer = styled.View`
    width: 75%;
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    top: -60px;
`;

export const BigColor = styled.View`
    width: 1.5px;
    border: 2px solid ${({ color }) => handleColorType(color)};
    background-color: ${({ color }) => handleColorType(color)};
    height: 40px;
    margin-top: 20px;
    border-radius: 10px;
`;
