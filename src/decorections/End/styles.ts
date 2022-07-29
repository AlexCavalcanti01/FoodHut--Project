import styled from "styled-components";

export const Span = styled.span`
    color: ${p => p.color};
`;
export const Container = styled.div`
    width: 100%;
    position: relative;
    
    display: flex;
    padding-top: 20rem;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(253,197,94,0.1) 73.18%);
`;
export const EndArea = styled.div`
    width: 40%;
    
    display: flex;
    flex-direction: column;
    padding-left: 7rem;
`;
export const EndArea2 = styled.div`
    padding-left: 3.5rem;
`;
export const EndTitle = styled.h2`
    width: 64.3rem;
    height: 13.4rem;

    font-size: 4.8rem;
    line-height: 6.7rem;

    color: #FFFFFF;
`;
export const EndText = styled.p`
    width: 55rem;
    height: 7.2rem;

    font-size: 1.8rem;
    line-height: 2.4rem;

    color: #FFFFFF;

    opacity: 0.8;
`;
export const EndBnts = styled.div`
    display: flex;
    gap: 2.7rem;
`;
export const Bnt = styled.img``;
export const EndImg = styled.img``;
export const CookiesImg = styled.img`
    position: absolute;
    z-index: 2;

    top: 0;
    right: 0;
`;
export const SeekImg = styled.img`
    position: absolute;
    z-index: 2;

    right: 10rem;
    bottom: -8rem;
`;