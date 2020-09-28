import styled from 'styled-components';

export const BodyStyle = styled.div`
    padding-top: 1rem;
`;

export const Welcome = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;

    span {
        font-weight: 700;
    }
`;

export const Instruction = styled.span`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #ffffff;
`;

export const NextButtonActive = styled.div`
    float: right;
    background: #DD7600;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    color: #ffffff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: .5rem;
    border-radius: 5px;
    cursor: pointer;

    img {
        height: 15px;
        margin-left: 5px;
    }
`;

export const NextButtonDisabled = styled.div`
    float: right;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
        color: #ffffff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    padding: .5rem;
    border-radius: 5px;
    cursor: not-allowed;

    img {
        height: 15px;
        margin-left: 5px;
    }
`;
