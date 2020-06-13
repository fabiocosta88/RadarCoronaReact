import styled from 'styled-components/native';

// Styles
import { colors } from '../../styles/colors';
import { normalizeFontSize } from '../../styles/NormalizeFont'

export const ViewCustom = styled.View`
    flex-direction: row;
`;

export const ViewCustom1 = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const ViewZap = styled.View`
    flex: 2;
    display: flex;
    width: 80%;
    justify-content: flex-start;
`;



export const ViewCity = styled.View`
    flex: 1;
    top: 10%;
`;

export const ViewCounty = styled.ScrollView`
    top: 5%;
`;

export const ContainerView = styled.View`
    height: 100%;
    background-color: ${colors.primary};
`;

export const Image = styled.Image`
    align-self: center;
    width: 200;
    height: 200;
    top: 5%;
`;

export const MediumTitle = styled.Text`
    color: ${colors.black};
    top: -2%;
    text-align: center;
    font-size: ${normalizeFontSize(24)};
    font-weight: bold;
`;

export const Message = styled.Text`
    color: ${colors.black};
    text-align: center;
    align-self: baseline;
    font-size: ${normalizeFontSize(16)};
`;

export const InfoTitle = styled.Text`
    color: ${colors.black};
    top: -1%;
    text-align: center;
    font-size: ${normalizeFontSize(24)};
    font-weight: bold;
`;

export const CityTitle = styled.Text`
    color: ${colors.black};
    top: -1%;
    left: 5%;
    text-align: center;
    font-size: ${normalizeFontSize(30)};
    font-weight: bold;
`;

export const CityUpdate = styled.Text`
    color: ${colors.black};
    padding-bottom: 5%;
    left: 5%;
    text-align: center;
    font-size: ${normalizeFontSize(14)};
    font-weight: bold;
`;

export const Text = styled.Text`
    color: ${colors.black};
    text-align: center;
    font-size: ${normalizeFontSize(18)};
    font-weight: bold;
`;

export const NothingText = styled.Text`
    color: ${colors.black};
    font-size: ${normalizeFontSize(20)};
    font-weight: bold;
    text-align: center;
`;

export const CardContainer = styled.View`
    background-color: ${colors.white};
    width: 100%;
    flex: 8;
    border-top-right-radius: 20;
    border-top-left-radius: 20;
`;

export const Title = styled.Text`
font-size: ${normalizeFontSize(28)};
    left: 5%;
    font-weight: bold;
    color: ${colors.white};
`;

export const CityField = styled.Text`
font-size: ${normalizeFontSize(20)};
    color: #000;
`;

export const TitleContainer = styled.View`
    flex: 1;
    display: flex;
    width: 80%;
    justify-content: flex-start;
`;
