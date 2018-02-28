import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import MainCard from './login/mainCard';
import LoginPage from './loggedin/loginPage';
import LeaderBoard from './leaderBoard/leaderBoard';

class BodyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: 2,
      username: 'siddharth',
      maxScore: 0,
      userScore: 0,
      userResponse: {},
      totalAnswer: 0,
    };
    this.changeState = this.changeState.bind(this);
    this.setUserName = this.setUserName.bind(this);
    this.setMaxScore = this.setMaxScore.bind(this);
    this.setUserScore = this.setUserScore.bind(this);
    this.updateResponse = this.updateResponse.bind(this);
    this.getResponse = this.getResponse.bind(this);
  }

  setUserName(newUserName) {
    this.setState({
      username: newUserName,
    }, () => {
      console.log('username set');
    });
    this.props.setHeaderText(newUserName);
  }

  setMaxScore(maxScore) {
    this.setState({
      maxScore,
    }, () => {
      console.log('max score set');
    });
  }

  setUserScore(newScore) {
    this.setState({
      userScore: newScore,
    });
  }

  getResponse(oldResponseJSON) {
    console.log(oldResponseJSON);
    const newResponseObject = {};
    Object.keys(oldResponseJSON).map((index) => {
      const { questnid } = oldResponseJSON[index];
      const { answer } = oldResponseJSON[index];
      newResponseObject[questnid] = answer;
    });
    this.setState({
      userResponse: newResponseObject,
    }, () => {
      console.log('new response object: ', newResponseObject);
    });
  }

  updateResponse(questnid, answer) {
    const oldResponse = this.state.userResponse;
    fetch('/submit', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        questnid,
        answer,
      }),
    }).then(() => { });

    oldResponse[questnid] = answer;
    this.setState({
      userResponse: oldResponse,
      totalAnswer: Object.keys(oldResponse).length,
    }, () => {
      console.log('userResponse: ', this.state.userResponse);
      console.log('userName: ', this.state.username);
      console.log('totalAnswer: ', this.state.totalAnswer);
    });
  }

  changeState(newState) {
    this.setState({
      loginStatus: newState,
    });
  }

  render() {
    if (this.state.loginStatus === 1) {
      return (
        <View style={styles.Bodyloggedin}>
          {/* <LoginPage
            changeState={this.changeState}
            username={this.state.username}
            userResponse={this.state.userResponse}
            updateResponse={this.updateResponse}
            totalAnswer={this.state.totalAnswer}
            setUserScore={this.setUserScore}
            setMaxScore={this.setMaxScore}
            getResponse={this.getResponse}
          /> */}
        </View>
      );
    } else if (this.state.loginStatus === 2) {
      return (
        <LeaderBoard
          changeState={this.changeState}
          username={this.state.username}
          maxScore={this.state.maxScore}
          userScore={this.state.userScore}
        />
      );
    }
    return (
      <View style={styles.Bodymain}>
        <MainCard
          changeState={this.changeState}
          setUserName={this.setUserName}
        />
      </View>
    );
  }
}

BodyComponent.propTypes = {
  setHeaderText: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
  Bodymain: {
    backgroundColor: '#161E45',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  Bodyloggedin: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },

  Bodyleaderboard: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
});


export default BodyComponent;
