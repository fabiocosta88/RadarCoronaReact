import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import tz from 'moment-timezone';

// Services
import getBrazilTotals from '../../utils/services/BrazilService';
import getGlobalTotals from '../../utils/services/GlobalService';
import getCountries from '../../utils/services/CountriesService';
import getCountryData from '../../utils/services/CountryService';
import getStateData from '../../utils/services/StateService';
import getStates from '../../utils/services/StatesService';

// Helpers
import { formatCountriesResponse } from '../../utils/helpers/CountriesHelper';
import { formatStatesResponse } from '../../utils/helpers/StatesHelper';

// Components
import { Dropdown } from 'react-native-material-dropdown';

// Styled Components
import {
    ContainerView,
    Title,
    TitleContainer,
    ViewContainer,
    SubTitle,
    Updated,
    CardContainer,
    GlobalContainer,
    TitlesContainer,
    GlobalTitle,
} from './HomeStyles';
import Card from './Card/Card';

// Colors
import { colors } from '../../styles/colors';
import { normalizeFontSize } from '../../styles/NormalizeFont'

export default function Home() {
    const [data, setData] = useState([]);
    const [opacityG, setOpacityG] = useState('0.3');
    const [opacityBr, setOpacityBr] = useState('1');
    const [count, setCount] = useState([]);
    const [state, setState] = useState([]);
    const [dropDisplay, setDropDisplay] = useState('none');
    const [title, setTitle] = useState('Dados gerais');
    const [showDropBrazil, setShowDropBrazil] = useState(true);
    const [showDropGlobal, setShowDropGlobal] = useState(false);
    const [dropValueGlobal, setDropValueGlobal] = useState('');
    const [dropValueBrazil, setDropValueBrazil] = useState('');
    const [labelTopBrazil, setLabelTopBrazil] = useState('-25%');
    const [labelTopGlobal, setLabelTopGlobal] = useState('-25%');
    const [ showTests, setShowTests] = useState(true);
    const [shinning, setShinning] = useState(true);

        useEffect(() => {
        async function fetchData() {
            const response = await getBrazilTotals();
            const responseCoun = await getCountries();
            const responseStates = await getStates();
            setData(response);
            setShinning(false);
            setState(formatStatesResponse(responseStates));
            setCount(formatCountriesResponse(responseCoun));
        }
        fetchData();
    }, []);

    const math = (data.deaths / data.cases) * 100;
    const porcentage = parseFloat(math.toFixed(2)) + '%';
    const date = moment(data.Updated)
        .tz('America/Sao_Paulo')
        .format('DD/MM/YYYY, HH:mm');

    async function fetchGlobalData() {
        const response = await getGlobalTotals();
        setData(response);
    }

    async function fetchCountryData(name) {
        const response = await getCountryData(name);
        setData(response);
    }

    async function fetchStateData(name) {
        const response = await getStateData(name);
        setData(response);
    }

    async function fetchData() {
        const response = await getBrazilTotals();
        setData(response);
    }

    const handlePressG = () => {
        fetchGlobalData();
        setOpacityG('1');
        setOpacityBr('0.3');
        setDropDisplay('flex');
        setTitle('Global');
        setShowDropBrazil(false);
        setShowDropGlobal(true);
        setLabelTopBrazil('-25%');
        setLabelTopGlobal('-25%');
        setShowTests(true);
        setDropValueGlobal('');
    };

    const handlePressBr = () => {
        fetchData();
        setOpacityBr('1');
        setOpacityG('0.3');
        setTitle('Dados gerais');
        setDropDisplay('none');
        setShowDropGlobal(false);
        setShowDropBrazil(true)
        setLabelTopGlobal('-25%');
        setLabelTopBrazil('-25%');
        setDropValueBrazil('');
        setShowTests(true);
    };

    const statesList = new Map();
    statesList.set("São Paulo", "sp");
    statesList.set("Rio de Janeiro", "rj");
    statesList.set("Ceará", "ce");
    statesList.set("Pernambuco", "pe");
    statesList.set("Amazonas", "am");
    statesList.set("Bahia", "ba");
    statesList.set("Maranhão", "ma");
    statesList.set("Minas Gerais", "mg");
    statesList.set("Espírito Santo", "es");
    statesList.set("Paraná", "pr");
    statesList.set("Santa Catarina", "sc");
    statesList.set("Rio Grande do Sul", "rs");
    statesList.set("Distrito Federal", "df");
    statesList.set("Pará", "pa");
    statesList.set("Rio Grande do Norte", "rn");
    statesList.set("Amapá", "ap");
    statesList.set("Goiás", "go");
    statesList.set("Paraíba", "pb");
    statesList.set("Roraima", "rr");
    statesList.set("Mato Grosso", "mt");
    statesList.set("Mato Grosso do Sul", "ms");
    statesList.set("Acre", "ac");
    statesList.set("Alagoas", "al");
    statesList.set("Piauí", "pi");
    statesList.set("Rondônia", "ro");
    statesList.set("Sergipe", "se");
    statesList.set("Tocantis", "to");

    return (
        <>
            <ContainerView>
                <ViewContainer>
                    <TitleContainer>
                        <TitlesContainer>
                        <TouchableOpacity onPress={() => handlePressBr()}>
                            <Title opacity={opacityBr}>Brasil</Title>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlePressG()}>
                                <GlobalTitle opacity={opacityG}>Global</GlobalTitle>
                            </TouchableOpacity>
                        </TitlesContainer>
                        <SubTitle>{title}</SubTitle>
                        <Updated>Atualizado em: {date}</Updated>
                    </TitleContainer>
                    {showDropGlobal && (
                            <Dropdown
                                label='Selecione um país:'
                                fontSize={normalizeFontSize(16)}
                                itemCount={8}
                                labelFontSize={normalizeFontSize(16)}
                                data={count}
                                value={dropValueGlobal}
                                useNativeDriver={true}
                                baseColor='#000'
                                pickerStyle={{
                                    width: '90%',
                                    left: '5%',
                                }}
                                labelTextStyle={{
                                    top: '10%',
                                    fontWeight: 'bold',
                                }}
                                inputContainerStyle={{
                                    width: '80%',
                                    left: '10%',
                                    top: labelTopGlobal,
                                }}
                                containerStyle={{
                                    width: '90%',
                                    height: '8%',
                                    alignContent: 'center',
                                    top: '-1%',
                                    backgroundColor: '#fff',
                                    borderRadius: 25,
                                    marginTop: 15,
                                }}
                                onChangeText={(value) => {
                                    setDropValueGlobal(value);
                                    setLabelTopGlobal('-15%');
                                    setTitle(value);
                                    fetchCountryData(value);
                                }}
                            />
                    )}

                        {showDropBrazil && (
                            <Dropdown
                                label='Selecione um estado:'
                                fontSize={normalizeFontSize(16)}
                                itemCount={8}
                                labelFontSize={normalizeFontSize(16)}
                                data={state}
                                value={dropValueBrazil}
                                useNativeDriver={true}
                                baseColor='#000'
                                pickerStyle={{
                                    width: '90%',
                                    left: '5%',
                                }}
                                labelTextStyle={{
                                    top: '10%',
                                    fontWeight: 'bold',
                                }}
                                inputContainerStyle={{
                                    width: '80%',
                                    left: '10%',
                                    top: labelTopBrazil,
                                }}
                                containerStyle={{
                                    width: '90%',
                                    height: '8%',
                                    alignContent: 'center',
                                    top: '-1%',
                                    backgroundColor: '#fff',
                                    borderRadius: 25,
                                    marginTop: 15,
                                }}
                                onChangeText={(value) => {
                                    setDropValueBrazil(value);
                                    setLabelTopBrazil('-15%');
                                    setTitle(value);
                                    if (value == 'Geral'){
                                        fetchData();
                                        setShowTests(true);
                                    }else{
                                        fetchStateData(statesList.get(value));
                                        setShowTests(false);
                                    }
                                }}
                            />
                    )}
                    <CardContainer>
                        <Card
                            title='Casos confirmados'
                            info={
                                <NumberFormat
                                    value={data.cases}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    renderText={(value) => <Text>{value}</Text>}
                                />
                            }
                            color={colors.yellow}
                        />
                        <Card
                            title='Óbitos'
                            info={
                                <NumberFormat
                                    value={data.deaths}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    renderText={(value) => <Text>{value}</Text>}
                                />
                            }
                            color={colors.redPink}
                        />
                        <Card
                            title='Mortalidade'
                            info={porcentage}
                            color={colors.purple}
                        />
                        {showTests && (
                            <Card
                            title='Testes realizados'
                            info={
                                <NumberFormat
                                    value={data.tests}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    renderText={(value) => <Text>{value}</Text>}
                                />
                            }
                            color={colors.green}
                        />
                    )}

                    </CardContainer>
                </ViewContainer>
            </ContainerView>
        </>
    );
}
