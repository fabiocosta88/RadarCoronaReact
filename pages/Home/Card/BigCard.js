import React, { useEffect, useState } from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import { Label, Casos, CasosNumber, NewNumber, DataContainer, Color, LabelRow } from './BigCardStyles';

export default function Card({ title, info, infoplus, color }) {
    const [isShinning, setIsShinning] = useState(false);
    setTimeout(() => {setIsShinning(true)}, 5000);
    return (
        <Label>
            <Color color={color} />
            <DataContainer>
            <ShimmerPlaceHolder
                style={{height: '50%', borderRadius: 15, left: '-5%'}}
                autoRun={true}
                visible={isShinning}
            >
                <LabelRow>
                    <CasosNumber color={color}>{info}</CasosNumber>
                    <NewNumber color={color}>{infoplus}</NewNumber>
                </LabelRow>
            </ShimmerPlaceHolder>
                <Casos>{title}</Casos>
            </DataContainer>
        </Label>
    );
}
