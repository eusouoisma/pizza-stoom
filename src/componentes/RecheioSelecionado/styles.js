import style from 'styled-components';

export const Pizza = style.div`
    margin-bottom: 3rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0.625rem 0px;
    border: 0.0625rem solid rgb(238, 241, 242);
    border-radius: 5px;
    overflow: hidden;
`;

export const Img = style.div`
    min-height: 150px;
    background-size: cover;
`;

export const Name = style.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 100;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #ffffff;
    margin-top: .5rem;
    margin-bottom: .5rem;
`;
