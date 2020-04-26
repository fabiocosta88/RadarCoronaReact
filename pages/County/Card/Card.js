import React, { useEffect, useState } from 'react';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { Label, Casos, CasosNumber, DataContainer, Color } from './CardStyles';

export default function Card({ title, info, color }) {
    const [isShinning, setIsShinning] = useState(false);
    setTimeout(() => {setIsShinning(true)}, 5000)
    return (
        <Label>
            <Color color={color} />
            <DataContainer>
            <ShimmerPlaceHolder
                style={{height: '50%', borderRadius: 15, width: '70%', top: '5%'}}
                autoRun={true}
                visible={isShinning}
            >
                <CasosNumber color={color}>{info}</CasosNumber>
            </ShimmerPlaceHolder>
                <Casos>{title}</Casos>
            </DataContainer>
        </Label>
    );
}
