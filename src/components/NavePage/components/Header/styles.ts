import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 20% 60% 20%;
`;
export const LogoImg = styled.img`
    padding-top: 2rem;
    justify-self: center;
`;
export const MenuItens = styled.div`
    display: flex;
    align-items: center;
    justify-self: center;
    justify-content: flex-end;
    gap: 5.0rem;
`;
export const MenuItem = styled.h3`
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;
    
    color: #FFFFFF;

    text-transform: capitalize;
`;
export const Btn = styled.button`
    width: 16.2rem;
    height: 4.5rem;

    background: #F65F5F;
    border-radius: 10rem;
    
    display: flex;
    justify-self: start;
    align-self: center;
    justify-content: center;
    align-items: center;

    color: #0D0D0D;

    font-style: bold;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;
    text-transform: capitalize;
`;