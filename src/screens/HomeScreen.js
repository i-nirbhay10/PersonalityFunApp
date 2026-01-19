import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import AppHeader from '../components/headers/AppHeader';
import HeroCard from '../components/HeroCard';
import MoodSelector from '../components/MoodSelector';
import QuickQuizCard from '../components/QuickQuizCard';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
} from 'react-native-responsive-dimensions';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header stays fixed */}
      <AppHeader />

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HeroCard />
        <MoodSelector />

        <View style={styles.quizGrid}>
          <QuickQuizCard
            title="Spontaneity Test"
            desc="Discover your inner spark."
            time="2 min"
            icon="auto-fix"
          />

          <QuickQuizCard
            title="Social Battery"
            desc="Where do you recharge?"
            time="5 min"
            icon="account-group"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: hp(3),
  },
  quizGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(6),
    marginTop: 20,
  },
});
