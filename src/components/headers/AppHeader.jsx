import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../../theme';

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.date}>Monday, Oct 24</Text>
        <Text style={styles.title}>Hi, Alex</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconBtn}>
          <Text>⚡</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Text>🔔</Text>
          <View style={styles.dot} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(6),
    paddingVertical: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: rf(1.2),
    fontFamily: fonts.bold,
    color: colors.primary,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: rf(2.8),
    fontFamily: fonts.extraBold,
  },
  actions: {
    flexDirection: 'row',
    gap: wp(3),
  },
  iconBtn: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: colors.cardLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.accent,
  },
});
