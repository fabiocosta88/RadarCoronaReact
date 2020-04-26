import React from "react";
import { ScrollView, StyleSheet, View } from 'react-native';

// Styled Components
import {
    Text,
    Title,
    TextContainer,
    BigText,
    BigTitle,
    Image,
    Container,
    BigTitleContainer,
    TitleContainer
} from './CaresStyles'

// Custom Components
import Card from '../../Components/Card/Card';
import { colors } from '../../styles/colors'

const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 10,
        height: '7%',
        flexDirection: 'row',
        borderRadius: 15,
    },
    cardTest: {
        margin: 5,
        height: '14%',
        borderRadius: 15,
        margin: 10,
    },
    cardTestBig: {
        margin: 5,
        height: '16%',
        borderRadius: 15,
        margin: 10,
    },
    cardTiny: {
        margin: 5,
        height: '4%',
        borderRadius: 15,
        margin: 10,
    },
});

export default function Cares() {

    return (
        <>
        <View style={{backgroundColor: colors.primary}}>
            <BigTitle>Cuidados e Prevenções</BigTitle>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                paddingBottom : 200,
                backgroundColor: colors.primary}}
            >
                <Container>

                        <Card style={styles.cardTest}>
                            <TitleContainer>
                                <Title>O que é COVID-19?</Title>
                            </TitleContainer>
                            <BigText><B>COVID-19</B> é uma doença causada por um vírus da família dos coronavírus. Registros da doença iniciaram-se no ano de 2019, mas a identificação do agente causador e as consequências dessa infecção ocorreram somente em 2020.</BigText>
                        </Card>

                        <Card style={styles.cardTestBig}>
                            <TitleContainer>
                                <Title>Como é transmitido?</Title>
                            </TitleContainer>
                            <BigText>A transmissão dos coronavírus ocorre pelo <B>ar</B> ou por <B>contato com secreções contaminadas</B>, como:
                                gotículas de saliva, espirro, tosse, contato pessoal, como aperto de mão, contato com superfícies contaminadas, seguido de contato com a boca, nariz ou olhos.
                                </BigText>
                        </Card>

                        <Card style={styles.cardTestBig}>
                            <TitleContainer>
                                <Title>Quais os sintomas?</Title>
                            </TitleContainer>
                            <BigText><B>Febre</B>, <B>cansaço</B> e <B>tosse seca</B> são os principais sintomas apresentados. {"\n"} Alguns indivíduos também têm dores no corpo, coriza, dor de garganta e diarreia. Além disso, segundo a OMS, uma em cada seis pessoas sente dificuldade para respirar.
                                </BigText>
                        </Card>

                        <Card style={styles.cardTiny}>
                            <BigTitleContainer>
                                <Title>Como prevenir o contágio:</Title>
                            </BigTitleContainer>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                source={require('../../assets/cuidado1.png')}
                            />
                            <TextContainer>
                                <BigText>Lave as mãos com água e sabão ou use álcool em gel.</BigText>
                            </TextContainer>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                source={require('../../assets/cuidado2.png')}
                            />
                            <Text>Cubra o nariz e boca ao espirrar ou tossir.</Text>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                source={require('../../assets/cuidado3.png')}
                            />
                            <Text>Evite aglomerações se estiver doente.</Text>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                source={require('../../assets/cuidado4.png')}
                            />
                            <Text>Mantenha os ambientes bem ventilados.</Text>
                        </Card>

                        <Card style={styles.card}>
                            <Image
                                source={require('../../assets/cuidado5.png')}
                            />
                            <Text>Não compartilhe objetos pessoais.</Text>
                        </Card>

                        <Card style={styles.card}>
                            <BigText>A <B>Organização Mundial da Saúde</B> reforça que as medidas de isolamento social são a melhor alternativa pra conter a propagação do vírus.</BigText>
                        </Card>
                    </Container>
                </ScrollView>
            </View>
        </>
    );
}
