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
    FooterContainer
} from './NewsCardStyles'

function defineAuthor(url){
    if (url.includes('globo')) { 
        return require('../../../assets/g1.png');
    }
    if (url.includes('terra')) {
        return require('../../../assets/terra.png');
    }
    return require('../../../assets/news.png');
}

export default function NewsCard({ title, image, description, author, url, publishedAt }) {
    const date = moment(publishedAt).tz('America/Sao_Paulo').format('DD/MM/YYYY, HH:mm')
    return (
        <>
            <Card style={{
                padding: 10,
                margin: 10,
                height: 100,
                borderRadius: 15,
            }}>
                <TouchableOpacity
                activeOpacity={1.0}
                onPress={() => Linking.openURL(url)}
                style={{flexDirection: 'row'}}
                >
                    <Image
                        source={defineAuthor(image)}
                    />
                    <Title numberOfLines={3}>{title}</Title>
                    <FooterContainer>
                        <Date>Publicado em: {date}</Date>
                    </FooterContainer>
                </TouchableOpacity>
            </Card>
        </>
    );
}
