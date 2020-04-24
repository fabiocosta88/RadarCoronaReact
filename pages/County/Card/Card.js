import React from 'react';

import { Label, Casos, CasosNumber, DataContainer, Color } from './CardStyles';

export default function Card({ title, info, color }) {
    return (
        <Label>
            <Color color={color} />
            <DataContainer>
                <CasosNumber color={color}>{info}</CasosNumber>
                <Casos>{title}</Casos>
            </DataContainer>
        </Label>
    );
}
