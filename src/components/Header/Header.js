import { HeaderWrapper } from './Header.styled';
import {
   HeaderNavigation,
   ALIGN,
   StyledNavigationList as NavigationList,
} from "baseui/header-navigation";
import Logo from '../../assets/logo.svg';
import { BaseProvider, DarkTheme, LightTheme } from "baseui";

const Header = () => (
   <BaseProvider theme={DarkTheme}>
      <HeaderWrapper data-testid="Header">
         <HeaderNavigation>
            <NavigationList $align={ALIGN.left}>
               <img src={Logo} alt="RaidSwift Logo" />
            </NavigationList>
         </HeaderNavigation>
      </HeaderWrapper>
   </BaseProvider>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
