import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setVibe} from '../store/vibeSlice';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../theme';

const moods = ['😄', '🙂', '😐', '😕', '⚡'];

export default function MoodSelector() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const selectedMood = useSelector(state => state.vibe.currentVibe);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>How’s the vibe?</Text>
        <Text style={styles.link}>History</Text>
      </View>

      <View style={styles.row}>
        {moods.map(mood => {
          const isSelected = selectedMood === mood;

          return (
            <TouchableOpacity
              key={mood}
              style={[styles.mood, isSelected && styles.moodSelected]}
              onPress={() => {
                dispatch(setVibe(mood));
                navigation.navigate('Game'); // 👈 navigation
              }}>
              <Text style={[styles.icon, isSelected && styles.iconSelected]}>
                {mood}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp(4),
    paddingHorizontal: wp(6),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  title: {
    fontSize: rf(2.4),
    fontFamily: fonts.bold,
  },
  link: {
    color: colors.primary,
    fontFamily: fonts.bold,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.cardLight,
    padding: wp(4),
    borderRadius: wp(4),
  },
  mood: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(4),
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'transparent',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  moodSelected: {
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 10,
  },
  icon: {
    fontSize: rf(3),
  },
  iconSelected: {
    color: '#fff',
  },
});
