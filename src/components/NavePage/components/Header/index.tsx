import * as C from  './styles';

import ImgLogo  from '../../../../assets/Logo.png';

export const Header = () => {
    const Menu = ['Today special offers','Why FoodHut','Our Menu','Our Popular food'];

    return (
        <C.Container>
                <C.LogoImg src={ImgLogo} />
                <C.MenuItens>{Menu.map((Menu) => <C.MenuItem key={Menu}>{Menu.toString()}</C.MenuItem>)}</C.MenuItens>
                <C.Btn>Downlode App</C.Btn>
        </C.Container>
    );
}

