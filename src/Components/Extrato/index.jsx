import React from 'react';
import {extratoLista} from '../../info';
import Items from '../Items';
import { Box, Botao } from '../UI';

function Extrato(){
    return (
        <Box>
            {extratoLista.updates.map(({id, type, from, value, date}) => (
                <Items id={id} type={type} from={from} value={value} date={date} />
            ))}
            <Botao>Ver mais</Botao>
        </Box>
    );
}

export default Extrato;