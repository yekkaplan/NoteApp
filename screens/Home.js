import React, {useEffect, useState} from 'react';
import {
  homeStylesheet,
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
import {addNote, getNote} from '../actions/action';
import images from '../constants/images';
import {homeStyles} from './styles/styles';

const Home = props => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState();
  const [note, setNote] = useState();

  useEffect(() => {
    props.getNote();

    console.info(props.notes);
  }, []);

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
      <TouchableOpacity onPress={showInputAlert} style={homeStyles.button}>
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
const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, {addNote, getNote})(Home);
