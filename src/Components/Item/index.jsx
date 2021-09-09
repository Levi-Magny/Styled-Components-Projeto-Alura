import React from 'react';
import styled from "styled-components";

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;

    .text {
        font-weight: 600;
    }
`;

const Item = ({type, from, value})=>(
    <ItemBox>
        <span className="text">
            {type}
        </span>
        <span>
            {from}
        </span>
        <span>
            {value}
        </span>
    </ItemBox>
);

export default Item;