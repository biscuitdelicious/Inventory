import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

const getBikeImage = (name) => {
  switch(name) {
    case 'Canyon':
      return 'https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw44d23117/images/full/full_2023_/2024/full_2023_3420-1_sender-cfr-ltd_P10_P5-copy.jpg?sw=750&sfrm=png&q=90&bgcolor=F2F2F2';
    case 'Trek':
      return 'https://www.sefiles.net/images/library/large/trek-x-caliber-9-397982-1.png';
    case 'Specialized S-WORKS':
      return 'https://i.shgcdn.com/3c1b118c-a932-486a-9647-16ce1b15f04c/-/format/auto/-/preview/3000x3000/-/quality/lighter/';
  }
};


export const BikeTemplate = ({ name, weight, material, type }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_top}>
        <Text style={styles.title}>{name}</Text>
        <Image style={styles.bikeImage} src={getBikeImage(name)} />
      </View>

      <View style={styles.container_bottom}>
        <View style={styles.bulletItem}>
          <MaterialCommunityIcons
            name={'weight-kilogram'}
            size={34}
            color="#5B855AFF"
          />
          <View style={styles.infoRow}>
            <Text style={styles.label}>Weight:</Text>
            <Text style={styles.value}>{weight}</Text>
          </View>
        </View>

        <View style={styles.bulletItem}>
          <MaterialCommunityIcons
            name={'alpha-m-circle'}
            size={34}
            color="#3498db"
          />
          <View style={styles.infoRow}>
            <Text style={styles.label}>Material:</Text>
            <Text style={styles.value}>{material}</Text>
          </View>
        </View>

        <View style={styles.bulletItem}>
          <MaterialCommunityIcons
            name={'alpha-t-circle'}
            size={34}
            color="#e74c3c"
          />
          <View style={styles.infoRow}>
            <Text style={styles.label}>Type:</Text>
            <Text style={styles.value}>{type}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(133,121,42,0.26)',
    },

    container_top: {
      height: 300,
      alignItems: "center",
      justifyContent: 'center',
    },

    name: {
      fontFamily: 'Avenir',
      fontSize: 18,
    },

    bikeImage: {
      width: '95%',
      height: 230,
      borderRadius: 20,
      resizeMode: 'stretch'
  },

    title: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#405d65',
      letterSpacing: 2,
      marginVertical: 15,
      fontFamily: 'Avenir Next'
    },

    bulletText: {
      fontSize: 36,
      fontWeight: '500',
      color: '#2c3e50',
      letterSpacing: 0.5,
      lineHeight: 36,
      paddingLeft: 10,
    },

    container_bottom: {
      padding: 20,
      height: 280,
      borderRadius: 15,
      marginTop: 40,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      elevation: 3,
    },

    bulletItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f0',
    },

    infoRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 15,
    },

    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#2c3e50',
      minWidth: 80,
    },

    value: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#34495e',
      flex: 1,
      textAlign: 'right',
      marginRight: 10,
    },
  }
);
