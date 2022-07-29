import * as C from './styles';

import { CompletePage } from '../CompletePage';
import { Header } from './components/Header';
import { MainSearch } from './components/MainSearch';
import { MainImg } from './components/MainImg';
import { Footer } from '../../decorections/Footer';

import Whitening  from '../../assets/Luz.png';
import Stripes from '../../assets/Stripes.png';
import DownArrow from '../../assets/DownArrow.png';

export const NavePage = () => {
    return (
        <C.Container>
                <Header />
            <C.Downarrow src={DownArrow} />  
            <C.Whitening src={Whitening} />
            <C.Stripes src={Stripes} />
            <C.Main>
                <MainSearch />
                <MainImg />
            </C.Main>
                <CompletePage />
                
        </C.Container>
    );
}