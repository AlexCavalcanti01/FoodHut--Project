import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
`;
export const FooterArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    padding: 24.2rem 13.5rem 0rem 9.4rem;
`;
export const FooterEnd = styled.div`
    font-size: 1.6rem;
    line-height: 1.9rem;

    color: #FFFFFF;

    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 5;

    text-align: center;

    padding-top: 10.2rem;
`;