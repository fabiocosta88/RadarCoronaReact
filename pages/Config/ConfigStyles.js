import styled from 'styled-components/native';

// Styles
import { colors } from '../../styles/colors';
import { normalizeFontSize } from '../../styles/NormalizeFont'

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.primary};
`;

export const Text = styled.Text`
    font-size: ${normalizeFontSize(18)};
    left: 40%;
    flex: 1;
    flex-wrap: wrap;
    top: 1%;
    color: ${colors.black};
`;

export const Link = styled.Text`
    color: blue;
    padding-bottom: 6;
    font-size: ${normalizeFontSize(16)};
    text-align: center;
`;

export const TextModal = styled.Text`
    font-size: ${normalizeFontSize(18)};
    text-align: center;
`;

export const TitleModal = styled.Text`
    font-size: ${normalizeFontSize(24)};
    margin-bottom: 10;
    font-weight: bold;
    text-align: center;
`;

export const Title = styled.Text`
    font-size: ${normalizeFontSize(28)};
    font-weight: bold;
    left: 5%;
    top: 1%;
    padding-bottom: 5%;
    color: ${colors.white};
`;

export const TextButton = styled.Text`
    color: ${colors.white};
    font-weight: bold;
    text-align: center;
    top: 15%;
`;

export const CenteredView = styled.View`
    flex: 1;
    align-items: center;
`;

export const CustomView = styled.View`
    top: 2%;
    width: 98%;
    left: 1%;
`;

export const ItemList = styled.TouchableOpacity`
    flex-direction: row;
`;

export const Separator = styled.View`
    height: 2;
    background-color: ${colors.black};
    width: 90%;
    left: 5%;
    margin-bottom: 5%;
`;

export const ModalView = styled.View`
    background-color: white;
    border-radius: 20;
    elevation: 5;
    height: 310;
    top: 35%;
    width: 90%;
    left: 5%;
`;

export const OpenButton = styled.TouchableHighlight`
    background-color: ${colors.primary};
    border-radius: 20;
    width: 25%;
    height: 12%;
    elevation: 5;
    margin-top: 3%;
`;

export const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 2;
`;
