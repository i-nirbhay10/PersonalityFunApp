import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../theme';
import {useNavigation} from '@react-navigation/native';

export default function HeroCard() {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFnQYY8jEcUh_3-vGO8VRsVFdMe39mtMYRUuPaLOnI3mNQEC8tW4LROxF-6GphShyKYqOKyN5SVImGl5Kx-J6pUFZozf45-JkMDsofOCkZe8Pd1jxd4f5zdwklXVUixycQNIy7drGuQ8-EAcKUv9MRb_MPzUreYEePgsil-LWzHmUq1bTdJF2KjWIsfY_kP7FOfefALL7Lhm11KCxlWksAMO3mf29hLEAxRSpn5DnnGEG-0D5vVVg-CeWOjBkZ6F5mhpJjlC0Bc_E',
          }}
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.title}>Who are you today?</Text>
          <Text style={styles.subtitle}>
            Unlock a new layer of your personality.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Game')}>
            <Text style={styles.buttonText}>Start Playing ▶</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: wp(6),
    marginTop: hp(2),
  },
  card: {
    borderRadius: wp(6),
    backgroundColor: colors.cardLight,
    borderWidth: 4,
    borderColor: colors.primary,

    // 🔥 Glow
    shadowColor: colors.primary,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 20, // Android glow

    overflow: 'hidden',
  },
  image: {
    height: hp(30),
    width: '100%',
  },
  content: {
    padding: wp(5),
  },
  title: {
    fontSize: rf(3),
    fontFamily: fonts.extraBold,
  },
  subtitle: {
    marginVertical: hp(1),
    color: colors.slate400,
    fontFamily: fonts.medium,
  },
  button: {
    marginTop: hp(2),
    height: hp(6.5),
    backgroundColor: colors.primary,
    borderRadius: wp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: rf(2),
    fontFamily: fonts.bold,
  },
});
