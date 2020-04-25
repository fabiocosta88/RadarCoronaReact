import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, RefreshControl } from 'react-native';
import NumberFormat from 'react-number-format';
import moment from 'moment';
import tz from 'moment-timezone';

// Services
import getBrazilTotals from '../../utils/services/BrazilService';
import getGlobalTotals from '../../utils/services/GlobalService';
import getCountries from '../../utils/services/CountriesService';
import getCountryData from '../../utils/services/CountryService';

// Helpers
import { formatCountriesResponse } from '../../utils/helpers/CountriesHelper';

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
import BigCard from './Card/BigCard'

// Colors
import { colors } from '../../styles/colors';
import { normalizeFontSize } from '../../styles/NormalizeFont'

export default function Home() {
    const [data, setData] = useState([]);
    const [opacityG, setOpacityG] = useState('0.3');
    const [opacityBr, setOpacityBr] = useState('1');
    const [count, setCount] = useState([]);
    const [dropDisplay, setDropDisplay] = useState('none');
    const [title, setTitle] = useState('Dados gerais');
    const [showDropBrazil, setShowDropBrazil] = useState(true);
    const [showDropGlobal, setShowDropGlobal] = useState(false);
    const [dropValueGlobal, setDropValueGlobal] = useState('');
    const [dropValueBrazil, setDropValueBrazil] = useState('');
    const [labelTopBrazil, setLabelTopBrazil] = useState('-25%');
    const [labelTopGlobal, setLabelTopGlobal] = useState('-25%');
    const [refreshing, setRefreshing] = React.useState(false);

    function wait(timeout) {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
      }      

      const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, [refreshing]);

        useEffect(() => {
        async function fetchData() {
            const response = await getBrazilTotals();
            const responseCoun = await getCountries();
            setData(response);
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
    };

    return (
        <>
            <ContainerView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
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
                    <CardContainer>
                        <BigCard
                            title='Casos'
                            info={
                                <NumberFormat
                                    value={data.cases}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    renderText={(value) => <Text>{value}</Text>}
                                />
                            }
                            infoplus={
                                <NumberFormat
                                value={data.todayCases}
                                displayType={'text'}
                                thousandSeparator={true}
                                renderText={(value) => <Text>+{value} hoje</Text>}
                            />
                            }
                            color={colors.primary}
                        />
                        <BigCard
                            title='Óbitos'
                            info={
                                <NumberFormat
                                    value={data.deaths}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    renderText={(value) => <Text>{value}</Text>}
                                />
                            }
                            infoplus={
                                <NumberFormat
                                value={data.todayDeaths}
                                displayType={'text'}
                                thousandSeparator={true}
                                renderText={(value) => <Text>+{value} hoje</Text>}
                            />
                            }
                            color={colors.redPink}
                        />
                        <Card
                            title='Mortalidade'
                            info={porcentage}
                            color={colors.purple}
                        />
                            <BigCard
                            title='Testes'
                            info={
                                <NumberFormat
                                    value={data.tests}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    renderText={(value) => <Text>{value}</Text>}
                                />
                            }
                            infoplus={
                                <NumberFormat
                                    value={data.testsPerOneMillion}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    renderText={(value) => <Text>{value}/mi</Text>}
                                />
                            }
                            color={colors.green}
                        />
                    </CardContainer>
                </ViewContainer>
            </ContainerView>
        </>
    );
}
