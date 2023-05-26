import styled from "styled-components";

export const Carousel = styled.div`
    .carousel-inner img {
        width: 100%
    }
    .carousel-item img {
        width: 520px;
        height: 440px !important
    }
    .carousel-indicators {
        position: static;
        margin-top: 0px
    }
    .carousel-indicators>li {
        width: 100px
    }
    .carousel-indicators li img {
        display: block;
        opacity: 0.5
    }
    .carousel-indicators li.active img {
        opacity: 1
    }
    .carousel-indicators li:hover img {
        opacity: 0.75
    }
`;