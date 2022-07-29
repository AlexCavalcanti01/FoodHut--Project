import * as C from './styles';

import GarçonImg from '../../assets/GarçonFeliz.png';
import { Buttons } from './components/Buttons';

export const GarçonArea = () => {
    return (
            <C.Container> 
                <C.GarçonArea1>   
                    <C.GarçonImg src={GarçonImg} />
                </C.GarçonArea1>
                <C.GarçonArea2>
                    <C.Title>We are <C.Span color='#F54748' >more</C.Span> than <C.Span color='#FDC55E' >multiple</C.Span> service</C.Title>
                    <C.Text>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</C.Text>
                    <Buttons />
                    <C.AboutUs>About Us</C.AboutUs>
                </C.GarçonArea2>
            </C.Container>
    );
}

