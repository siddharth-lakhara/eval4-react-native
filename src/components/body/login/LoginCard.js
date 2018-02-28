import React from 'react';
import {
  StyleSheet,
  View,
  Text,
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
    const input = event.target.value;
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
            <input
              type="text"
              style={styles.LoginCardinput}
              onChange={this.changeHandler}
              value={this.state.userName}
            />
          </View>
          <Button
            style={styles.LoginCardlogin}
            onClick={this.loginFn}
          />Login
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
    width: '50%',
    height: '100%',
    display: 'flex',

  },

  LoginCardaligner: {
    width: '10%',
  },

  LoginCardContents: {
    display: 'flex',
    justifyContent: 'space-around',
    fontSize: 40,
    flex: 1,
    fontWeight: 'bold',
  },

  LoginCardinput: {
    height: 50,
    width: '80%',
    borderWidth: 6,
    borderStyle: 'solid',
    borderColor: 'black',
    fontSize: 30,
  },

  LoginCardlogin: {
    alignSelf: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    width: '40%',
    fontSize: 30,
    borderRadius: 25,
  },

});


export default LoginCard;
