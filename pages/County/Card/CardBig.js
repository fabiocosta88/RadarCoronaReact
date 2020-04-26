import React, { useEffect, useState } from 'react';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { BigLabel, BigCasos, BigCasosNumber, BigDataContainer, BigColor } from './CardStyles';

export default function CardBig({ title, info, color }) {
    const [isShinning, setIsShinning] = useState(false);
    setTimeout(() => {setIsShinning(true)}, 5000)
    return (
        <BigLabel>
            <BigColor color={color} />
            <BigDataContainer>
            <ShimmerPlaceHolder
                style={{height: '50%', borderRadius: 15, width: '80%', top: '5%'}}
                autoRun={true}
                visible={isShinning}
            >
                <BigCasosNumber color={color}>{info}</BigCasosNumber>
                </ShimmerPlaceHolder>
                <BigCasos>{title}</BigCasos>
            </BigDataContainer>
        </BigLabel>
    );
}
