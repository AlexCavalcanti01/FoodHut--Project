import * as C from './styles';

export const AboutUs = () => {
    const Menu = ['About Us', 'Service Us', 'Contact', 'Company']
    return (
        <C.Container>
            <C.AboutUsTitle>About Us</C.AboutUsTitle>
            <C.AboutUsTexts>{Menu.map((Props) => <C.AboutUsText>{Props.toString()}</C.AboutUsText>)}</C.AboutUsTexts>
        </C.Container>
    );
}   