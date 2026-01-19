import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

import {colors, fonts} from '../theme';

export default function QuickQuizCard({
  title,
  desc,
  time,
  icon,
  iconColor = colors.primary,
  iconBg,
}) {
  return (
    <View style={styles.card}>
      {/* ICON */}
      <View
        style={[
          styles.iconWrapper,
          {backgroundColor: iconBg || `${iconColor}20`},
        ]}>
        <MaterialCommunityIcons name={icon} size={wp(6)} color={iconColor} />
      </View>

      {/* TEXT */}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.time}>{time}</Text>
        <TouchableOpacity style={styles.arrow}>
          <MaterialCommunityIcons
            name="chevron-right"
            size={wp(5)}
            color={colors.slate500}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    aspectRatio: 1,
    backgroundColor: colors.cardLight,
    borderRadius: wp(4),
    padding: wp(4),
    justifyContent: 'space-between',
  },

  iconWrapper: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(3),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(1),
  },

  title: {
    fontFamily: fonts.bold,
    fontSize: rf(2),
  },

  desc: {
    fontSize: rf(1.4),
    color: colors.slate500,
    marginTop: hp(0.5),
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  time: {
    fontSize: rf(1.2),
    fontFamily: fonts.bold,
    color: colors.slate400,
  },

  arrow: {
    width: wp(8),
    height: wp(8),
    borderRadius: wp(4),
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
