import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const HeaderComponent = props => (
  <View style={styles.HeaderMain}>
    <Text style={styles.Headertitle}>Quizzy</Text>
    <Text style={styles.HeaderuserName}>{props.username}</Text>
  </View>
);

HeaderComponent.propTypes = {
  username: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  HeaderMain: {
    backgroundColor: 'black',
    width: '100%',
    height: 150,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },

  Headertitle: {
    width: '50%',
    textAlign: 'left',
    paddingLeft: 50,
    color: 'white',
    fontSize: 30,
  },

  HeaderuserName: {
    width: '50%',
    textAlign: 'right',
    paddingRight: 50,
    fontSize: 30,
    color: 'white',
  },
});

export default HeaderComponent;
