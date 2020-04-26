import React, { useState, useEffect } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
// Styled Components
import {
    Container,
    Title,
    Background,
    LoadWraper,
} from './NewsStyles';

// Components
import NewsCard from './Card/NewsCard';

// Colors
import { colors } from '../../styles/colors';

function empty(){
    return (
        <LoadWraper>
            <ActivityIndicator color={colors.redPink} size={50}/>
        </LoadWraper>

    )
}

const articles_url = 'https://newsapi.org/v2/everything';
const apiKey = '693d7fef99a2444c9aff590e9f9ee574';
const qinTitle = 'covid';
const domains = 'terra.com.br,globo.com';
const pageSize = '10';
const sortBy = 'publishedAt';

export default function News() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getArticles() {
            try {
                let articles = await fetch(`${articles_url}?qinTitle=${qinTitle}&apiKey=${apiKey}&domains=${domains}&pageSize=${pageSize}&sortBy=${sortBy}`);        
                let result = await articles.json();
                articles = null;
                setData(result.articles);
            }
            catch(error) {
                throw error;
            }
        }
        getArticles();
    },[]);

    return (
        <>
            <Background>
                <Title>Últimas notícias</Title>
                    <FlatList
                    ListEmptyComponent={empty}
                    removeClippedSubviews={true}
                    data={data}
                    renderItem={({ item }) => (
                        <Container>
                            <NewsCard
                                title={item.title}
                                image={item.url}
                                description={item.content}
                                author={item.author}
                                url={item.url}
                                publishedAt={item.publishedAt}
                            />
                        </Container>
                    )}
                    />
            </Background>
        </>
    );
}
