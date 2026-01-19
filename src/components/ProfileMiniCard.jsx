import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../theme';

export default function ProfileMiniCard() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUeRWQUMVhYeUsPKNT0IvUwpFZCyNavkkpH_XA6zqswTTCZvVfgV1HlPKcPUsYfyTOjPEgmZ8-pZ3TS8wzS0TpINaE4850MGK1lVL82Ao18HEDcEP5LkEi81GEbPSvVui5NhN0ZLZ3G4TwZG26u5oJgWcv5-xH1k2YcO0n6ceMMMIkfVMM6kQnFD8P4LWqu7WPxaDVtdO9_PB6HpX6SLBuZG_PLQWxm3YtXAOSa0EcjrQFX3zKaHnNGMrCXcyXmxYZSiXxvAi-rRc',
          }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Alex Rivera</Text>
          <Text style={styles.subtitle}>Discovery Enthusiast</Text>
        </View>
      </View>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>PRO</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp(4),
    borderRadius: wp(4),
    backgroundColor: colors.cardLight,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
  },
  avatar: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(7),
  },
  name: {
    fontSize: rf(2),
    fontFamily: fonts.bold,
  },
  subtitle: {
    fontSize: rf(1.4),
    color: colors.gray500,
  },
  badge: {
    backgroundColor: 'rgba(0,189,157,0.1)',
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    borderRadius: wp(6),
  },
  badgeText: {
    fontSize: rf(1.2),
    fontFamily: fonts.bold,
    color: colors.primary,
  },
});
