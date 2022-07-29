import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const GetInTouchTitle = styled.h2`
    font-size: 2.4rem;
    line-height: 3.3rem;

    color: #F65F5F;
`;
export const GetInTouchText = styled.p`
    font-size: 1.8rem;
    line-height: 2.4rem;

    color: #FFFFFF;

    padding-top: 3.7rem;
    padding-bottom: 2.7rem;
`;
export const AreaSubscribe = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`;
export const InputSubscribe = styled.input`
    width: 20.5rem;
    height: 5rem;

    background: rgba(255,255,255, 0.1);
    
    border-radius: 3.8rem;
    padding-left: 2.4rem;

    font-size: 1.4rem;
    line-height: 1.7rem;

    border: none;
    &::placeholder {
        color: #FFFFFF;
       
    }
`;
export const BntSubscribe = styled.button`
    width: 11.8rem;
    height: 5rem;

    background: #F65F5F;
    border-radius: 3.9rem;
`;