import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Colors} from '../constants/Colors';

function TimerButton(props: any): JSX.Element {
  return (
    <>
      {props.buttonText === 'Start' ? (
        <Pressable style={styles.buttonContainer} onPress={props.buttonPressed}>
          <Text style={styles.textContainer}>{props.buttonText}</Text>
        </Pressable>
      ) : props.buttonText === 'Reset' ? (
        <Pressable
          style={[styles.buttonContainer, styles.modifiedResetButtonContainer]}
          onPress={props.buttonPressed}>
          <Text
            style={[styles.textContainer, styles.modifiedResetTextContainer]}>
            {props.buttonText}
          </Text>
        </Pressable>
      ) : (
        <Pressable
          style={[styles.buttonContainer, styles.modifiedStopButtonContainer]}
          onPress={props.buttonPressed}>
          <Text
            style={[styles.textContainer, styles.modifiedStopTextContainer]}>
            {props.buttonText}
          </Text>
        </Pressable>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: Colors.startButtonColor,
    borderRadius: 125,
    width: 125,
    height: 125,
    marginBottom: 20,
  },
  textContainer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.startButtonColor,
    textAlign: 'center',
  },
  modifiedStopButtonContainer: {
    borderColor: Colors.stopButtonColor,
  },
  modifiedStopTextContainer: {
    color: Colors.stopButtonColor,
  },
  modifiedResetButtonContainer: {
    borderColor: Colors.resetButtonColor,
  },
  modifiedResetTextContainer: {
    color: Colors.resetButtonColor,
  },
});

export default TimerButton;
