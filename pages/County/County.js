import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';

// Services
import getValeTotals from '../../utils/services/ValeService';
import getCitysVale from '../../utils/services/CitysVale';
import getStates from '../../utils/services/StatesService';

// Helpers
import { formatStatesResponse } from '../../utils/helpers/OtherStatesHelper';
import {formatCasesHelper} from '../../utils/helpers/CasesHelper';
import { formatCitiesResponse } from '../../utils/helpers/CitysHelper';

// Styled Components
import {
    ContainerView,
    Title,
    TitleContainer,
    Image,
    CardContainer,
    ViewCustom,
    ViewCounty,
    CityTitle,
    CityUpdate,
    MediumTitle,
    NothingText,
    Message,
    CityField,
    ViewCity
} from './CountyStyles';
import Card from './Card/Card';
import CardBig from './Card/CardBig'
import { Dropdown } from 'react-native-material-dropdown';
import { InputAutoSuggest } from 'react-native-autocomplete-search';
import NumberFormat from 'react-number-format';
import moment from 'moment';

// Styles
import { colors } from '../../styles/colors';
import { normalizeFontSize } from '../../styles/NormalizeFont';

function getPorcentage(deaths, cases){
    if (deaths == 0 && cases == 0){
        return '0%';
    }
    const math = (deaths / cases) * 100;
    const porcentage = parseFloat(math.toFixed(1)) + '%';
    return porcentage;
}

function getPorcentageInfected(habitants, cases){
    if (habitants == 0 && cases == 0){
        return '0%';
    }
    const math = (cases / habitants) * 100;
    const porcentage = parseFloat(math.toFixed(3)) + '%';
    return porcentage;
}

const UFList = new Map();
UFList.set("São Paulo", 35);
UFList.set("Rio de Janeiro", 33);
UFList.set("Ceará", 23);
UFList.set("Pernambuco", 26);
UFList.set("Amazonas", 13);
UFList.set("Bahia", 29);
UFList.set("Maranhão", 21);
UFList.set("Minas Gerais", 31);
UFList.set("Espírito Santo", 32);
UFList.set("Paraná", 41);
UFList.set("Santa Catarina", 42);
UFList.set("Rio Grande do Sul", 43);
UFList.set("Distrito Federal", 53);
UFList.set("Pará", 15);
UFList.set("Rio Grande do Norte", 24);
UFList.set("Amapá", 16);
UFList.set("Goiás", 52);
UFList.set("Paraíba", 25);
UFList.set("Roraima", 14);
UFList.set("Mato Grosso", 51);
UFList.set("Mato Grosso do Sul", 50);
UFList.set("Acre", 12);
UFList.set("Alagoas", 27);
UFList.set("Piauí", 22);
UFList.set("Rondônia", 11);
UFList.set("Sergipe", 28);
UFList.set("Tocantis", 17);

export default function County() {    
    const [data, setData] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCounty, setselectedCounty] = useState('Nenhum');
    const [showThings, setshowThings] = useState(true);
    const [state, setState] = useState([]);
    const [countyDisable, setCountyDisable] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const responseStates = await getStates();
            setState(formatStatesResponse(responseStates));
        }
        fetchData();
    }, []);

    async function fetchCities(value){
        const responseCity = await getCitysVale(UFList.get(value));
        setCities(formatCitiesResponse(responseCity));
    }

    async function fetchValues(value){
        const response = await getValeTotals(value);
        setData(formatCasesHelper(response, value));
    }

    function checkData(data){
        if (data!=null){
            fetchValues(data.name);
            setshowThings(false);
        }
    }
    

    return (
        <>
            <ContainerView>
                <TitleContainer>
                    <Title>Municípios</Title>
                </TitleContainer>
                <CardContainer>
                    <Dropdown
                        label='Estado'
                        fontSize={normalizeFontSize(16)}
                        labelFontSize={normalizeFontSize(16)}
                        data={state}
                        baseColor='#000'
                        containerStyle={{
                            width: '85%',
                            left: '7.5%',
                            top: '-0.5%',
                        }}
                        onChangeText={(value) => {
                            fetchCities(value);
                            setCountyDisable(false);
                        }}
                    />
                        <InputAutoSuggest
                            staticData={cities}
                            antText={"Cidade:"}
                            placeholder={"Nome da Cidade"}
                            onDataSelectedChange={data => checkData(data)}
                        />

                    {showThings && (
                        <ViewCity>
                            <NothingText>
                                Selecione um estado, em seguida, escreva o nome de sua cidade no campo acima.
                            </NothingText>
                            <Image
                                source={require('../../assets/sadface.png')}
                            />
                        </ViewCity>
                    )}

                    {!showThings && (
                        <ViewCounty showsVerticalScrollIndicator={false}>
                            <CityTitle>{data.city}</CityTitle>
                            <CityUpdate>
                                Atualizado em: {moment(data.date).format('DD/MM/YYYY')}
                            </CityUpdate>
                            <ViewCustom>
                                <Card
                                    title='Casos'
                                    info={data.cases}
                                    color={colors.yellow}
                                />
                                <Card
                                    title='Óbitos'
                                    info={data.deaths}
                                    color={colors.redPink}
                                />
                                <Card
                                    title='Mortalidade'
                                    info={getPorcentage(data.deaths, data.cases)}
                                    color={colors.purple}
                                />
                            </ViewCustom>
                            <ViewCustom>
                                <CardBig
                                        title='População Total'
                                        info={<NumberFormat
                                            value={data.habitants}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            renderText={(value) => <Text>{value}</Text>}
                                        />}
                                        color={colors.green}
                                    />
                                <CardBig
                                    title='Contaminados'
                                    info={getPorcentageInfected(data.habitants, data.cases)}
                                    color={colors.redPink}
                                />
                            </ViewCustom>
                            <Message>
                                Os dados só apareceram nos campos quando a Secretária de Sáude do Estado de São Paulo indexar os números da cidade no boletim oficial.
                            </Message>
                        </ViewCounty>
                    )}
                </CardContainer>
            </ContainerView>
        </>
    );
}
