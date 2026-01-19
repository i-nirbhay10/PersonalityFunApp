import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../theme';

export default function SettingsLinkRow({label}) {
  return (
    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}>{label}</Text>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    padding: wp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.cardLight,
  },
  text: {
    fontSize: rf(1.8),
    fontFamily: fonts.medium,
  },
  chevron: {
    fontSize: rf(2.5),
    color: colors.gray400,
  },
});
