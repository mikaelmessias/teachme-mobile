import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import styles from './styles';
import Button from '../../components/Button/Button';
import useSignUp from '../../contexts/SignUpContext/useNavigation';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {
  useCreateJediSkillMutation,
  useDeleteJediSkillMutation,
  useTechListAllQuery,
} from '../../generated/graphql';
import {IconButton, TextInput} from 'react-native-paper';
import {setJediSkills} from '../../contexts/SignUpContext/actions';
import utils from './utils';

const SignUpSkillsScreen = () => {
  const {state, dispatch: signUpDispatch} = useSignUp();

  const nav = useNavigation();

  const [currentSelectedTechId, setCurrentSelectedTechId] = useState(0);
  const [skillPrice, setSkillPrice] = useState('0.00');

  const {data, refetch} = useTechListAllQuery();
  const [createJediSkill, {loading: isJediSkillCreating}] =
    useCreateJediSkillMutation();
  const [removeJediSkill, {loading: isJediSkillRemoving}] =
    useDeleteJediSkillMutation();

  const handlePriceChange = (value: string) => {
    const newPrice = value.replace(/[^\d|.]*/g, '');
    setSkillPrice(newPrice);
  };

  const handleAddPress = async () => {
    if (state.jedi) {
      const {data: results} = await createJediSkill({
        variables: {
          jediId: state.jedi.id,
          techId: currentSelectedTechId,
          price: Number(skillPrice) || 0,
        },
      });

      if (
        results &&
        results.jedi_skill_create &&
        results.jedi_skill_create.skills
      ) {
        const skills = results.jedi_skill_create.skills.map(skill => ({
          id: skill.id,
          tech: {
            id: skill.tech.id,
            title: skill.tech.title,
            thumbnail: skill.tech.thumbnail,
          },
          price: skill.price,
        }));

        signUpDispatch(setJediSkills(skills));
      }
    }
  };

  const handleRemovePress = async (techId: number) => {
    if (state.jedi) {
      const {data: results} = await removeJediSkill({
        variables: {
          jediId: state.jedi.id,
          techId: techId,
        },
      });

      if (
        results &&
        results.jedi_skill_delete_single &&
        results.jedi_skill_delete_single.skills
      ) {
        const skills = results.jedi_skill_delete_single.skills.map(skill => ({
          id: skill.id,
          tech: {
            id: skill.tech.id,
            title: skill.tech.title,
            thumbnail: skill.tech.thumbnail,
          },
          price: skill.price,
        }));

        signUpDispatch(setJediSkills(skills));
      }
    }
  };

  const handleContinuePress = () => {
    nav.navigate('SignUpAvailabilityScreen');
  };

  const getIcon = (thumbnailName: string) => {
    const Icon = utils.getIcon(thumbnailName);

    return <Icon style={styles.mySkillsAreaListItemIcon} />;
  };

  const handlePickerFocus = () => {
    if (!data || !data.tech_list_all.length) {
      refetch();
    }
  };

  return (
    <View style={styles.container}>
      <SignUpHeader disableLogoButton />

      <View style={styles.contentContainer}>
        <View style={styles.pageTitle}>
          <Text style={styles.pageTitleText}>Suas habilidades</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.getPickerWrapperStyle()}>
            <Picker
              selectedValue={currentSelectedTechId}
              onValueChange={techId => setCurrentSelectedTechId(techId)}
              prompt="Selecione uma tecnologia"
              enabled={!isJediSkillCreating || !isJediSkillRemoving}
              placeholder="Selecione uma tecnologia"
              onFocus={handlePickerFocus}
            >
              {data?.tech_list_all.map(tech => (
                <Picker.Item
                  key={tech.id}
                  label={tech.title}
                  value={tech.id}
                  style={styles.pickerItem}
                />
              ))}
            </Picker>
          </View>

          <TextInput
            mode="outlined"
            label={'Valor da mentoria'}
            placeholder="Valor da mentoria"
            right={<TextInput.Icon name="currency-brl" color={'#333'} />}
            outlineColor={'#B5B5B5'}
            style={styles.input}
            value={skillPrice}
            onChangeText={handlePriceChange}
          />

          <Button
            title="Adicionar"
            onPress={handleAddPress}
            style={styles.addButton}
            mode="blue"
            loading={isJediSkillCreating || isJediSkillRemoving}
          />

          <View style={styles.mySkillsAreaContainer}>
            <Text style={styles.mySkillsAreaTitle}>Habilidades</Text>

            <ScrollView style={styles.mySkillsAreaList}>
              {state.skills?.map(skill => (
                <View key={skill.id} style={styles.mySkillsAreaListItem}>
                  <View style={styles.mySkillsAreaListItemDescription}>
                    {getIcon(skill.tech.thumbnail)}

                    <Text style={styles.mySkillsAreaListItemText}>
                      {skill.tech.title}
                    </Text>
                  </View>

                  <IconButton
                    icon={'close'}
                    onPress={() => handleRemovePress(skill.tech.id)}
                    style={styles.mySkillsAreaListItemButton}
                    color="white"
                    underlayColor="white"
                    size={16}
                  />
                </View>
              ))}
            </ScrollView>
          </View>

          <Button
            title="Continuar"
            onPress={handleContinuePress}
            style={styles.continueButton}
            disabled={isJediSkillCreating || isJediSkillRemoving}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpSkillsScreen;
