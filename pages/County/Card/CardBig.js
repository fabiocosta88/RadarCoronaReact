import React from 'react';

import { BigLabel, BigCasos, BigCasosNumber, BigDataContainer, BigColor } from './CardStyles';

export default function CardBig({ title, info, color }) {
    return (
        <BigLabel>
            <BigColor color={color} />
            <BigDataContainer>
                <BigCasosNumber color={color}>{info}</BigCasosNumber>
                <BigCasos>{title}</BigCasos>
            </BigDataContainer>
        </BigLabel>
    );
}
