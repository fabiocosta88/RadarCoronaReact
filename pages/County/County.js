import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, TouchableOpacity, Linking } from 'react-native';

// Services
import getValeTotals from '../../utils/services/ValeService';
import getCitysVale from '../../utils/services/CitysVale';
import getStates from '../../utils/services/StatesService';
import getStateData from '../../utils/services/StateService';

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
    ViewCity,
    ViewZap,
    ViewCustom1
} from './CountyStyles';
import Card from './Card/Card';
import CardBig from './Card/CardBig'
import { Dropdown } from 'react-native-material-dropdown';
import { InputAutoSuggest } from 'react-native-autocomplete-search';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import Icon from 'react-native-ionicons'

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

function getPorcentageMessage(deaths, cases){
    if (deaths == 0 && cases == 0){
        return '0%';
    }
    const math = (deaths / cases) * 100;
    const porcentage = parseFloat(math.toFixed(1));
    return porcentage;
}

function getPorcentageInfectedMessage(habitants, cases){
    if (habitants == 0 && cases == 0){
        return '0%';
    }
    const math = (cases / habitants) * 100;
    const porcentage = parseFloat(math.toFixed(3));
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

const statesList = new Map();
statesList.set("São Paulo", "SP");
statesList.set("Rio de Janeiro", "RJ");
statesList.set("Ceará", "CE");
statesList.set("Pernambuco", "PE");
statesList.set("Amazonas", "AM");
statesList.set("Bahia", "BA");
statesList.set("Maranhão", "MA");
statesList.set("Minas Gerais", "MG");
statesList.set("Espírito Santo", "ES");
statesList.set("Paraná", "PR");
statesList.set("Santa Catarina", "SC");
statesList.set("Rio Grande do Sul", "RS");
statesList.set("Distrito Federal", "DF");
statesList.set("Pará", "PA");
statesList.set("Rio Grande do Norte", "RN");
statesList.set("Amapá", "AP");
statesList.set("Goiás", "GO");
statesList.set("Paraíba", "PB");
statesList.set("Roraima", "RR");
statesList.set("Mato Grosso", "MT");
statesList.set("Mato Grosso do Sul", "MS");
statesList.set("Acre", "AC");
statesList.set("Alagoas", "AL");
statesList.set("Piauí", "PI");
statesList.set("Rondônia", "RO");
statesList.set("Sergipe", "SE");
statesList.set("Tocantis", "TO");

export default function County() {    
    const [data, setData] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCounty, setselectedCounty] = useState('Nenhum');
    const [showThings, setshowThings] = useState(true);
    const [state, setState] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        async function fetchData() {
            const responseStates = await getStates();
            setState(formatStatesResponse(responseStates));
        }
        fetchData();
    }, []);

    function shareOnZap(name){
          return '[RadarCorona] Números do Covid-19 em ' + name + ' atualmente são: \n' 
          + '\u2022 ' + data.cases + ' casos;\n'
          + '\u2022 ' + data.deaths + ' óbitos;\n'
          + '\u2022 ' + 'A taxa de letalidade é de ' + getPorcentageMessage(data.deaths, data.cases) + escape('%') +  ';\n'
          + '\u2022 ' + 'A população total é de: ' + data.habitants + ' e ' + getPorcentageInfectedMessage(data.habitants, data.cases) + escape('%') +  ' estão infectados!'
    }

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
            setTitle(data.name);
        }
    }

    async function fetchStateData(name) {
        const response = await getStateData(statesList.get(name));
        setData(formatCasesHelper(response, name));
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
                            fetchStateData(value);
                            fetchCities(value);
                            setTitle(value);
                            setshowThings(false);
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
                            <ViewCustom1>
                                <ViewZap>
                                <CityTitle>{title}</CityTitle>
                                <CityUpdate>
                                    Atualizado em: {moment(data.date).format('DD/MM/YYYY')}
                                </CityUpdate>
                                </ViewZap>
                                <TouchableOpacity
                            onPress={() => Linking.openURL(`whatsapp://send?text=${shareOnZap(title)}`)}
                            style={{
                                alignItems:'center',
                                right: '15%',
                                justifyContent:'center',
                                width:40,
                                height:40,
                                backgroundColor:'#25D366',
                                borderRadius:100,
                                }}
                            >
                                <Icon name="logo-whatsapp"  size={25} color="#fff" />
                            </TouchableOpacity>
                            </ViewCustom1>
                            <ViewCustom>
                                <Card
                                    title='Casos'
                                    info={<NumberFormat
                                        value={data.cases}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        renderText={(value) => <Text>{value}</Text>}
                                    />}
                                    color={colors.primary}
                                />
                                <Card
                                    title='Óbitos'
                                    info={<NumberFormat
                                        value={data.deaths}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        renderText={(value) => <Text>{value}</Text>}
                                    />}
                                    color={colors.redPink}
                                />
                                <Card
                                    title='Letalidade'
                                    info={getPorcentage(data.deaths, data.cases)}
                                    color={colors.purple}
                                />
                            </ViewCustom>
                            <ViewCustom>
                                <CardBig
                                        title='População'
                                        info={<NumberFormat
                                            value={data.habitants}
                                            displayType={'text'}
                                            thousandSeparator={true}
                                            renderText={(value) => <Text>{value}</Text>}
                                        />}
                                        color={colors.green}
                                    />
                                <CardBig
                                    title='Infectados'
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
