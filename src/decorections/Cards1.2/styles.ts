import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;
export const Span = styled.span`
    color: ${p => p.color};
`;
export const Title = styled.h2`
    padding-top: 15rem;
    padding-bottom: 5rem;

    font-size: 4.8rem;
    line-height: 6.7rem;
    text-align: center;
    text-transform: capitalize;

    color: #ffffff;
`;
export const MenuArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    
    margin-bottom: 10.8rem;
`;

interface Props  {
    idActive: number;
    id: number;
} 

export const MenuItem = styled.button<Props>`
    width: 12rem;
    height: 4.4rem;

    opacity: 0.6;
    border: 0.2rem solid #FFFFFF;
    border-radius: 10rem;

    background: ${p => p.id === p.idActive ? '#F65F5F' : '#0D0D0D'};
    color: #FFFFFF;
`;
export const CardArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.8rem;
    margin-bottom: 6.6rem;
`;
export const Img = styled.img`
    
`;