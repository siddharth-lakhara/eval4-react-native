import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const WelcomeCard = () => (
  <View style={styles.WelcomeCardmain}>
    <Text style={styles.WelcomeCardtext1}>
            Welcome
    </Text>
    <Text style={styles.WelcomeCardtext1}>
            to
    </Text>
    <Text style={styles.WelcomeCardtext2}>
            Quizzy!
    </Text>
  </View>

);

const styles = StyleSheet.create({
  WelcomeCardmain: {
    width: '100%',
    backgroundColor: '#3BC0F3',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  WelcomeCardtext1: {
    fontSize: 20,
  },

  WelcomeCardtext2: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeCard;
