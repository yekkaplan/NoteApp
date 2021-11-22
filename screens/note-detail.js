import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {editNote} from '../actions/action';
import {notDetailStyles} from './styles/styles';

/**
 *
 * @param {Object} props - include obhect and methods
 * @returns
 */
const NoteDetail = props => {
  var [text, onChangeText] = React.useState(props.route.params.note.note);
  var note = props.route.params.note;

  /**
   *
   * @param {String} value - note text
   */
  const stateChangeText = value => {
    onChangeText(value);
    note.note = text;
  };

  /**
   * update note
   */
  const updateNote = () => {
    props.editNote(note);
  };

  return (
    <View style={notDetailStyles.container}>
      <TextInput
        style={notDetailStyles.noteText}
        value={text}
        onChangeText={stateChangeText}
        editable
        onCo
        multiline={true}
        maxLength={9999}
      />

      <TouchableOpacity onPress={updateNote} style={notDetailStyles.button}>
        <Text style={notDetailStyles.buttonText}>Güncelle</Text>
      </TouchableOpacity>
    </View>
  );
};

/**
 *
 * @param {Object} state - include state objects and methods
 * @returns
 */
const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, {editNote})(NoteDetail);
