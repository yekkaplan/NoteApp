import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {COLORS} from '../constants';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const Notes = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          data={props.noteList}
          renderItem={({item}) => (
            <View
              onPress={() => {
                console.info('test'), navigation.navigate('NoteDetail');
              }}
              style={[
                styles.content,
                item.id % 2 == 0
                  ? {backgroundColor: COLORS.primary}
                  : {backgroundColor: COLORS.primary},
              ]}>
              <Text style={styles.dateText}>{item.date}</Text>

              <Text style={styles.titleText}>{item.title}</Text>

              <TouchableOpacity
                onPress={() => {
                  console.info('test'),
                    navigation.navigate('NoteDetail', {note: item});
                }}>
                <Text style={styles.contentText}>{item.note}</Text>
              </TouchableOpacity>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
          ListFooterComponent={<View style={{height: 20}} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.backgraound,
  },
  content: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    flex: 1,
    borderRadius: 8,
    margin: 2,
    flexDirection: 'column',
  },
  contentText: {
    color: COLORS.black,
    fontWeight: '400',
  },
  titleText: {
    color: COLORS.black,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
    marginTop: 4,
  },
  dateText: {
    color: COLORS.black,
    fontWeight: '300',
    textAlign: 'right',
    marginBottom: 4,
    marginTop: 4,
    marginRight: 4,
    fontSize: 12,
  },
});

export default Notes;
