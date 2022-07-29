import * as C from './styles';

import { AboutUs } from './components/AboutUs';
import { FoodHut } from './components/FoodHut';
import { Company } from './components/Company';
import { GetInTouch } from './components/GetInTouch';

export const Footer = () => {
    return (
        <C.Container>
            <C.FooterArea>
                <FoodHut />
                <AboutUs />
                <Company />
                <GetInTouch />
                <C.FooterEnd>Copyright © 2022 Foodhut.</C.FooterEnd>
            </C.FooterArea>
        </C.Container>
    );
    
}