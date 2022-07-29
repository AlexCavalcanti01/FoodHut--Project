import * as C from './styles';

import IconBnt1 from '../../../../assets/IconBnt1.png';
import IconBnt2 from '../../../../assets/IconBnt2.png';
import IconBnt3 from '../../../../assets/IconBnt3.png';

export const Buttons = () => {
    return (
        <C.Container>
           <C.Btn><C.IconBnt src={IconBnt1} /> Online Order </C.Btn> 
           <C.Btn><C.IconBnt src={IconBnt2} /> 24/7 Service </C.Btn> 
           <C.Btn><C.IconBnt src={IconBnt3} /> Pre-Reservation </C.Btn> 
           <C.Btn><C.IconBnt src={IconBnt3} /> Oragonized Foodhut Place </C.Btn> 
           <C.Btn><C.IconBnt src={IconBnt3} /> Super Chef </C.Btn> 
           <C.Btn><C.IconBnt src={IconBnt3} /> Clean Kitchen </C.Btn>  
        </C.Container>
    );
}