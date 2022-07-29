import * as C from './styles';

import SearchWhite from '../../../../assets/SearchWhite.png';
import SearchBlack from '../../../../assets/SearchBlack.png';
import PlayIcon from '../../../../assets/PlayIcon.png';

export const MainSearch = () => {
    return (
        <C.Container>
            <C.Title>We're <C.Span color='#F54748'>Serious</C.Span> For <br/> <C.Span color='#F54748'>Food</C.Span> &amp; <C.Span color='#FDC55E'>Delivery</C.Span>.</C.Title>
            <C.Text>Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.</C.Text>
            <C.InputArea><C.SearchWhite src={SearchWhite} /><C.Input placeholder='Search food' /><C.SearchBlack src={SearchBlack} /> </C.InputArea>
            <C.Buttons><C.Btn>Downlode App</C.Btn><C.Watch><C.WatchImg src={PlayIcon} /><C.WatchText>Watch Video</C.WatchText></C.Watch></C.Buttons>
        </C.Container>
    );
}