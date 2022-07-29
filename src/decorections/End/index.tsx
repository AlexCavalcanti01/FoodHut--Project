import * as C from './styles';

import GooglePlay from '../../assets/GooglePlay.png';
import AppStore from '../../assets/AppStore.png';
import GarçonPhone from '../../assets/GarçonPhone.png';
import SeekIcon from '../../assets/SeekPng.png';
import CookiesIcon from '../../assets/cookies.png';

export const End = () => {
    return (
        <C.Container>
            <C.EndArea>
                <C.EndTitle>It’s Now <C.Span color='#F54748'>More Easy</C.Span> to <C.Span color='#FDC55E'>Order</C.Span> by Our Mobile <C.Span color='#F54748'>App</C.Span></C.EndTitle>
                <C.EndText>All you need to do is downlode one of the best delivery apps, make a and most companies are opting  for mobile app devlopment for food delivery</C.EndText>
                <C.EndBnts><C.Bnt src={GooglePlay} /><C.Bnt src={AppStore} /></C.EndBnts>
            </C.EndArea>
            <C.EndArea2>
                <C.EndImg src={GarçonPhone} />
                <C.CookiesImg src={CookiesIcon} />
                <C.SeekImg src={SeekIcon} />
            </C.EndArea2>
        </C.Container>
    );
}