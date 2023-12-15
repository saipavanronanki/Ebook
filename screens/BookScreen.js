// BookScreen.js
import React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const data = {
  'విక్రమార్కుడు మరియు బేతాళు': [
    { id: '1', title: 'విక్రమార్కుడు మరియు బేతాళు', content: 'కథలు అంటే ఎవరికీ ఇష్టం ఉండదు చెప్పండి Moral Stories in Telugu లో చదవడానికి చాలా మంది ఇష్టపడతారు అది పిల్లలు కావచ్చు లేదా పెద్దవాళ్ళు కావచ్చు, ఈ నైతిక కథలు ముఖ్యంగా పిల్లల్లో చురుకుదనాన్ని, ఉత్సాహాన్ని కలిగించి వాళ్ళ మెదడును చురుకుగా పని చేయడానికి దోహదపడతాయి, అందుకే ఇలాంటి కథలని ఎక్కువగా పాఠశాలల్లో ఉపాధ్యాయులు పిల్లలకి ఏదైనా ఉదాహరణ రూపంలో చెప్పదలుచుకుంటే ఇలా కథల రూపంలో చెప్తే బాగా గుర్తుపెట్టుకుంటారని అలా చెప్తూ ఉంటారు ఇలా చేయడం వలన వారిలో తెలివితేటలు , జ్ఞాపకశక్తి బాగా పెరగడానికి దోహదపడుతుంది. పాతకాలంలో నానమ్మలు తాతయ్యలు పిల్లలకి ఎన్నో కథలు చెప్పేవారు కానీ ప్రస్తుత కాలంలో అందరూ బిజీ గా ఉండడం వలన పిల్లలకి మోరల్ స్టోరీస్ ఎవ్వరు చెప్పడం లేదు, పిల్లలకి కథలు చెప్పడం వలన వారిలో పఠన శక్తి పెరుగుతుంది అలాగే వారి ప్రేమ అనురాగాలను అందించగలుగుతారు. నిజంగా కథలు చెప్పడం అనేది ఒక కళ మనం ఎక్కడో విన్నదాన్ని చెప్పడం లేదా అప్పటికప్పుడు సృష్టించి చెప్పే కథలు పిల్లల్ని బాగా ఆకట్టుకుంటాయి మరి పిల్లల్లో సృజనాత్మక శక్తి పెంపోంచించాలంటే ఎప్పటికప్పుడు వారికి కథలు చెప్తూ ఉండాలి.కథలు అంటే ఎవరికీ ఇష్టం ఉండదు చెప్పండి Moral Stories in Telugu లో చదవడానికి చాలా మంది ఇష్టపడతారు అది పిల్లలు కావచ్చు లేదా పెద్దవాళ్ళు కావచ్చు, ఈ నైతిక కథలు ముఖ్యంగా పిల్లల్లో చురుకుదనాన్ని, ఉత్సాహాన్ని కలిగించి వాళ్ళ మెదడును చురుకుగా పని చేయడానికి దోహదపడతాయి, అందుకే ఇలాంటి కథలని ఎక్కువగా పాఠశాలల్లో ఉపాధ్యాయులు పిల్లలకి ఏదైనా ఉదాహరణ రూపంలో చెప్పదలుచుకుంటే ఇలా కథల రూపంలో చెప్తే బాగా గుర్తుపెట్టుకుంటారని అలా చెప్తూ ఉంటారు ఇలా చేయడం వలన వారిలో తెలివితేటలు , జ్ఞాపకశక్తి బాగా పెరగడానికి దోహదపడుతుంది. పాతకాలంలో నానమ్మలు తాతయ్యలు పిల్లలకి ఎన్నో కథలు చెప్పేవారు కానీ ప్రస్తుత కాలంలో అందరూ బిజీ గా ఉండడం వలన పిల్లలకి మోరల్ స్టోరీస్ ఎవ్వరు చెప్పడం లేదు, పిల్లలకి కథలు చెప్పడం వలన వారిలో పఠన శక్తి పెరుగుతుంది అలాగే వారి ప్రేమ అనురాగాలను అందించగలుగుతారు. నిజంగా కథలు చెప్పడం అనేది ఒక కళ మనం ఎక్కడో విన్నదాన్ని చెప్పడం లేదా అప్పటికప్పుడు సృష్టించి చెప్పే కథలు పిల్లల్ని బాగా ఆకట్టుకుంటాయి మరి పిల్లల్లో సృజనాత్మక శక్తి పెంపోంచించాలంటే ఎప్పటికప్పుడు వారికి కథలు చెప్తూ ఉండాలి.',
      image: require('../images/item1.jpg') },
    // Add more stories for Book 1 as needed
  ],
  'Book 2': [
    { id: '3', title: 'Story 3', content: 'Sample content for Story 3', image: require('../images/item1.jpg') },
    // Add more stories for Book 2 as needed
  ],
  'Novel 1': [
    { id: '5', title: 'Story 5', content: 'Sample content for Story 5', image: require('../images/item1.jpg') },
     // Add more stories for Novel 1 as needed
  ],
  'Novel 2': [
    { id: '7', title: 'Story 7', content: 'Sample content for Story 7', image: require('../images/item1.jpg') },
     // Add more stories for Novel 2 as needed
  ],
  // Add more books and stories as needed
};

const BookScreen = ({ route }) => {
  const { bookTitle } = route.params;

  const stories = data[bookTitle];

  const renderItem = ({ item }) => (
    <View style={styles.storyItem}>
      <Image source={item.image} style={styles.storyImage} />
      <Text style={styles.storyTitle}>{item.title}</Text>
      <Text >{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.bookTitle}>{bookTitle}</Text>
      <FlatList data={stories} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    height: '100%',
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  storyItem: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    height: '100%',
    borderRadius: 8,
    
  },
  storyImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  storyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BookScreen;
