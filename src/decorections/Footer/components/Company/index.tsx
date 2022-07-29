import * as C from './styles';

export const Company = () => {
    const Menu = ['Partnership', 'Terms of Use', 'Privacy', 'Sitemap']
    return (
        <C.Container>
            <C.CompanyTitle>Company</C.CompanyTitle>
            <C.CompanyTexts>{Menu.map((Props) => <C.CompanyText>{Props.toString()}</C.CompanyText>)}</C.CompanyTexts>
        </C.Container>
    );
}   