import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {editNote} from '../actions/action';
import {notDetailStyles} from './styles/styles';
const NoteDetail = props => {
  var [text, onChangeText] = React.useState(props.route.params.note.note);
  var note = props.route.params.note;

  const stateChangeText = value => {
    onChangeText(value);
    note.note = text;
  };

  const updateNote = payload => {
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

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, {editNote})(NoteDetail);
