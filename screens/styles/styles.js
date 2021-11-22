import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const homeStyles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    tintColor: COLORS.backgraound,
  },
  logo: {
    width: 64,
    height: 64,
    alignContent: 'center',
  },
  headline1: {fontSize: 20, color: COLORS.black, alignContent: 'center'},
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

export const notDetailStyles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  button: {
    borderWidth: 1,
    borderColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 50,
    backgroundColor: COLORS.accent,
    borderRadius: 100,
  },
  buttonText: {fontSize: 14, fontWeight: '500', color: 'white'},
  noteText: {fontWeight: '600', color: 'black'},
});

export const noteItemStyles = StyleSheet.create({
  noteIcon: {
    width: 16,
    height: 16,
    alignContent: 'center',
  },
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.backgraound,
  },

  titleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    fontSize: 18,
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
