import style from 'styled-components';

export const Main = style.div`
    background-color: #DD7600;
    display: flex;
    align-items: center;
    min-height: 130px;
    border-radius: 5px;
    border: solid 1px #ffffff;
    overflow: hidden;
    margin-bottom: 1rem;
    font-weight: 700;
    margin-left: 0;
    margin-right: 0;

    h1 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 700 !important;
        color: #FFFFFF;
        text-transform: uppercase;
    }
`;

export const Img = style.div`
    background-size: cover;
    min-height: 130px;
`;
