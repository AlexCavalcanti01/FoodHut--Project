import * as C from './styles';

import FacebookIcon from '../../../../assets/Facebook.png';
import InstagramIcon  from '../../../../assets/instagram.png';
import TwitterIcon from '../../../../assets/Twitter.png';

export const FoodHut = () => {
    return (
        <C.Container>
            <C.FoodhutTitle>Foodhut</C.FoodhutTitle>
            <C.FoodhutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </C.FoodhutText>
            <C.Social>
                <C.Facebook src={FacebookIcon} />
                <C.Instagram src={InstagramIcon} />
                <C.Twitter src={TwitterIcon} />
            </C.Social>
        </C.Container>
    );
}