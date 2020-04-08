import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { StackNavigator } from './StackNavigators';

const SwitchNavigator = createSwitchNavigator({
    StackNavigator
})

export default createAppContainer(SwitchNavigator);