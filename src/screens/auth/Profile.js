import React from 'react';
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
} from 'react-native';
import Logo from '../../components/ui/Logo';
import LoginForm from '../../components/ui/Forms/LoginForm';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileForm from '../../components/ui/Forms/ProfileForm';

// main color #3585BA
// 30% black for links

const Profile = ({props, navigation}) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.profileIconContainer}>
        <MaterialIcons name={'account-outline'} size={150} color={'#2774b8'} />
      </View>
      <ProfileForm />
      {/* <View style={{ height: 60 }} /> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileIconContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Profile;
