import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import {Button} from 'react-native-paper';

import {styles, stylesFlatList, stylesWeekDays} from './styles';
import {useGetUserLazyQuery} from '../../generated/graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {iUser} from './iUser';
import {weekdays} from '../../helpers/weekdays';

const ProfileScreen = () => {
  const nav = useNavigation();

  var [isPressAbility, setIsPressAbility] = React.useState(true);
  var [isPressAvailability, setIsPressAvailability] = React.useState(false);

  const [availability, setAvailability] = React.useState(new Map());

  const [getUser] = useGetUserLazyQuery();
  const [userData, setUserData] = React.useState<iUser>();

  useEffect(() => {
    (async () => {
      const userId = await AsyncStorage.getItem('@userId');

      const {data} = await getUser({
        variables: {
          id: Number(userId),
        },
      });

      if (data && data.user_list_single) {
        setUserData(data.user_list_single);
        console.log(data.user_list_single);
      }
    })();
  }, []);

  const onSelect = React.useCallback(
    (id: string) => {
      const newAvailability = new Map(availability);

      const teste = userData?.availability?.find(it => {
        it.day == id;
      });

      if (teste) {
        newAvailability.set(id, true);
      } else {
        newAvailability.set(id, false);
      }

      setAvailability(newAvailability);
    },
    [availability],
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Button
          style={styles.editButton}
          uppercase={false}
          mode="outlined"
          color="#2A2A2A"
        >
          Editar dados
        </Button>

        <Image
          style={styles.imgProfile}
          source={require('../../assets/jon-snow.jpeg')}
        />

        <Text style={styles.name}>{userData?.name}</Text>

        <Text style={styles.email}>{userData?.email}</Text>

        <View style={styles.content}>
          <Text style={styles.title}>DATA DE NASCIMENTO</Text>

          <Text style={styles.description}>{userData?.birthdate}</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>CPF</Text>

          <Text style={styles.description}>{userData?.cpf}</Text>
        </View>

        <View style={[styles.content, {marginBottom: 38}]}>
          <Text style={styles.title}>Bio</Text>

          <Text style={styles.description}>{userData?.biography}</Text>
        </View>

        <View style={styles.viewInfos}>
          <TouchableOpacity
            style={{marginRight: 18}}
            onPress={() => {
              setIsPressAvailability(false);
              setIsPressAbility(true);
            }}
          >
            <Text
              style={[
                styles.textButton,
                {color: isPressAbility ? '#6717D1' : '#B5B5B5'},
              ]}
            >
              Habilidades
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsPressAvailability(true);
              setIsPressAbility(false);
            }}
          >
            <Text
              style={[
                styles.textButton,
                {color: isPressAvailability ? '#6717D1' : '#B5B5B5'},
              ]}
            >
              Disponibilidade
            </Text>
          </TouchableOpacity>
        </View>

        {isPressAbility && userData?.skills && userData?.skills.length > 0 && (
          <FlatList
            style={stylesFlatList.flatList}
            data={userData?.skills}
            renderItem={({item}) => (
              <View style={stylesFlatList.content}>
                <View>
                  <Image
                    style={stylesFlatList.logoTech}
                    source={require('../../assets/jon-snow.jpeg')}
                  />
                </View>
                <View style={stylesFlatList.contentDescription}>
                  <Text style={stylesFlatList.title}>
                    {item.tech.title.toUpperCase()}
                  </Text>
                  <Text style={stylesFlatList.value}>{item.price}</Text>
                </View>
              </View>
            )}
          />
        )}

        {isPressAbility && userData?.skills && userData?.skills.length <= 0 && (
          <View style={{marginBottom: 100}}>
            <Text>Nenhuma habilidade adicionada</Text>
          </View>
        )}

        {isPressAvailability && (
          <View style={stylesWeekDays.flatList}>
            <FlatList
              data={weekdays}
              numColumns={3}
              renderItem={({item}) => (
                <View
                  style={[
                    stylesWeekDays.item,
                    {
                      backgroundColor: availability.get(item.id)
                        ? '#6717D1'
                        : '#DBDBDB',
                    },
                  ]}
                >
                  <Text style={stylesWeekDays.weekInitial}>
                    {item.subtitle}
                  </Text>
                  <Text style={stylesWeekDays.weekName}>
                    {item.title.toUpperCase()}
                  </Text>
                </View>
              )}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
