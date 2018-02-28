import React from 'react';
import PropTypes from 'prop-types';
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
      <div className="leaderBoard-main">
            <div className="leaderBoard-userScore">
                <p className="leaderBoard-text1">Your Score</p>
                <span className="leaderBoard-span1">{this.props.userScore}</span>
                <span className="leaderBoard-span2"> /{this.props.maxScore}</span>
              </div>
            <div className="leaderBoard-content">
                <div className="leaderBoard-text">Leaderboard</div>
                <LeaderTable
                    leaderBoard={this.state.leaderBoard}
                  />
                <button className="leaderBoard-button" onClick={this.changeState}>
                        Play again
                  </button>
              </div>
          </div>
    );
  }
}

LeaderBoard.propTypes = {
  userScore: PropTypes.number.isRequired,
  maxScore: PropTypes.number.isRequired,
};
export default LeaderBoard;


const styles = StyleSheet.create({
  leaderBoardmain: {
    display: flex,
    alignItems: 'initial',
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
  },

  leaderBoardbutton: {
    width: '30%',
    fontSize: 30,
  },

  leaderBoarduserScore: {
    paddingleft: '10%',
  },

  leaderBoardcontent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },

  leaderBoardtext1: {
    color: orange,
    fontWeight: bold,
    fontSize: '150%',
  },

  leaderBoardspan1: {
    fontSize: '250%',
    fontWeight: lighter,
  },

  leaderBoardspan2: {
    fontSize: '150%',
    fontWeight: bold,
  },

  leaderBoardtext: {
    fontWeight: bold,
    fontSize: '150%',
  },

});
