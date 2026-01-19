import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {resetAnswers} from '../store/personalitySlice';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import ViewShot from 'react-native-view-shot';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../theme';

export default function ResultScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const viewShotRef = useRef();

  const answers = useSelector(state => state.personality.answers);

  // ================== SCORING ENGINE ==================
  const score = {
    introvert: 0,
    extrovert: 0,
    creative: 0,
    practical: 0,
    emotional: 0,
    logical: 0,
  };

  answers.forEach(answer => {
    switch (answer) {
      case 'Rest alone':
        score.introvert += 2;
        score.logical += 1;
        break;
      case 'Meet people':
        score.extrovert += 2;
        break;
      case 'Relieved':
        score.introvert += 1;
        score.practical += 1;
        break;
      case 'Annoyed':
        score.emotional += 1;
        break;
      case 'Stay calm':
        score.logical += 2;
        break;
      case 'Get defensive':
        score.emotional += 2;
        break;
      default:
        break;
    }
  });

  // ================== PERSONALITY DECISION ==================
  let personalityTitle = 'Balanced Explorer';
  let personalityDesc =
    'You adapt well to different situations and balance emotion with reason.';
  let traits = ['Adaptable', 'Balanced', 'Self-aware'];

  if (score.creative + score.emotional > score.logical + score.practical) {
    personalityTitle = 'Creative Dreamer';
    personalityDesc =
      'You see the world not as it is, but as it could be. Your imagination is a boundless ocean of ideas.';
    traits = ['Empathetic', 'Innovative', 'Visionary'];
  } else if (score.extrovert > score.introvert) {
    personalityTitle = 'Social Energizer';
    personalityDesc =
      'You gain energy from people and thrive in dynamic, expressive environments.';
    traits = ['Expressive', 'Outgoing', 'Motivational'];
  } else if (score.introvert > score.extrovert) {
    personalityTitle = 'Calm Thinker';
    personalityDesc =
      'You recharge in quiet moments and think deeply before taking action.';
    traits = ['Reflective', 'Thoughtful', 'Grounded'];
  }

  // ================== ACTIONS ==================
  const handleBackToHome = () => {
    dispatch(resetAnswers());
    navigation.replace('MainTabs');
  };

  const handleShare = async () => {
    try {
      if (!viewShotRef.current) return;

      const uri = await viewShotRef.current.capture();
      await Share.open({
        title: 'My Personality Result',
        url: uri,
        type: 'image/png',
      });
    } catch (error) {
      console.log('Error sharing result:', error);
    }
  };

  // ================== UI ==================
  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={wp(5)}
            color={colors.textPrimary}
          />
        </TouchableOpacity>

        <Text style={styles.navTitle}>Your Result</Text>

        <TouchableOpacity style={styles.navButton}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={wp(5)}
            color={colors.textPrimary}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {/* Header Illustration */}
        <View style={styles.headerIllustration}>
          <View style={styles.blobBg} />
          <View style={styles.iconTopRight}>
            <MaterialCommunityIcons
              name="colors-helper"
              size={rf(4)}
              color={colors.secondary}
            />
          </View>
          <View style={styles.iconBottomLeft}>
            <MaterialCommunityIcons
              name="auto-fix"
              size={rf(4)}
              color={colors.primary}
            />
          </View>
          <View style={styles.characterWrapper}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNWy40NoxofjnX-VX70InQx4HHQrqZ2x_iBPG-XI4cHHVDjw9FJyuTN0dLeWEeQUTiAlxi1Kt6ywoqEd1e_-62bYQhH_VfYFEYgH45Jj2gl1eS3v5hGlMvlOxnBUTnGpgdiSHguhzQzVh2s69qKgAAI-YPkb9zr9jzYsxrDj-B3ui9aZkOdS8yKmCiHl2T2fs9UsxYOeK-KTLUGNx5o23C9TNbtzEeyFj2MO-p4EMWqCNC3sIPCKDOGcwfPxfZw53CLv617QoKnvc',
              }}
              style={styles.characterImage}
            />
          </View>
        </View>

        {/* Result Card with ViewShot */}
        <ViewShot ref={viewShotRef} options={{format: 'png', quality: 1}}>
          <View style={styles.resultCard}>
            <Text style={styles.resultBadge}>The Result is in</Text>
            <Text style={styles.resultTitle}>
              The{' '}
              <Text style={{color: colors.primary}}>{personalityTitle}</Text>
            </Text>
            <Text style={styles.resultDesc}>{personalityDesc}</Text>

            {/* Traits */}
            <View style={styles.traitsSection}>
              <View style={styles.traitsHeader}>
                <View style={styles.line} />
                <Text style={styles.traitsHeaderText}>Core Essence</Text>
                <View style={styles.line} />
              </View>

              <View style={styles.traitsList}>
                {traits.map((trait, i) => (
                  <View
                    key={i}
                    style={[
                      styles.trait,
                      {
                        backgroundColor:
                          i === 0
                            ? `${colors.primary}20`
                            : i === 1
                            ? `${colors.secondary}20`
                            : 'rgba(129,140,248,0.1)',
                      },
                    ]}>
                    <MaterialCommunityIcons
                      name={
                        i === 0
                          ? 'heart'
                          : i === 1
                          ? 'lightbulb-on'
                          : 'eye-outline'
                      }
                      size={rf(2.5)}
                      color={
                        i === 0
                          ? colors.primary
                          : i === 1
                          ? colors.secondary
                          : '#6366F1'
                      }
                    />
                    <Text style={styles.traitText}>{trait}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Actions */}
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.shareButton}
                onPress={handleShare}>
                <MaterialCommunityIcons
                  name="share-variant"
                  size={rf(2.5)}
                  color="#fff"
                />
                <Text style={styles.shareText}>Share Result </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.backButton}
                onPress={handleBackToHome}>
                <Text style={styles.backText}>Back to Discover</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ViewShot>

        {/* Branding */}
        <View style={styles.branding}>
          <View style={styles.brandIcon}>
            <MaterialCommunityIcons name="token" size={rf(2)} color="#fff" />
          </View>
          <Text style={styles.brandText}>Personality Lab</Text>
        </View>

        <View style={{height: hp(5)}} />
      </ScrollView>
    </View>
  );
}

