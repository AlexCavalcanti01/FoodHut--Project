import styled from "styled-components";

export const Span = styled.span`
    color: ${p => p.color};
`;
export const Container = styled.div`
    width: 40%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    padding-left: 5rem;
    padding-top: 12rem;
`;
export const Title = styled.h1`
    font-style: normal;
    font-weight: 900;
    font-size: 5.8rem;
    line-height: 7.8rem;

    color: #FFFFFF;
    margin: 0;
`;
export const Text = styled.p`
    width: 51.7rem;
    height: 9.6rem;

    font-style: normal;
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 3.2rem;
    letter-spacing: -0.01em;

    padding-top: 2.9rem;
    padding-bottom: 2.7rem;

    color: #FFFFFF;

    opacity: 0.8;
    margin: 0;
`;
export const InputArea = styled.div`
    width: 47.1rem;
    height: 5.4rem;

    background: #0D0D0D;
    border: 0.5px solid #FFFFFF;
    border-radius: 100px;

    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;

    margin-bottom: 3.4rem;
`;
export const SearchWhite = styled.img`
    width:  3rem;
    height: 3rem;
    align-self: center;
    justify-self: center;
`;
export const Input = styled.input`
    width: 95%;
    height: 95%;

    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;
    letter-spacing: -0.01em;

    color: #FFFFFF;

    opacity: 0.5;
    justify-content: flex-start;

    background: #0D0D0D;
    border: none;
`;
export const SearchBlack = styled.img`
    width:  2.2rem;
    height: 2.2rem;
    align-self: center;
    justify-self: center;

    padding: 1.1rem;

    background: #FDCE77;
    border-radius: 100%;

    margin: 0;

`;
export const Buttons = styled.div`
    display: flex;
    gap: 3.1rem;
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
export const Watch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.1rem;
`;
export const WatchImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;

    background: #0D0D0D;
    box-shadow: 0px 15px 30px rgba(223, 105, 81, 0.3);
    border: 0.1rem solid #ffffff;
    border-radius: 100%;

    padding: 1.5rem;
`;
export const WatchText = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 1.7rem;
    line-height: 2.6rem;

    color: #FFFFFF;
`;