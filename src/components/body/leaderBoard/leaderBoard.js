import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import LeaderTable from './leaderTable';

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderBoard: [],
    };
    this.updateLeaderboard = this.updateLeaderboard.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    fetch('/leaders')
      .then(response => response.json())
      .then((response) => {
        this.updateLeaderboard(response);
      });
  }

  changeState() {
    this.props.changeState(0);
  }

  updateLeaderboard(response) {
    this.setState({
      leaderBoard: response,
    }, () => {
      console.log('now, here: ', this.state.leaderBoard);
    });
  }

  render() {
    return (
      <View className="leaderBoard-main">
        <View className="leaderBoard-userScore">
          <Text className="leaderBoard-text1">Your Score</Text>
          <Text>
            <Text className="leaderBoard-span1">{this.props.userScore}</Text>
            <Text className="leaderBoard-span2"> /{this.props.maxScore}</Text>
          </Text>
        </View>
        <View className="leaderBoard-content">
          <Text className="leaderBoard-text">Leaderboard</Text>
          <LeaderTable
            leaderBoard={this.state.leaderBoard}
          />
          <Button
            className="leaderBoard-button"
            onPress={this.changeState}
            title="Play again"
          />

        </View>
      </View>
    );
  }
}

LeaderBoard.propTypes = {
  userScore: PropTypes.number.isRequired,
  maxScore: PropTypes.number.isRequired,
  changeState: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  leaderBoardmain: {
    display: 'flex',
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
  },

  leaderBoardbutton: {
    width: '30%',
    fontSize: 30,
  },

  leaderBoarduserScore: {
    paddingLeft: '10%',
  },

  leaderBoardcontent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },

  leaderBoardtext1: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 10,
  },

  leaderBoardspan1: {
    fontSize: 15,
    fontWeight: '100',
  },

  leaderBoardspan2: {
    fontSize: 10,
    fontWeight: 'bold',
  },

  leaderBoardtext: {
    fontWeight: 'bold',
    fontSize: 10,
  },

});

export default LeaderBoard;
