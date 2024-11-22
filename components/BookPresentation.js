import {
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { useState, useEffect } from 'react';

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


const BookPreview = ({ title, description, imageUrls }) => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    if (imagesLoaded === imageUrls.length) {
      setAllImagesLoaded(true);
    }
  }, [imagesLoaded, imageUrls.length]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  if (!allImagesLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {imageUrls.map((url, index) => (
        <Image
          key={index}
          source={{ uri: url }}
          style={styles.image}
          onLoad={handleImageLoad}
        />
      ))}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
  textContainer: {
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
  },
});
