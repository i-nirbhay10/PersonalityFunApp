import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setVibe} from '../store/vibeSlice';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../theme';

const moods = [
  {id: 1, label: 'Radiant', emoji: '☀️', color: '#FFE5D9'},
  {id: 2, label: 'Chilled', emoji: '😎', color: '#D0E8FF'},
  {id: 3, label: 'Thoughtful', emoji: '📚', color: '#E6D0FF'},
  {id: 4, label: 'Energized', emoji: '⚡', color: '#FFF4D9'},
  {id: 5, label: 'Mellow', emoji: '🍃', color: '#D9FFE1'},
  {id: 6, label: 'Grumpy', emoji: '☁️', color: '#E0E0E0'},
];

export default function MoodCheckScreen({navigation}) {
  const [selectedMood, setSelectedMood] = useState(null);
  const dispatch = useDispatch();

  const handleSelect = mood => {
    setSelectedMood(mood.id);
  };

  const handleContinue = () => {
    if (selectedMood) {
      const selected = moods.find(m => m.id === selectedMood);

      dispatch(
        setVibe({
          id: selected.id,
          label: selected.label,
          emoji: selected.emoji,
        }),
      );

      navigation.navigate('Game');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>How are you feeling today?</Text>
        <Text style={styles.subtitle}>Pick your vibe for today.</Text>
      </View>

      {/* Mood Grid */}
      <ScrollView contentContainerStyle={styles.grid}>
        {moods.map(mood => {
          const isActive = selectedMood === mood.id;
          return (
            <TouchableOpacity
              key={mood.id}
              style={[
                styles.moodCard,
                {
                  backgroundColor: isActive ? mood.color : '#fff',
                  borderColor: isActive ? colors.primary : 'transparent',
                },
              ]}
              onPress={() => handleSelect(mood)}>
              <View style={styles.emojiContainer}>
                <Text style={styles.emoji}>{mood.emoji}</Text>
              </View>
              <Text style={styles.moodLabel}>{mood.label}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.bottom}>
        <TouchableOpacity
          style={[
            styles.continueButton,
            {backgroundColor: selectedMood ? colors.primary : '#ccc'},
          ]}
          onPress={handleContinue}
          disabled={!selectedMood}>
          <Text style={styles.continueText}>Continue ➜</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingTop: hp(4),
    backgroundColor: colors.backgroundLight,
  },
  header: {
    marginBottom: hp(3),
    alignItems: 'center',
  },
  title: {
    fontSize: rf(3),
    fontFamily: fonts.extrabold,
    color: colors.slate900,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: rf(1.6),
    color: colors.slate500,
    marginTop: hp(1),
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  moodCard: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: wp(4),
    marginBottom: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  emojiContainer: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  emoji: {
    fontSize: rf(4),
  },
  moodLabel: {
    fontSize: rf(2),
    fontFamily: fonts.bold,
    color: colors.slate900,
    textAlign: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: hp(4),
    left: wp(4),
    right: wp(4),
  },
  continueButton: {
    height: hp(7),
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {
    fontSize: rf(2),
    color: '#fff',
    fontFamily: fonts.bold,
  },
});
