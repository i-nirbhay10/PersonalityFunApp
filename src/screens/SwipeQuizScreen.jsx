import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../theme';

export default function SwipeQuizScreen() {
  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        <TouchableOpacity style={styles.navButton}>
          <MaterialIcons
            name="arrow-back-ios"
            size={rf(3)}
            color={colors.textPrimary}
          />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Vibe Discovery</Text>
        <TouchableOpacity style={styles.navButton}>
          <MaterialIcons name="tune" size={rf(3)} color={colors.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressLabel}>Discovery in Progress</Text>
          <Text style={styles.progressCount}>4 of 10</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, {width: '40%'}]} />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {/* Background Decorative Blobs */}
        <View style={styles.bgBlobs}>
          <View style={[styles.blob, {backgroundColor: colors.primary}]} />
          <View style={[styles.blob, {backgroundColor: colors.accent}]} />
        </View>

        {/* Central Swipe Card */}
        <View style={styles.cardWrapper}>
          {/* Stack Shadows */}
          <View style={[styles.mockCard, {top: hp(1.5), scale: 0.95}]} />
          <View style={[styles.mockCard, {top: hp(0.75), scale: 0.98}]} />

          {/* Active Card */}
          <View style={styles.activeCard}>
            {/* Card Header */}
            <View style={styles.cardHeader}>
              <Text style={styles.questionLabel}>Question 04</Text>
              <Text style={styles.questionText}>Weekend Vibe?</Text>
            </View>

            {/* Choices */}
            <View style={styles.choices}>
              {/* Left Choice */}
              <TouchableOpacity
                style={[styles.choiceCard, {borderColor: 'transparent'}]}>
                <Image
                  source={{
                    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_UUkCvbZQEjD0KxGqb6YJpwbYWeYFGISQcnAOaisopl_WyMX9FFekr8PZWH5oyryI11iSgvhNlfdb7B0LPlSjK7vbT8saNVQ2LoCCB-X6_sytQLGTRKbbESkKz5askP4mbStYSHS-YYY-55eX23c5rA_wk2mjpTvTnUbLAW0mw9rNJ82r5AiqcqP1KB8_7HlATr-izR4udBHuHQkm3MzFdtEhNwxhd_F3eaV86CX03tar0oU9BdUUVLr_SNdS1nPdqOMPNr3KJxE',
                  }}
                  style={styles.choiceImage}
                />
                <View style={styles.choiceOverlay} />
                <View style={styles.choiceTextContainer}>
                  <Text style={styles.choiceLabel}>Swipe Left</Text>
                  <Text style={styles.choiceTitle}>Cozy Cafe</Text>
                  <Text style={styles.choiceDesc}>
                    Slow mornings, coffee, and books.
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Right Choice */}
              <TouchableOpacity
                style={[styles.choiceCard, {borderColor: 'transparent'}]}>
                <Image
                  source={{
                    uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo5Gco9FiRbHczJS_GHqJZHWS4n2CQFvwVV5Py3_ebotgE_rGdCfSAffQ-t3uAWupVtku9ayWiFjzysx34fVpo5lMPLdi9g24CV2VJ9ixyq56obIYyGtBr47p6DSy8KukaZ_q-DmCG5p8cghgS3IWVmYkO3ZxTu4W58IDkbxWeUzlMoqo4HtbmgNRuoSwVG5H4d_uz-j2EWipItJ6fJ8EERzepUwqeKCNSaXNaVeQCzSfcIH3xRKVHIAvHLYvS8WI7gikiNXy2xvw',
                  }}
                  style={styles.choiceImage}
                />
                <View style={styles.choiceOverlay} />
                <View
                  style={[
                    styles.choiceTextContainer,
                    {alignItems: 'flex-end'},
                  ]}>
                  <Text style={styles.choiceLabel}>Swipe Right</Text>
                  <Text style={styles.choiceTitle}>Busy Concert</Text>
                  <Text style={styles.choiceDesc}>
                    High energy, crowds, and live music.
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Swipe Visual Clue */}
            <View style={styles.swipeClue}>
              <View style={styles.swipeItem}>
                <View
                  style={[
                    styles.swipeCircle,
                    {backgroundColor: colors.backgroundLight},
                  ]}>
                  <MaterialIcons
                    name="undo"
                    size={rf(3)}
                    color={colors.primary}
                  />
                </View>
                <Text style={styles.swipeLabel}>UNDO</Text>
              </View>
              <View style={styles.swipeCenter}>
                <Text style={styles.swipePulse}>Swipe to decide</Text>
              </View>
              <View style={styles.swipeItem}>
                <View
                  style={[
                    styles.swipeCircle,
                    {backgroundColor: colors.backgroundLight},
                  ]}>
                  <MaterialIcons
                    name="bolt"
                    size={rf(3)}
                    color={colors.accent}
                  />
                </View>
                <Text style={styles.swipeLabel}>SUPER</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Floating Action Buttons */}
        <View style={styles.floatingActions}>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons
              name="close"
              size={rf(4)}
              color={colors.textPrimary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, {backgroundColor: colors.primary}]}>
            <MaterialIcons name="favorite" size={rf(5)} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons
              name="star"
              size={rf(4)}
              color={colors.textPrimary}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {['explore', 'leaderboard', 'group', 'profile'].map((icon, i) => (
          <TouchableOpacity key={i} style={styles.navItem}>
            <MaterialIcons
              name={icon}
              size={rf(3)}
              color={i === 0 ? colors.primary : colors.slate400}
            />
            <Text style={[styles.navText, i === 0 && {color: colors.primary}]}>
              {['Play', 'Results', 'Friends', 'Profile'][i]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.backgroundLight},
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    backgroundColor: colors.backgroundLight,
  },
  navButton: {
    width: wp(10),
    height: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  navTitle: {
    fontFamily: fonts.extrabold,
    fontSize: rf(2.2),
    color: colors.textPrimary,
  },
  progressContainer: {paddingHorizontal: wp(5), paddingBottom: hp(1)},
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(0.5),
  },
  progressLabel: {
    fontSize: rf(1),
    fontFamily: fonts.bold,
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  progressCount: {
    fontSize: rf(1),
    fontFamily: fonts.bold,
    color: colors.slate400,
  },
  progressBar: {
    height: hp(0.5),
    width: '100%',
    backgroundColor: `${colors.primary}20`,
    borderRadius: wp(1),
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: wp(1),
  },
  scrollContainer: {alignItems: 'center', paddingBottom: hp(8)},
  bgBlobs: {
    position: 'absolute',
    inset: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    opacity: 0.1,
  },
  blob: {width: wp(96), height: wp(96), borderRadius: wp(48), blurRadius: 30},
  cardWrapper: {
    width: '100%',
    maxWidth: wp(90),
    aspectRatio: 3 / 4.5,
    marginTop: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  mockCard: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: wp(5),
    backgroundColor: 'rgba(255,255,255,0.4)',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    transform: [{scale: 0.95}],
  },
  activeCard: {
    width: '100%',
    height: '100%',
    borderRadius: wp(5),
    backgroundColor: colors.cardLight,
    padding: wp(4),
    borderWidth: 1,
    borderColor: colors.borderLight,
    overflow: 'hidden',
  },
  cardHeader: {alignItems: 'center', marginBottom: hp(2)},
  questionLabel: {
    fontSize: rf(1.2),
    fontFamily: fonts.bold,
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: hp(0.5),
  },
  questionText: {
    fontSize: rf(2.5),
    fontFamily: fonts.extrabold,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  choices: {flex: 1, gap: hp(2)},
  choiceCard: {
    flex: 1,
    borderRadius: wp(5),
    overflow: 'hidden',
    marginBottom: hp(1),
  },
  choiceImage: {width: '100%', height: '100%', position: 'absolute'},
  choiceOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  choiceTextContainer: {position: 'absolute', bottom: hp(1), left: wp(3)},
  choiceLabel: {
    fontSize: rf(1),
    fontFamily: fonts.bold,
    textTransform: 'uppercase',
    color: '#fff',
    marginBottom: hp(0.5),
  },
  choiceTitle: {fontSize: rf(2), fontFamily: fonts.extrabold, color: '#fff'},
  choiceDesc: {fontSize: rf(1), color: '#fff', opacity: 0.8},
  swipeClue: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(2),
    paddingHorizontal: wp(4),
  },
  swipeItem: {alignItems: 'center'},
  swipeCircle: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  swipeLabel: {
    fontSize: rf(0.9),
    fontFamily: fonts.bold,
    marginTop: hp(0.5),
    color: colors.slate400,
  },
  swipeCenter: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  swipePulse: {
    backgroundColor: `${colors.primary}20`,
    color: colors.primary,
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    borderRadius: wp(5),
    fontSize: rf(0.9),
    fontFamily: fonts.bold,
    textTransform: 'uppercase',
  },
  floatingActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: hp(3),
  },
  actionButton: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(7),
    backgroundColor: colors.cardLight,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: hp(2),
    backgroundColor: colors.backgroundLight,
    borderTopWidth: 1,
    borderColor: colors.borderLight,
  },
  navItem: {alignItems: 'center'},
  navText: {
    fontSize: rf(0.8),
    fontFamily: fonts.bold,
    textTransform: 'uppercase',
    color: colors.slate400,
  },
});
