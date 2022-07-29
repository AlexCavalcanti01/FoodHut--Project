import * as C from './styles';

export const GetInTouch = () => {
    return (
        <C.Container>
            <C.GetInTouchTitle>Get in touch</C.GetInTouchTitle>
            <C.GetInTouchText>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor</C.GetInTouchText>
            <C.AreaSubscribe><C.InputSubscribe placeholder='Email' /><C.BntSubscribe>Subscribe</C.BntSubscribe></C.AreaSubscribe>
        </C.Container>
    );
}  