import {ScrollView} from 'react-native';
import { BookScreen } from './Books';

export const Books = () => {
  return (
    <ScrollView style={{backgroundColor: '#85792A42', flex: 1}}>
        <BookScreen
          title={'Ego Is The Enemy'}
          author={'Ryan Holiday'}
          navigateTo={'Ego'}
        />
      <BookScreen
        title={'What Every BODY is Saying'}
        author={'Joe Navarro'}
        navigateTo={'WEBIS'}
      />
      <BookScreen
        title={'Atomic Habits'}
        author={'James Clear'}
        navigateTo={'Atomic Habits'}
      />
      <BookScreen
        title={'Pre-Suasiune'}
        author={'Robert Cialdini'}
        navigateTo={'Pre-Suasiune'}
      />
    </ScrollView>

  );
}
