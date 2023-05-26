import styled from "styled-components";

export const Card = styled.div`
    color: #000000;
    :hover {
        transform: scale(1.02) perspective(0px);
        box-shadow: 0 10px 10px rgba(255,0,0,.7);
     }
    .title {
        font-weight: 800;
    }
    .price {
        font-weight: 800;
    }
`;