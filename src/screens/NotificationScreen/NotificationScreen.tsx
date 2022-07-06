import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {FlatList, Text, View} from 'react-native';
import ItemNotification from '../../components/ItemNotification/ItemNotification';
import ItemSolicitation from '../../components/ItemSolicitation/ItemSolicitation';
import Carousel from 'react-native-snap-carousel';

import {styles} from './styles';

import {ITEM_WIDTH, SLIDER_WIDTH} from './utils';
import {
  BookingStatusEnum,
  useListAllBookingsByJediIdLazyQuery,
  useListAllBookingsByPadawanIdLazyQuery,
  UserTypeEnum,
  useUpdateBookingStatusMutation,
} from '../../generated/graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {getBookingStatus} from '../../helpers/bookingStatus';
import {iCarouselRenderItem} from '../../helpers/iCarouselProps';
import {iNotificationCarouselItem} from './interfaces/iNotificationCarouselItem';

const NotificationScreen: FunctionComponent = () => {
  const [fetchPadawanBookings, {data: padawanBookings}] =
    useListAllBookingsByPadawanIdLazyQuery();
  const [fetchJediBookings, {data: jediBookings}] =
    useListAllBookingsByJediIdLazyQuery();
  const [updateBookingStatus] = useUpdateBookingStatusMutation();

  const [userId, setUserId] = useState(0);
  const [userType, setUserType] = useState(UserTypeEnum.Padawan);

  useEffect(() => {
    (async () => {
      const storageUserId = await AsyncStorage.getItem('@userId');
      const storageUserType = await AsyncStorage.getItem('@userType');

      setUserId(Number(storageUserId));
      setUserType(storageUserType as UserTypeEnum);
    })();
  }, []);

  const fetchBookings = useCallback(async () => {
    if (userType === UserTypeEnum.Padawan) {
      await fetchPadawanBookings({
        variables: {
          padawanId: Number(userId),
        },
      });
    } else {
      await fetchJediBookings({
        variables: {
          jediId: Number(userId),
        },
      });
    }
  }, [fetchJediBookings, fetchPadawanBookings, userId, userType]);

  useEffect(() => {
    (async () => {
      await fetchBookings();
    })();
  }, [fetchBookings]);

  const handleAcceptPress = useCallback(
    (bookingId: number) => async () => {
      await updateBookingStatus({
        variables: {
          bookingId,
          status: BookingStatusEnum.Confirmed,
        },
      });
      fetchBookings();
    },
    [fetchBookings, updateBookingStatus],
  );

  const handleRefusePress = useCallback(
    (bookingId: number) => async () => {
      await updateBookingStatus({
        variables: {
          bookingId,
          status: BookingStatusEnum.Cancelled,
        },
      });
      fetchBookings();
    },
    [fetchBookings, updateBookingStatus],
  );

  const carouselItems = useCallback<() => iNotificationCarouselItem[]>(() => {
    if (userType === UserTypeEnum.Jedi) {
      return [
        {
          title: 'Solicitações',
          list: () => (
            <FlatList
              data={jediBookings?.booking_list_by_jedi_id}
              renderItem={({item}) => (
                <ItemSolicitation
                  title={item.padawan.name}
                  date={moment(item.date).format('DD/MM/YYYY')}
                  onPressAccept={handleAcceptPress(item.id)}
                  onPressRefuse={handleRefusePress(item.id)}
                />
              )}
            />
          ),
        },
        {
          title: 'Atualizações',
          list: () => (
            <FlatList
              data={jediBookings?.booking_list_by_jedi_id}
              renderItem={({item}) => (
                <ItemNotification
                  title={item.padawan.name}
                  date={moment(item.date).format('DD/MM/YYYY')}
                  status={getBookingStatus(item.status)}
                />
              )}
            />
          ),
        },
      ];
    }

    return [
      {
        title: 'Atualizações',
        list: () => (
          <FlatList
            data={padawanBookings?.booking_list_by_padawan_id}
            renderItem={({item}) => (
              <ItemNotification
                title={item.jedi.name}
                date={moment(item.date).format('DD/MM/YYYY')}
                status={getBookingStatus(item.status)}
              />
            )}
          />
        ),
      },
    ];
  }, [
    handleAcceptPress,
    handleRefusePress,
    jediBookings?.booking_list_by_jedi_id,
    padawanBookings?.booking_list_by_padawan_id,
    userType,
  ]);

  const handleCarouselItemRender = ({
    item,
  }: iCarouselRenderItem<iNotificationCarouselItem>) => {
    return (
      <React.Fragment>
        <Text style={styles.title}>{item.title}</Text>
        {item.list()}
      </React.Fragment>
    );
  };

  return (
    <View style={styles.view}>
      <Carousel
        data={carouselItems()}
        renderItem={handleCarouselItemRender}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        style={styles.carouselContainer}
      />
    </View>
  );
};

export default NotificationScreen;
