import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Main from './pages/Main';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Main,
  }),
);

export default Routes;
