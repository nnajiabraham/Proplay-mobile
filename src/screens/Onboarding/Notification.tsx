import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SafeViewWrapper from '../../components/SafeViewWrapper';
import Header from '../../components/Header';
import {Button} from '../../components/Button';
import {useNavigation} from 'react-navigation-hooks';
import {requestNotifications} from 'react-native-permissions';
import {useDispatch} from 'react-redux';
import {setNotificationSettings} from '../../store/actions/userSettings/actions';

const Notification: React.FC = () => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const actionButtonsHandler = React.useCallback(
    (buttonKey: string) => () => {
      if (buttonKey == 'Allow Notifications') {
        requestNotifications(['alert', 'sound', 'badge']).then(({status}) => {
          dispatch(setNotificationSettings(status));
          navigate('Home');
        });
      }

      if (buttonKey == 'Skip') {
        navigate('Home');
      }
    },
    [dispatch],
  );

  return (
    <SafeViewWrapper removeNotch={true}>
      <View style={styles.container}>
        <Header label={'Turn on notifications'} style={{fontWeight: 'bold'}} />
        <Text style={styles.subHeading}>
          Get the most out of Proplay by getting the newest and most helpful
          tips to help you achieve your goals
        </Text>
        <View style={styles.buttonView}>
          <Button
            touchableProps={{
              onPress: actionButtonsHandler('Allow Notifications'),
            }}
            active={true}
          >
            Allow Notifications
          </Button>
          <TouchableOpacity onPress={actionButtonsHandler('Skip')}>
            <Text style={styles.skipForNowBtn}>Skip For Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeViewWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: '#000000',
    width: 335,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  skipForNowBtn: {
    marginLeft: 21,
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
  },
});

export default Notification;
