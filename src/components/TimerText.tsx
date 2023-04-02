import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';

function TimerText(props: any): JSX.Element {
  function onDisplayTimeHandler() {
    return (
      <Text style={styles.textContainer}>
        {props.timerTextHr.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}{' '}
        :{' '}
        {props.timerTextMin.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}{' '}
        :{' '}
        {props.timerTextSec.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </Text>
    );
  }
  return <>{onDisplayTimeHandler()}</>;
}

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    color: Colors.textWhiteColor,
    marginVertical: 20,
  },
});

export default TimerText;
