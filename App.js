import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {HomeScreen} from "./Screens/Home";
import {BikeScreen} from "./Screens/Bikes";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {FontAwesome} from '@expo/vector-icons';
import {Books} from "./Screens/BookScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {BookPreview} from "./components/BookPresentation";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



const Ego = () => {
  return (
    <BookPreview
      title={'Ego Is The Enemy'}
      description={"As title says, Ego is our enemy in our daily lives. I" +
        " strongly recommend reading it twice, it really helps you how the" +
        " ego is affecting you without you realising it."}
      bookLink={'https://thereadershub.org/wp-content/uploads/2020/07/Ryan_Holiday_Ego_is_the_Enenmyz-lib.org_.pdf'}
    />
  );
}

const WEBIS = () => { // What Every BODY is Saying
  return (
    <BookPreview
      title={'What Every BODY is Saying'}
      description={'A book made to help you understand body language and how' +
        ' to read it.'}
      bookLink={'https://archive.org/details/whateverybodyissayingbyjoenavarro/page/n5/mode/2up'}
    />
  )
}

const Atomic_Habits = () => {
  return (
    <BookPreview
    title={'Atomic Habits'}
    description={'Read if you have bad habits and want to remove/reduce the' +
      ' amount. It helps you identify the good ones and grow other good' +
      ' habits using the good ones you have'}
    bookLink={'https://ia904500.us.archive.org/8/items/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf'}
    />
  );
}

const Pre_Suasiune = () => {
  return (
    <BookPreview
      title={'Pre-Suasiune'}
      description={'TBA. Reading it'}
      bookLink={'https://www.elefant.ro/pre-suasiune-o-metoda-revolutionara-de-a-influenta-si-a-convinge_98d00427-8922-469c-a851-808fcbeb63cc'}
    />

  );
}

const BookStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Book List"
        component={Books}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Ego" component={Ego} />
      <Stack.Screen name='WEBIS' component={WEBIS}/>
      <Stack.Screen name='Atomic Habits' component={Atomic_Habits}/>
      <Stack.Screen name='Pre-Suasiune' component={Pre_Suasiune}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {
            backgroundColor: 'rgb(91,133,90)'
          },
          headerTitleStyle: {
            fontSize: 24,
            fontFamily: 'Avenir'
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{marginLeft: 10}}
            >
              <FontAwesome name="bars" size={24} color="black" />
            </TouchableOpacity>
          )
        })}
      >
        <Drawer.Screen
          options={{
            title: 'Home',
            drawerIcon: ({focused, size, color}) => (
              <FontAwesome
                name="home"
                size={26}
                color={focused ? 'rgb(102,161,101)' : color}
              />
            ),
            drawerLabelStyle: {
              fontSize: 20,
              fontFamily: 'Avenir',
              color: 'black',
              fontWeight: 'bold',
            },
            drawerActiveTintColor: 'green',
          }}
          name={'Home'}
          component={HomeScreen}
        />

        <Drawer.Screen
          options={{
            title: 'Bikes',
            drawerIcon: ({focused, size, color}) => (
              <FontAwesome
                name="bicycle"
                size={26}
                color={focused ? 'rgb(102,161,101)' : color}
              />
            ),
            drawerLabelStyle: {
              fontSize: 20,
              fontFamily: 'Avenir',
              color: 'black',
              fontWeight: 'bold'
            },
            drawerActiveTintColor: 'green'
          }}
          name={'Bikes'}
          component={BikeScreen}
        />

        <Drawer.Screen
          options={{
            title: 'Books',
            drawerIcon: ({focused, size, color}) => (
              <FontAwesome
                name="book"
                size={26}
                color={focused ? 'rgb(102,161,101)' : color}
              />
            ),
            drawerLabelStyle: {
              fontSize: 20,
              fontFamily: 'Avenir',
              color: 'black',
              fontWeight: 'bold'
            },
            drawerActiveTintColor: 'green'
          }}
          name={'Books'}
          component={BookStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
