import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, ToastAndroid, View, Image} from 'react-native';
import {getCurrentDate} from '../utils/utils';
import Notes from './notes';
import {icons} from '../constants';
import Dialog from 'react-native-dialog';
import {connect} from 'react-redux';
import {addNote, getNote} from '../actions/action';
import images from '../constants/images';
import {homeStyles} from './styles/styles';

/**
 *
 * @param {Object} props - include getNote function and object
 * @returns
 */
const Home = props => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState();
  const [note, setNote] = useState();

  useEffect(() => {
    props.getNote();
  }, []);

  /**
   * this function show input alert
   */
  const showInputAlert = () => {
    setVisible(true);
  };

  /**
   *  this function close alert
   */
  const handleCancel = () => {
    setVisible(false);
  };

  /**
   *  this function show  toast messagel
   */
  const showToast = () => {
    ToastAndroid.show('Alanlar boş olamaz.', ToastAndroid.SHORT);
  };

  /**
   *  this function added in state new note
   */
  const handleAdd = () => {
    if (title != '' && note != '') {
      var newNote = {
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
    <View style={homeStyles.container}>
      <View style={homeStyles.appBar}>
        <Image
          source={icons.exit}
          resizeMode="contain"
          style={{
            width: 32,
            height: 32,
            alignContent: 'center',
          }}
        />
        <Text style={homeStyles.headline1}>En Harika Notları Oluşturun!</Text>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={homeStyles.logo}
        />
      </View>
      <Notes noteList={props.notes} />
      <TouchableOpacity onPress={showInputAlert} style={homeStyles.button}>
        <Image
          source={icons.plus}
          resizeMode="contain"
          style={homeStyles.icon}
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

export default connect(mapStateToProps, {addNote, getNote})(Home);
