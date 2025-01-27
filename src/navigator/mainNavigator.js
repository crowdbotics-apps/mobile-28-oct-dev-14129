import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen113349Navigator from '../features/BlankScreen113349/navigator';
import BlankScreen013348Navigator from '../features/BlankScreen013348/navigator';
import CopyOfBlankScreen013300Navigator from '../features/CopyOfBlankScreen013300/navigator';
import CopyOfBlankScreen013299Navigator from '../features/CopyOfBlankScreen013299/navigator';
import CopyOfBlankScreen013298Navigator from '../features/CopyOfBlankScreen013298/navigator';
import CopyOfBlankScreen013297Navigator from '../features/CopyOfBlankScreen013297/navigator';
import BlankScreen013290Navigator from '../features/BlankScreen013290/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen113349: { screen: BlankScreen113349Navigator },
BlankScreen013348: { screen: BlankScreen013348Navigator },
CopyOfBlankScreen013300: { screen: CopyOfBlankScreen013300Navigator },
CopyOfBlankScreen013299: { screen: CopyOfBlankScreen013299Navigator },
CopyOfBlankScreen013298: { screen: CopyOfBlankScreen013298Navigator },
CopyOfBlankScreen013297: { screen: CopyOfBlankScreen013297Navigator },
BlankScreen013290: { screen: BlankScreen013290Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
