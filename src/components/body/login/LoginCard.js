import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

class LoginCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.loginFn = this.loginFn.bind(this);
  }

  changeHandler(event) {
    const input = event;
    this.setState({
      userName: input,
    }, () => {
      console.log(this.state.userName);
    });
  }

  loginFn() {
    const { userName } = this.state;
    fetch('/login', {
      method: 'POST',
      body: this.state.userName,
    }).then(() => {
      this.setState({
        userName: '',
      });
      this.props.setUserName(userName);
      this.props.changeState(1);
    });
  }

  render() {
    return (
      <View style={styles.LoginCardmain}>
        <View style={styles.LoginCardaligner} />
        <View style={styles.LoginCardContents}>
          <Text style={styles.LoginCardtext1}>
                        Login
          </Text>
          <View>
            <Text style={styles.LoginCardtext2}>Username</Text>
            <TextInput
              type="text"
              style={styles.LoginCardinput}
              onChangeText={this.changeHandler}
              value={this.state.userName}
            />
          </View>
          <Button
            style={styles.LoginCardlogin}
            title="Login"
            onPress={this.loginFn}
          />
        </View>
      </View>
    );
  }
}

LoginCard.propTypes = {
  setUserName: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  LoginCardmain: {
    display: 'flex',
    flex: 1,
  },

  LoginCardaligner: {
    height: '10%',
  },

  LoginCardContents: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  LoginCardinput: {
    height: 20,
    width: '40%',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    fontSize: 10,
  },

  LoginCardlogin: {
    alignSelf: 'center',
    width: '40%',
    fontSize: 30,
  },

  LoginCardtext1: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  LoginCardtext2: {
    fontSize: 15,
    fontWeight: 'bold',
  },

});


export default LoginCard;
