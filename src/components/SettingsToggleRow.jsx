import React from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../theme';

export default function SettingsToggleRow({
  title,
  description,
  value,
  onChange,
}) {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
      <Switch value={value} onValueChange={onChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    padding: wp(4),
    borderRadius: wp(4),
    backgroundColor: colors.cardLight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: rf(1.8),
    fontFamily: fonts.semiBold,
  },
  desc: {
    fontSize: rf(1.3),
    color: colors.gray500,
  },
});
