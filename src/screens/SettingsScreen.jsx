import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

import SettingsHeader from '../components/headers/SettingsHeader';
import ProfileMiniCard from '../components/ProfileMiniCard';
import SettingsToggleRow from '../components/SettingsToggleRow';
import SettingsLinkRow from '../components/SettingsLinkRow';
import SectionTitle from '../components/SectionTitle';

import {colors, fonts} from '../theme';

export default function SettingsScreen({navigation}) {
  const [darkMode, setDarkMode] = useState(true);
  const [reminders, setReminders] = useState(true);
  const [privacy, setPrivacy] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <SettingsHeader onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        <ProfileMiniCard />

        <SectionTitle title="Experience" />
        <SettingsToggleRow
          title="Dark Mode"
          description="Easier on your eyes at night"
          value={darkMode}
          onChange={setDarkMode}
        />
        <SettingsToggleRow
          title="Daily Reminders"
          description="A nudge to discover yourself"
          value={reminders}
          onChange={setReminders}
        />

        <SectionTitle title="Privacy & Safety" />
        <SettingsToggleRow
          title="Privacy Mode"
          description="Hide my results from others"
          value={privacy}
          onChange={setPrivacy}
        />

        <View style={styles.card}>
          <SettingsLinkRow label="Change Password" />
          <View style={styles.divider} />
          <SettingsLinkRow label="Export My Data" />
        </View>

        <TouchableOpacity style={styles.signOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>

        <Text style={styles.version}>VERSION 2.4.0 (DISCOVERY)</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  content: {
    paddingHorizontal: wp(6),
    gap: hp(2),
  },
  card: {
    borderRadius: wp(4),
    overflow: 'hidden',
    backgroundColor: colors.cardLight,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  signOut: {
    marginTop: hp(4),
    paddingVertical: hp(2),
    borderRadius: wp(4),
    backgroundColor: '#fee2e2',
    alignItems: 'center',
  },
  signOutText: {
    color: colors.danger,
    fontSize: rf(2),
    fontFamily: fonts.bold,
  },
  version: {
    marginTop: hp(2),
    fontSize: rf(1.1),
    letterSpacing: 2,
    textAlign: 'center',
    color: colors.gray400,
    fontFamily: fonts.bold,
  },
});
