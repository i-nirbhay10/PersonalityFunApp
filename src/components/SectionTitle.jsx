import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../theme';

export default function SectionTitle({title}) {
  return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    marginTop: wp(4),
    marginBottom: wp(2),
    fontSize: rf(1.2),
    fontFamily: fonts.bold,
    letterSpacing: 2,
    color: colors.gray400,
    textTransform: 'uppercase',
  },
});
