import { useState } from 'react';
import * as C from './styles';

import Card1 from '../../assets/Card2.1.png';
import Card2 from '../../assets/Card2.2.png';
import Card3 from '../../assets/Card2.3.png';
import Card4 from '../../assets/Card2.4.png';
import Card5 from '../../assets/Card2.5.png';
import Card6 from '../../assets/Card2.6.png';
import Card7 from '../../assets/Card2.7.png';
import Card8 from '../../assets/Card2.8.png';

export const CardsImg2 = () => {
    const [click, setClick] = useState(0);

    const Menus = [
        {name:'Ramen', id:0},
        {name:'Breakfast', id:1}, 
        {name:'Lunch', id:2}, 
        {name:'Dinner', id:3}, 
        {name:'Mexican', id:4}, 
        {name: 'Italian', id:5}, 
        {name:'Desserts', id:6}, 
        {name:'Drinks', id:7,}]

    return (
        <C.Container>
            <C.Title><C.Span color='#F54748' >Menu</C.Span> that <C.Span color='#FDC55E' >always</C.Span> make you <br/> fall in <C.Span color='#F54748' >love</C.Span></C.Title>
            <C.MenuArea>{Menus.map((Menu) => <C.MenuItem onClick={()=>setClick(Menu.id)} id={Menu.id} idActive={click}  key={Menu.id}>{Menu.name.toString()}</C.MenuItem>)}</C.MenuArea>
            <C.CardArea>
                <C.Img src={Card1} />
                <C.Img src={Card2} />
                <C.Img src={Card3} /> 
                <C.Img src={Card4} />
            </C.CardArea>
            <C.CardArea>
                <C.Img src={Card5} />
                <C.Img src={Card6} />
                <C.Img src={Card7} />
                <C.Img src={Card8} />
            </C.CardArea>
        </C.Container>
    );
}