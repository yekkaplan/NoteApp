import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {COLORS} from '../constants';
import {connect, useSelector} from 'react-redux';
import {deleteNote} from '../actions/action';
import {icons} from '../constants';
import {noteItemStyles} from './styles/styles';
/**
 *
 * @param {Object} props - included state method and object
 * @returns
 */
const Notes = props => {
  var notes = useSelector(state => state.notes);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={noteItemStyles.container}>
      <ScrollView>
        <FlatList
          data={notes}
          renderItem={({item}) => (
            <View
              onPress={() => {}}
              style={[
                noteItemStyles.content,
                item.id % 2 == 0
                  ? {backgroundColor: COLORS.primary}
                  : {backgroundColor: COLORS.primary},
              ]}>
              <View style={noteItemStyles.titleRow}>
                <Text style={noteItemStyles.dateText}>{item.date}</Text>
                <Image
                  source={icons.hashtag}
                  resizeMode="contain"
                  style={noteItemStyles.noteIcon}
                />
              </View>
              <Text style={noteItemStyles.titleText}>{item.title}</Text>

              <TouchableOpacity
                onLongPress={() => {
                  props.deleteNote(item);
                }}
                onPress={() => {
                  navigation.navigate('NoteDetail', {note: item});
                }}>
                <Text style={noteItemStyles.contentText}>{item.note}</Text>
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
/**
 *
 * @param {Object} state - include notes and methods
 * @returns
 */
const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, {deleteNote})(Notes);
