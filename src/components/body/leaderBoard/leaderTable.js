import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';

class leaderTable extends React.Component {
  render() {
    console.log();
    return (
      this.props.leaderBoard.map((leader, index) => (
        <View style={styles.leaderTablesmain}>
          <Text>
            <Text style={styles.leaderTablesindex}>{index + 1}.</Text>
            <Text style={styles.leaderTablesname}> {leader.username}</Text>
          </Text>
          <Text style={styles.leaderTablesscore}>
            {leader.score}
          </Text>

        </View>
      ))
    );
  }
}

leaderTable.propTypes = {
  leaderBoard: PropTypes.array.isRequired,
};

export default leaderTable;

const styles = StyleSheet.create({
  leaderTablesmain: {
    borderColor: 'black',
    borderStyle: 'solid',
    width: '60%',
    height: '6%',
    backgroundColor: '#3BC0F3',
    fontSize: 12,
    paddingLeft: 9,
    display: 'flex',
    justifyContent: 'space-around',
  },

  leaderTablesname: {
    color: 'white',
  },

  leaderTablesscore: {
    justifyContent: 'flex-end',
    textAlign: 'right',
    width: '50%',
  },

  leaderTablesleft: {
  },

});
