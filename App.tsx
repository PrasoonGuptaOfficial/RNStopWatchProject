import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Colors} from './src/constants/Colors';
import TimerButton from './src/components/TimerButton';
import {AppStrings} from './src/constants/AppString';
import TimerText from './src/components/TimerText';

function App(): JSX.Element {
  const [timerText, setTimerText] = useState({hr: 0, min: 0, sec: 0});
  const [displayTimerButton, setDisplayTimerButton] = useState(false);
  let timeId: any = useRef();
  function onHandleTime() {
    setDisplayTimerButton(true);
    timeId.current = setInterval(() => {
      setTimerText(previousValue => {
        if (previousValue.sec === 60) {
          return {...previousValue, min: previousValue.min + 1, sec: 0};
        }
        if (previousValue.min === 60) {
          return {...previousValue, hr: previousValue.hr + 1, min: 0, sec: 0};
        }
        let newState = {...previousValue, sec: previousValue.sec + 1};
        return newState;
      });
    }, 100);
  }
  function onHandleStopTime() {
    setDisplayTimerButton(false);
    clearInterval(timeId.current);
  }
  function onHandleResetTime() {
    setDisplayTimerButton(false);
    clearInterval(timeId.current);
    setTimerText({hr: 0, min: 0, sec: 0});
  }
  useEffect(() => {
    return () => clearInterval(timeId.current);
  }, []);
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle={'light-content'} />
      <TimerText
        timerTextHr={timerText.hr}
        timerTextMin={timerText.min}
        timerTextSec={timerText.sec}
      />
      {displayTimerButton ? (
        <TimerButton
          buttonText={AppStrings.Stop}
          buttonPressed={() => onHandleStopTime()}
        />
      ) : (
        <TimerButton
          buttonText={AppStrings.Start}
          buttonPressed={() => onHandleTime()}
        />
      )}
      {(timerText.hr !== 0 || timerText.min !== 0 || timerText.sec !== 0) && (
        <TimerButton
          buttonText={AppStrings.Reset}
          buttonPressed={() => onHandleResetTime()}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.mainScreenColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
