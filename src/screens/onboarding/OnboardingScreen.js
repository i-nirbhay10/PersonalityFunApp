import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

import {colors, fonts, spacing} from '../../theme';

export default function OnboardingScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* TOP NAV */}
      <View style={styles.topNav}>
        <TouchableOpacity>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* HERO */}
      <View style={styles.heroContainer}>
        {/* BLOBS */}
        <View style={styles.blobPrimary} />
        <View style={styles.blobPurple} />

        {/* IMAGE */}
        <View style={styles.imageWrapper}>
          <ImageBackground
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpOE-ThZnAvSPl7ja-fy0yV0yqcbaN8UxwhqocbTShVvQcu6YwHcWmi6PD1YWZynYSSqZW-NfOCDiGFtiwAhmjh78gmxzGssYouno9YPxy1jxgErkkIjnPrT8D1-oX6Fh7QnEBMCzc7RQnI4YMJc8RJBICEK2RwmhVED3JebV5mRGpW2pq2FHA5NAjPGlxN3nOi3Sxig60eEwGKDNmbHqFJN2ioXMahJYQiDdWOYPGybLz3EAgnFzLw7B-yXbB0K8Kua7Vm4y1YZI',
            }}
            style={styles.image}
          />
        </View>

        {/* TEXT */}
        <View style={styles.textBlock}>
          <Text style={styles.title}>
            Discover the <Text style={styles.highlight}>real</Text> you
          </Text>
          <Text style={styles.subtitle}>
            Take a 2-minute journey to unlock your unique personality profile.
          </Text>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        {/* PROGRESS */}
        <View style={styles.progress}>
          <View style={styles.progressActive} />
          <View style={styles.progressInactive} />
          <View style={styles.progressInactive} />
        </View>

        {/* CTA */}
        <TouchableOpacity
          style={styles.cta}
          onPress={() => navigation.replace('MainTabs')}>
          <Text style={styles.ctaText}>Get Started →</Text>
        </TouchableOpacity>

        <Text style={styles.note}>NO CREDIT CARD REQUIRED</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },

  topNav: {
    padding: wp(6),
    alignItems: 'flex-end',
  },
  skip: {
    fontSize: rf(1.8),
    color: colors.slate400,
    fontFamily: fonts.bold,
    textTransform: 'uppercase',
  },

  heroContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  blobPrimary: {
    position: 'absolute',
    width: wp(70),
    height: wp(70),
    borderRadius: wp(35),
    backgroundColor: 'rgba(0,189,157,0.1)',
    transform: [{rotate: '12deg'}],
  },

  blobPurple: {
    position: 'absolute',
    width: wp(65),
    height: wp(65),
    borderRadius: wp(32),
    backgroundColor: 'rgba(139,92,246,0.1)',
    transform: [{rotate: '-12deg'}],
  },

  imageWrapper: {
    width: wp(70),
    height: wp(70),
    borderRadius: wp(35),
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 10,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  textBlock: {
    marginTop: hp(6),
    paddingHorizontal: wp(10),
    alignItems: 'center',
  },

  title: {
    fontSize: rf(4),
    fontFamily: fonts.extraBold,
    color: colors.textDark,
    textAlign: 'center',
  },

  highlight: {
    color: colors.primary,
  },

  subtitle: {
    marginTop: hp(2),
    fontSize: rf(2),
    fontFamily: fonts.medium,
    color: colors.slate600,
    textAlign: 'center',
  },

  footer: {
    padding: wp(6),
  },

  progress: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: hp(4),
  },

  progressActive: {
    width: wp(8),
    height: hp(0.8),
    borderRadius: hp(1),
    backgroundColor: colors.primary,
    marginHorizontal: wp(1),
  },

  progressInactive: {
    width: wp(2),
    height: hp(0.8),
    borderRadius: hp(1),
    backgroundColor: '#e5e7eb',
    marginHorizontal: wp(1),
  },

  cta: {
    height: hp(7),
    backgroundColor: colors.primary,
    borderRadius: spacing.radiusXl,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ctaText: {
    color: '#fff',
    fontSize: rf(2.2),
    fontFamily: fonts.bold,
  },

  note: {
    marginTop: hp(2),
    textAlign: 'center',
    fontSize: rf(1.2),
    letterSpacing: 1.5,
    color: colors.slate400,
  },
});
