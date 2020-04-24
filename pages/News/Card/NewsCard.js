import React from "react";
import { TouchableOpacity, Linking } from "react-native";

import moment from "moment";
import tz from 'moment-timezone';

//Components
import Card from '../../../Components/Card/Card'

//Styled Components
import {
    Title,
    Image,
    Date,
    TitleContainer,
    FooterContainer
} from './NewsCardStyles'

export default function NewsCard({ title, image, description, author, url, publishedAt }) {

    const date = moment(publishedAt).tz('America/Sao_Paulo').format('DD/MM/YYYY, HH:mm')

    return (
        <>
            <Card style={{
                height: 250,
                flexDirection: 'row',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                margin: 15,
                top: '-3%',
            }}>
                <TouchableOpacity
                activeOpacity={1.0}
                onPress={() => Linking.openURL(url)}
                >
                    <Image
                        source={{
                            uri: image,
                        }}
                    />
                    <TitleContainer>
                        <Title numberOfLines={3}>{title}</Title>
                    </TitleContainer>
                    <FooterContainer>
                        <Date>Publicado em: {date}</Date>
                    </FooterContainer>
                </TouchableOpacity>
            </Card>
        </>
    );
}
