import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../../theme';

export default function SettingsHeader({onBack}) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity style={styles.backBtn} onPress={onBack}>
          <Text style={styles.icon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.spark}>
        <Text>✨</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(6),
    paddingTop: hp(6),
    paddingBottom: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(4),
  },
  backBtn: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: colors.cardLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: rf(2.5),
  },
  title: {
    fontSize: rf(3),
    fontFamily: fonts.bold,
  },
  spark: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: colors.cardLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
