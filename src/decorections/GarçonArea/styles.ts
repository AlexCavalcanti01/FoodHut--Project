import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;

    padding-top: 20rem;
`;
export const GarçonImg = styled.img`
    position: relative;
    z-index: 2;
`;
export const GarçonArea1 = styled.div`
    width: 50%;
    
`;
export const GarçonArea2 = styled.div`
    width: 50%;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    
    margin-left: -8rem;
    margin-top: 5rem;
`;
export const Span = styled.span`
    color: ${p => p.color};
`;
export const Title = styled.h2`
    width: 45.2rem;
    height: 12.4rem;

    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 129.9%;

    color: #FFFFFF;
`;
export const Text = styled.p`
    width: 69rem;
    height: 7.2rem;

    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;

    color: #FFFFFF;

    opacity: 0.8;

    padding-bottom: 3rem;
    padding-top: 2.1rem;
`;
export const AboutUs = styled.button`
    width: 11.4rem;
    height: 4.5rem;

    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;
    text-transform: capitalize;

    color: #0D0D0D;
    background: #F65F5F;

    border-radius: 10rem;

    text-align: center;

    margin-top: 3.4rem;
`;

