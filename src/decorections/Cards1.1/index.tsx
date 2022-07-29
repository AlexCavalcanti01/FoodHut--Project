import * as C from './styles';

import Card1 from  '../../assets/Card1.1.png';
import Card2 from  '../../assets/Card1.2.png';
import Card3 from  '../../assets/Card1.3.png';
import Card4 from  '../../assets/Card1.4.png';

export const CardsImg1 = () => {
    return (
        <C.Container>
            <C.Img src={Card1} />
            <C.Img src={Card2} />
            <C.Img src={Card3} />
            <C.Img src={Card4} />
        </C.Container>
    );
}