import * as C from './styles';

import GirlImg from '../../../../assets/Menina-pizza.png';

export const MainImg = () => {
    return (
        <C.Container>
            <C.GirlImg src={GirlImg} />
        </C.Container>
    );
}