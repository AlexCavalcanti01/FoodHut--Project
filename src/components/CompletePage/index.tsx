import * as C from './styles';

import SliderImg from '../../assets/slider.png';
import BubblesIcon from '../../assets/Bubbles.png';
import RosemaryIcon from '../../assets/rosemary.png';

import { CardsImg1 } from '../../decorections/Cards1.1';
import { GarçonArea } from '../../decorections/GarçonArea';
import { CardsImg2 } from '../../decorections/Cards1.2';
import { End } from '../../decorections/End';
import { Footer } from '../../decorections/Footer';

export const CompletePage = () => {
    return (
        <C.Container>
            <C.Area>
                <C.Slider src={SliderImg} />
                <C.Title>Today <C.Span color='#F54748' >special</C.Span> offers</C.Title>
                <C.Text><C.BubblesImg src={BubblesIcon} />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</C.Text>
                <CardsImg1 />
                <C.RosemaryImg src={RosemaryIcon} />
                <GarçonArea />
                <CardsImg2 />
                <End />
                <Footer />
            </C.Area>
        </C.Container>
    );
}               