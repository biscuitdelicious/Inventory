import { View, StyleSheet, Image, Text, Linking, TouchableOpacity } from "react-native";

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

export const BookPreview = ({title, description, bookLink }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: getBookImage(title) }}
          style={styles.cover}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={10}>
          {description}
        </Text>
        <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL(bookLink)}>
          <Text style={styles.link}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    margin: 16,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  imageContainer: {
    marginRight: 16,
  },
  cover: {
    width: 80,
    height: 120,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: '#7f8c8d',
    lineHeight: 22,
    marginBottom: 12,
  },
  linkButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start'
  },
  link: {
    fontSize: 18,
    letterSpacing: 1.3,
    color: '#ffffff',
    fontWeight: 'condensedBold',
  },
});
