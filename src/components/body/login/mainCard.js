import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import LoginCard from './LoginCard';
import WelcomeCard from './WelcomeCard';

const MainCard = props => (
  <View style={styles.loginMainCard}>
    <WelcomeCard />
    <LoginCard
      changeState={props.changeState}
      setUserName={props.setUserName}
    />
  </View>
);


MainCard.propTypes = {
  changeState: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  loginMainCard: {
    display: 'flex',
    backgroundColor: 'white',
    height: '50%',
    width: '70%',

  },
});


export default MainCard;
