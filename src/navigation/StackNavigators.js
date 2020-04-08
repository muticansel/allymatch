import { createStackNavigator } from 'react-navigation-stack';

import Products from '../components/MainPage'
import SummaryPage from '../components/SummaryPage';

const defaultNavOpt = {
    headerTitleAlign: 'center'
}

export const StackNavigator = createStackNavigator({
    Products,
    Done: SummaryPage
}, {
    defaultNavigationOptions: defaultNavOpt
})