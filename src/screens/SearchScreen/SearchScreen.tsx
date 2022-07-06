import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import {
  JediSkillEntity,
  useSearchTechByTitleLazyQuery,
} from '../../generated/graphql';
import {iCarouselRenderItem} from '../../helpers/iCarouselProps';
import {translateWeekdays} from '../../helpers/weekdays';
import {ITEM_WIDTH, SLIDER_WIDTH} from '../NotificationScreen/utils';
import {iSearchCarouselItem} from './interfaces/iSearchCarouselItem';
import {iSkillResult} from './interfaces/iSkillResult';
import styles from './styles';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [searchTechByTitle, {loading, data: searchTechsResult}] =
    useSearchTechByTitleLazyQuery();

  const handleSearchPress = async () => {
    await searchTechByTitle({
      variables: {
        title: searchQuery,
      },
    });
  };

  const handleCarouselItemRender = ({
    item,
  }: iCarouselRenderItem<iSearchCarouselItem>) => {
    return <React.Fragment>{item.searchItem()}</React.Fragment>;
  };

  const carouselItems = useCallback<() => iSearchCarouselItem[]>(() => {
    if (!searchTechsResult || !searchTechsResult.tech_list_by_title.length) {
      return [];
    }

    let skills: iSkillResult[] = [];

    searchTechsResult.tech_list_by_title.map(tech => {
      console.log(tech.title, tech.skills && tech.skills.length > 0);
      if (tech.skills && tech.skills.length > 0) {
        skills = [...skills, ...(tech.skills as any)];
      }
    });

    return skills.map(skill => {
      return {
        searchItem: () => (
          <View style={styles.carouselCard}>
            <View style={styles.jediInfo}>
              <Text style={styles.jediName}>{skill.jedi.name}</Text>
            </View>

            <View>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontFamily: 'Wigrum-Bold',
                  marginBottom: 12,
                }}
              >
                Disponibilidade
              </Text>

              <View style={{flexDirection: 'row'}}>
                {skill.jedi.availability.map(({day}) => (
                  <View style={styles.availableDayCard}>
                    <Text style={{color: 'white'}}>
                      {translateWeekdays(day)[0]}
                    </Text>
                    <Text style={{color: 'white'}}>
                      {translateWeekdays(day)}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ),
      };
    });
  }, [searchTechsResult]);

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        placeholder="Pesquisar por tecnologia"
        outlineColor={'#B5B5B5'}
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
        disabled={loading}
        right={
          <TextInput.Icon
            onPress={handleSearchPress}
            name={'search-web'}
            color={'#333'}
          />
        }
      />

      <Carousel
        data={carouselItems()}
        renderItem={handleCarouselItemRender}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        // style={styles.carouselContainer}
      />
    </View>
  );
};

export default SearchScreen;
