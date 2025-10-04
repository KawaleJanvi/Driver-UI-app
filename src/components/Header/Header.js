import { HeaderWrapper } from './Header.styled';
import {
   HeaderNavigation,
   ALIGN,
   StyledNavigationList as NavigationList,
} from "baseui/header-navigation";
import Logo from '../../assets/logo.svg';
import { BaseProvider, DarkTheme, useStyletron } from "baseui";

const Header = () => {
   const [css, theme] = useStyletron();

   const headerTheme = {
          Root: {
            style: {
              backgroundColor: theme.colors.teal900, 
            },
          },
        }
   return(
   <BaseProvider theme={DarkTheme}>
      <HeaderWrapper data-testid="Header">
         <HeaderNavigation overrides={headerTheme}>
            <NavigationList $align={ALIGN.left}>
               <img src={Logo} alt="RaidSwift Logo" />
            </NavigationList>
         </HeaderNavigation>
      </HeaderWrapper>
   </BaseProvider>
);
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
