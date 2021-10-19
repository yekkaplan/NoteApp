import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {editNote} from '../actions/action';

const NoteDetail = props => {
  var [text, onChangeText] = React.useState(props.route.params.note.note);
  var note = props.route.params.note;

  const stateChangeText = value => {
    onChangeText(value);
    note.note = text;
    props.editNote(note);
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.noteText}
        value={text}
        onChangeText={stateChangeText}
        editable
        onCo
        multiline={true}
        maxLength={9999}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#F9DEC9',
  },
  noteText: {fontWeight: '600', color: 'black'},
});

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, {editNote})(NoteDetail);
