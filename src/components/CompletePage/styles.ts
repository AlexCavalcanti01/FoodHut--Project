import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;
export const Area = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Span = styled.span`
    color: ${p => p.color};
`;
export const Title = styled.h2`
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.7rem;
    text-transform: capitalize;

    color: #FFFFFF;
`;
export const Text = styled.p`
    width: 85.6rem;
    height: 4.8rem;

    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.4rem;
    text-align: center;
    text-transform: capitalize;

    color: #FFFFFF;

    opacity: 0.8;

    padding-top: 2.2rem;
    padding-bottom: 6.6rem;
`;
export const Slider = styled.img`
    align-self: flex-start;
    padding-left: 7rem;
`;
export const BubblesImg = styled.img`
    position: absolute;
    left: 0;
`;
export const RosemaryImg = styled.img`
    position: absolute;
    right: 0;
`;
