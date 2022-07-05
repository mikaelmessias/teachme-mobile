import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import styles from './styles';
import Button from '../../components/Button/Button';
import useSignUp from '../../contexts/SignUpContext/useNavigation';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {weekdays} from '../../helpers/weekdays';
import {
  useCreateJediAvailabilityMutation,
  WeekdaysEnum,
} from '../../generated/graphql';

const SignUpAvailabilityScreen = () => {
  const {
    state: {jedi},
  } = useSignUp();

  const [createJediAvailability, {loading: isCreatingAvailability}] =
    useCreateJediAvailabilityMutation();

  const nav = useNavigation();

  const [selectedDays, setSelectedDays] = useState<WeekdaysEnum[]>([]);

  const handleContinuePress = async () => {
    if (jedi) {
      try {
        await createJediAvailability({
          variables: {
            jediId: jedi?.id,
            days: selectedDays,
          },
        });

        nav.navigate('SignUpFinishedScreen');
      } catch (e) {
        console.warn('Falha ao salvar dados');
      }
    }
  };

  const handleDayItemPress = (newDay: WeekdaysEnum) => {
    let newSelectedDays: WeekdaysEnum[];

    if (selectedDays.includes(newDay)) {
      newSelectedDays = selectedDays.filter(item => item !== newDay);
    } else {
      newSelectedDays = [...selectedDays, newDay];
    }

    setSelectedDays(newSelectedDays);
  };

  return (
    <View style={styles.container}>
      <SignUpHeader showBackButton disableLogoButton />

      <View style={styles.contentContainer}>
        <View style={styles.pageTitle}>
          <Text style={styles.pageTitleText}>Disponibilidade</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formLegend}>
            Selecione os dias preferencias para atendimento
          </Text>

          <FlatList
            data={weekdays}
            keyExtractor={weekday => weekday.id}
            renderItem={({item: weekday}) => (
              <TouchableOpacity
                style={styles.getDayItemContainer(
                  selectedDays.includes(weekday.id),
                  isCreatingAvailability,
                )}
                onPress={() => handleDayItemPress(weekday.id)}
                disabled={isCreatingAvailability}
              >
                <Text style={styles.dayItemSubtitle}>{weekday.subtitle}</Text>
                <Text style={styles.dayItemTitle}>{weekday.title}</Text>
              </TouchableOpacity>
            )}
            numColumns={3}
            ItemSeparatorComponent={() => (
              <View style={styles.flatListSeparator} />
            )}
            style={styles.daysSelectionFlatList}
            contentContainerStyle={styles.flatListContentContainer}
            columnWrapperStyle={styles.flatlistColumnWrapper}
          />

          <Button
            title="Continuar"
            onPress={handleContinuePress}
            style={styles.continueButton}
            loading={isCreatingAvailability}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpAvailabilityScreen;