/* ================== STYLES (UNCHANGED) ================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
  },
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  navButton: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(3),
    backgroundColor: colors.cardLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navTitle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.bold,
    fontSize: rf(2.2),
    color: colors.textPrimary,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: hp(2),
    paddingBottom: hp(2),
  },
  headerIllustration: {
    width: '100%',
    aspectRatio: 1,
    maxHeight: 320,
    marginBottom: -60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blobBg: {
    position: 'absolute',
    width: 256,
    height: 256,
    borderRadius: 999,
    backgroundColor: `${colors.primary}20`,
  },
  iconTopRight: {
    position: 'absolute',
    top: 40,
    right: 40,
    opacity: 0.4,
  },
  iconBottomLeft: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    opacity: 0.4,
  },
  characterWrapper: {
    width: 256,
    height: 256,
    borderRadius: wp(6),
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: colors.cardLight,
  },
  characterImage: {
    width: '100%',
    height: '100%',
  },
  resultCard: {
    width: '100%',
    backgroundColor: colors.cardLight,
    borderRadius: wp(6),
    padding: wp(5),
  },
  resultBadge: {
    backgroundColor: `${colors.primary}20`,
    color: colors.primary,
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    borderRadius: wp(3),
    fontFamily: fonts.bold,
    fontSize: rf(1.1),
    textAlign: 'center',
    marginBottom: hp(1),
  },
  resultTitle: {
    fontFamily: fonts.extrabold,
    fontSize: rf(3),
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: hp(1),
  },
  resultDesc: {
    fontFamily: fonts.medium,
    fontSize: rf(1.6),
    color: colors.slate500,
    textAlign: 'center',
    marginBottom: hp(3),
  },
  traitsSection: {
    width: '100%',
    marginBottom: hp(4),
  },
  traitsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(2),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.slate200,
  },
  traitsHeaderText: {
    fontFamily: fonts.bold,
    fontSize: rf(1.1),
    color: colors.slate400,
    marginHorizontal: wp(2),
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  traitsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: wp(2),
  },
  trait: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    borderRadius: wp(5),
    height: hp(4),
    marginBottom: hp(1),
    gap: wp(2),
  },
  traitText: {
    fontFamily: fonts.semibold,
    fontSize: rf(1.2),
    color: colors.textPrimary,
  },
  actions: {
    // width: '100%',
    gap: hp(1.5),
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingVertical: hp(1.5),
    borderRadius: wp(5),
  },
  shareText: {
    fontFamily: fonts.extrabold,
    fontSize: rf(1.8),
    color: '#fff',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(1.2),
    borderRadius: wp(5),
    borderWidth: 1,
    borderColor: colors.slate300,
  },
  backText: {
    fontFamily: fonts.bold,
    fontSize: rf(1.2),
    color: colors.slate400,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  branding: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
    opacity: 0.3,
    marginTop: hp(4),
  },
  brandIcon: {
    width: wp(6),
    height: wp(6),
    backgroundColor: colors.primary,
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandText: {
    fontFamily: fonts.bold,
    fontSize: rf(1.1),
    color: colors.textPrimary,
    textTransform: 'uppercase',
  },
});

// import React, {useRef} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
// import ViewShot from 'react-native-view-shot';
// import Share from 'react-native-share';
// import {resetAnswers} from '../store/personalitySlice';

// export default function ResultScreen({navigation}) {
//   const answers = useSelector(state => state.personality.answers);
//   const dispatch = useDispatch();
//   const viewShotRef = useRef();

//   const personality = answers.includes('Rest alone')
//     ? 'Calm Thinker'
//     : 'Social Explorer';

//   const handleShare = async () => {
//     try {
//       const uri = await viewShotRef.current.capture();
//       await Share.open({
//         url: uri,
//         message: `I got "${personality}" 🤯\nTry this personality game!`,
//       });
//     } catch (error) {
//       console.log('Share error:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* SHAREABLE CARD */}
//       <ViewShot ref={viewShotRef} options={{format: 'png', quality: 0.9}}>
//         <View style={styles.card}>
//           <Text style={styles.title}>Your Personality</Text>
//           <Text style={styles.personality}>{personality}</Text>
//           <Text style={styles.description}>
//             Based on your choices, this fits you well.
//           </Text>
//         </View>
//       </ViewShot>

//       {/* BUTTONS */}
//       <TouchableOpacity style={styles.shareBtn} onPress={handleShare}>
//         <Text style={styles.btnText}>Share Result</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.playAgainBtn}
//         onPress={() => {
//           dispatch(resetAnswers());
//           navigation.navigate('Home');
//         }}>
//         <Text style={styles.btnText}>Play Again</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F4F4F4',
//   },
//   card: {
//     width: 280,
//     padding: 24,
//     borderRadius: 20,
//     backgroundColor: '#6C63FF',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 18,
//     color: '#fff',
//     marginBottom: 10,
//   },
//   personality: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 12,
//   },
//   description: {
//     fontSize: 14,
//     color: '#E0E0FF',
//     textAlign: 'center',
//   },
//   shareBtn: {
//     marginTop: 30,
//     padding: 14,
//     borderRadius: 10,
//     backgroundColor: '#FF9800',
//     width: 200,
//     alignItems: 'center',
//   },
//   playAgainBtn: {
//     marginTop: 12,
//     padding: 14,
//     borderRadius: 10,
//     backgroundColor: '#333',
//     width: 200,
//     alignItems: 'center',
//   },
//   btnText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });
