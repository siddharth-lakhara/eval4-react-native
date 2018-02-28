// import React from 'react';
// import PropTypes from 'prop-types';
// import LeaderTable from './leaderTable';
// import './leaderBoard.css';

// class LeaderBoard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             leaderBoard: [],
//         };
//         this.updateLeaderboard = this.updateLeaderboard.bind(this);
//         this.changeState = this.changeState.bind(this);
//     }

//     componentDidMount() {
//         fetch('/leaders')
//             .then(response => response.json())
//             .then((response) => {
//                 this.updateLeaderboard(response);
//             });
//     }

//     changeState() {
//         this.props.changeState(0);
//     }

//     updateLeaderboard(response) {
//         this.setState({
//             leaderBoard: response,
//         }, () => {
//             console.log('now, here: ', this.state.leaderBoard);
//         });
//     }

//     render() {
//         return (
//             <div className="leaderBoard-main">
//                 <div className="leaderBoard-userScore">
//                     <p className="leaderBoard-text1">Your Score</p>
//                     <span className="leaderBoard-span1">{this.props.userScore}</span>
//                     <span className="leaderBoard-span2"> /{this.props.maxScore}</span>
//                 </div>
//                 <div className="leaderBoard-content">
//                     <div className="leaderBoard-text">Leaderboard</div>
//                     <LeaderTable
//                         leaderBoard={this.state.leaderBoard}
//                     />
//                     <button className="leaderBoard-button" onClick={this.changeState}>
//                         Play again
//           </button>
//                 </div>
//             </div>
//         );
//     }
// }

// LeaderBoard.propTypes = {
//     userScore: PropTypes.number.isRequired,
//     maxScore: PropTypes.number.isRequired,
// };
// export default LeaderBoard;


// .leaderBoard - main{
//     display: flex;
//     flex - direction: column;
//     align - items: initial;
//     flex: 1;
//     width: 100 %;
//     justify - content: space - around;
// }

// .leaderBoard - button {
//     border: 2px solid black;
//     width: 30 %;
//     font - size: 30px;
//     border - radius: 25px;
// }

// .leaderBoard - userScore {
//     padding - left: 10 %;
// }

// .leaderBoard - content {
//     display: flex;
//     flex - direction: column;
//     align - items: center;
//     justify - content: space - around;
//     flex: 1;
// }

// .leaderBoard - text1 {
//     color: orange;
//     font - weight: bold;
//     font - size: 150 %;
// }

// .leaderBoard - span1 {
//     font - size: 250 %;
//     font - weight: lighter;
// }

// .leaderBoard - span2 {
//     font - size: 150 %;
//     font - weight: bold;
// }

// .leaderBoard - text {
//     font - weight: bold;
//     font - size: 150 %;
// }
