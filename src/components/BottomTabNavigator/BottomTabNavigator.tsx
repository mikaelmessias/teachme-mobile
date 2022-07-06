import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NotificationScreen from '../../screens/NotificationScreen/NotificationScreen';
import ScheduleScreen from '../../screens/ScheduleScreen/ScheduleScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import {iBottomTabNavigatorParamList} from './interfaces/iBottomTabNavigatorParamList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserTypeEnum} from '../../generated/graphql';
import UserHeader from '../UserHeader/UserHeader';
import {Text} from 'react-native-paper';
import NotificationIcon from '../../assets/svg/bottomTab/notifications.svg';
import NotificationActiveIcon from '../../assets/svg/bottomTab/notifications-active.svg';
import SearchIcon from '../../assets/svg/bottomTab/search.svg';
import SearchActiveIcon from '../../assets/svg/bottomTab/search-active.svg';
import ScheduleIcon from '../../assets/svg/bottomTab/schedule.svg';
import ScheduleActiveIcon from '../../assets/svg/bottomTab/schedule-active.svg';
import ProfileIcon from '../../assets/svg/bottomTab/profile.svg';
import ProfileActiveIcon from '../../assets/svg/bottomTab/profile-active.svg';
import styles from './styles';

const Tab = createBottomTabNavigator<iBottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
  const [userType, setUserType] = useState<UserTypeEnum>(UserTypeEnum.Padawan);

  useEffect(() => {
    (async () => {
      try {
        const storageUserType = await AsyncStorage.getItem('@userType');

        setUserType(storageUserType as UserTypeEnum);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case 'NotificationScreen':
              return focused ? (
                <NotificationActiveIcon />
              ) : (
                <NotificationIcon />
              );
            case 'SearchScreen':
              return focused ? <SearchActiveIcon /> : <SearchIcon />;
            case 'ScheduleScreen':
              return focused ? <ScheduleActiveIcon /> : <ScheduleIcon />;
            case 'ProfileScreen':
              return focused ? <ProfileActiveIcon /> : <ProfileIcon />;
          }
        },
        tabBarLabel: ({focused}) => {
          let tabLabel = '';

          switch (route.name) {
            case 'NotificationScreen':
              tabLabel = 'Notificações';
              break;
            case 'SearchScreen':
              tabLabel = 'Busca';
              break;
            case 'ScheduleScreen':
              tabLabel = 'Agenda';
              break;
            case 'ProfileScreen':
              tabLabel = 'Perfil';
              break;
          }

          return (
            <Text style={styles.getTabLabelStyle(focused)}>{tabLabel}</Text>
          );
        },
        tabBarActiveTintColor: '#6717D1',
        tabBarInactiveTintColor: '#B5B5B5',
        tabBarStyle: styles.tabBar,
        header: () => <UserHeader />,
      })}
    >
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      {userType === UserTypeEnum.Padawan && (
        <Tab.Screen name="SearchScreen" component={ProfileScreen} />
      )}
      <Tab.Screen name="ScheduleScreen" component={ScheduleScreen} />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
