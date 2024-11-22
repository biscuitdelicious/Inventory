import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BikeTemplate } from "./BikeTemplate";
import { Ionicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

const Specialized = () => {
  return <BikeTemplate name={'Specialized S-WORKS'} weight={'8.09'} material={'Carbon Fiber'} type={'Road'}/>;
};

const Trek = () => {
  return <BikeTemplate name={'Trek'} weight={'9.12'} material={'Aluminium'} type={'Mountain'}/>;
};

const Canyon = () => {
  return <BikeTemplate name={'Canyon'} weight={12.30} material={'Titanium'} type={'Mountain'}/>;
};

export const BikeScreen = () => {
  return(
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({}) => {
            return <Ionicons
              name='bicycle'
              size={32}
              color='#FFBF1DFF' />;
          },
          headerShown: false,

          tabBarStyle: {
            backgroundColor: '#5b855a',
            height: 80,
            alignItems: 'center',
            borderStartEndRadius: 30,
            borderStartStartRadius: 30
          },
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: 'rgb(255,191,29)',
          tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
        })}
      >
        <Tab.Screen name={'Specialized'} component={(Specialized)}/>
        <Tab.Screen name={'Trek'} component={Trek}/>
        <Tab.Screen name={'Canyon'} component={Canyon}/>
      </Tab.Navigator>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(133,121,42,0.26)',

  },
});