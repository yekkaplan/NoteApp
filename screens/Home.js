import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ToastAndroid,
  View,
  Image,
} from 'react-native';
import {getCurrentDate} from '../utils/utils';

import Notes from './notes';
import {COLORS, icons} from '../constants';
import Dialog from 'react-native-dialog';
import {connect} from 'react-redux';
import {addNote} from '../actions/action';
import images from '../constants/images';
const Home = props => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState();
  const [note, setNote] = useState();

  const showInputAlert = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const showToast = () => {
    ToastAndroid.show('Alanlar boş olamaz.', ToastAndroid.SHORT);
  };
  const handleAdd = () => {
    if (title != '' && note != '') {
      var newNote = {
        id: props.notes.length + 1,
        title: title,
        note: note,
        date: getCurrentDate(),
      };
      props.addNote(newNote);

      setVisible(false);
      setTitle('');
      setNote('');
    } else {
      showToast();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Image
          source={icons.exit}
          resizeMode="contain"
          style={{
            width: 32,
            height: 32,
            alignContent: 'center',
          }}
        />
        <Text
          style={{fontSize: 20, color: COLORS.black, alignContent: 'center'}}>
          En Harika Notları Oluşturun!
        </Text>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{
            width: 64,
            height: 64,
            alignContent: 'center',
          }}
        />
      </View>
      <Notes noteList={props.notes} />
      <TouchableOpacity onPress={showInputAlert} style={styles.button}>
        <Image
          source={icons.plus}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.backgraound,
          }}
        />
      </TouchableOpacity>

      <Dialog.Container visible={visible}>
        <Dialog.Title>Yeni Not Ekleyin</Dialog.Title>
        <Dialog.Input
          label="Başlık"
          numberOfLines={1}
          multiline={true}
          onChangeText={text => {
            setTitle(text);
          }}
          maxLength={900}></Dialog.Input>
        <Dialog.Input
          label="Notunuz"
          numberOfLines={5}
          multiline={true}
          onChangeText={text => {
            setNote(text);
          }}
          maxLength={900}></Dialog.Input>
        <Dialog.Button label="İptal" onPress={handleCancel} />
        <Dialog.Button label="Ekle" onPress={handleAdd} />
      </Dialog.Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 4,
    backgroundColor: COLORS.backgraound,
    paddingHorizontal: 4,
  },
  appBar: {
    width: '100%',
    height: '10%',
    paddingLeft: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: COLORS.backgraound,
  },
  title: {
    margin: 8,
  },
  titleText: {
    fontWeight: '700',
    fontSize: 22,
    color: COLORS.accent,
  },
  button: {
    borderWidth: 1,
    borderColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: COLORS.accent,
    borderRadius: 100,
  },
});

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, {addNote})(Home);
