import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation} from "@react-navigation/native";


const getBookImage = (name) => {
  switch (name) {
    case 'Ego Is The Enemy':
      return 'https://cdn4.libris.ro/img/pozeprod/14168/14167349-1.jpg'
    case 'What Every BODY is Saying':
      return 'https://book2action-5d2aff0.divio-media.net/filer_public/22/fa/22fa00cf-ee7c-4f4d-b679-fbb9adcd6252/what_every_body_is_saying.png'
    case 'Atomic Habits':
      return 'https://media.elefant.ro/mnresize/1000/-/images/63/2010963/atomic-habits-o-cale-usoara-si-eficienta-de-a-ti-forma-obiceiuri-bune-si-a-scapa-de-cele-proaste_1_fullsize.jpg'
    case 'Pre-Suasiune':
      return 'https://media.elefant.ro/mnresize/1000/-/images/24/377424/pre-suasiune-o-metoda-revolutionara-de-a-influenta-si-a-convinge_1_fullsize.jpg'
  }
}


export const BookScreen = ({author, title, navigateTo}) => {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.bookContainer}
        activeOpacity={0.7}
        onPress={() => navigation.navigate(navigateTo)}
      >
        <Image
          src={getBookImage(title)}
          style={styles.bookCover}
        />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle} numberOfLines={2}>{title}</Text>
          <Text style={styles.bookAuthor}>{author}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bookContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
  },
  bookCover: {
    width: 120,
    height: 170,
    borderRadius: 6,
    resizeMode: 'stretch'
  },
  bookInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});