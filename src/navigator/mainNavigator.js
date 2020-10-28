import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen013298Navigator from '../features/CopyOfBlankScreen013298/navigator';
import CopyOfBlankScreen013297Navigator from '../features/CopyOfBlankScreen013297/navigator';
import CopyOfBlankScreen013296Navigator from '../features/CopyOfBlankScreen013296/navigator';
import BlankScreen013290Navigator from '../features/BlankScreen013290/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen013298: { screen: CopyOfBlankScreen013298Navigator },
CopyOfBlankScreen013297: { screen: CopyOfBlankScreen013297Navigator },
CopyOfBlankScreen013296: { screen: CopyOfBlankScreen013296Navigator },
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
