import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Animated, Dimensions} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {addAnswer} from '../store/personalitySlice';
import {questions} from '../data/questions';
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';
import {colors, fonts} from '../theme';

const {width} = Dimensions.get('window');
const SWIPE_THRESHOLD = width * 0.25;

export default function GameScreen({navigation}) {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [showMicroCopy, setShowMicroCopy] = useState(false);

  const position = useRef(new Animated.ValueXY()).current;
  const question = questions[index];

  /* -------------------- HANDLERS -------------------- */
  const handleAnswer = answer => {
    dispatch(addAnswer(answer));
    setShowMicroCopy(true);
    setTimeout(() => setShowMicroCopy(false), 700);

    // Reset card position
    Animated.timing(position, {
      toValue: {x: 0, y: 0},
      duration: 0,
      useNativeDriver: false,
    }).start();

    // Move to next question or result
    if (index + 1 < questions.length) {
      setIndex(prev => prev + 1);
    } else {
      navigation.replace('Result');
    }
  };

  const onGestureEvent = Animated.event(
    [{nativeEvent: {translationX: position.x}}],
    {useNativeDriver: false},
  );

  const onHandlerStateChange = event => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationX > SWIPE_THRESHOLD) {
        swipeRight();
      } else if (event.nativeEvent.translationX < -SWIPE_THRESHOLD) {
        swipeLeft();
      } else {
        resetCard();
      }
    }
  };

  const swipeRight = () => {
    Animated.timing(position, {
      toValue: {x: width + 100, y: 0},
      duration: 250,
      useNativeDriver: false,
    }).start(() => handleAnswer(question.options[1]));
  };

  const swipeLeft = () => {
    Animated.timing(position, {
      toValue: {x: -width - 100, y: 0},
      duration: 250,
      useNativeDriver: false,
    }).start(() => handleAnswer(question.options[0]));
  };

  const resetCard = () => {
    Animated.spring(position, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    }).start();
  };

  /* -------------------- UI -------------------- */
  return (
    <View style={styles.container}>
      {/* Progress */}
      <View style={styles.progress}>
        <Text style={styles.progressText}>
          {index + 1} / {questions.length}
        </Text>
        <View style={styles.progressBarBg}>
          <View
            style={[
              styles.progressBarFill,
              {width: `${((index + 1) / questions.length) * 100}%`},
            ]}
          />
        </View>
      </View>

      {/* Card */}
      <View style={styles.cardArea}>
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Animated.View
            style={[
              styles.card,
              {
                transform: [
                  {translateX: position.x},
                  {
                    rotate: position.x.interpolate({
                      inputRange: [-width, 0, width],
                      outputRange: ['-10deg', '0deg', '10deg'],
                    }),
                  },
                ],
              },
            ]}>
            <Text style={styles.questionLabel}>Question {index + 1}</Text>
            <Text style={styles.questionText}>{question.text}</Text>

            <View style={styles.hintRow}>
              <Text> ⬅ {question.options[0]} </Text>
              <Text> {question.options[1]} ➡ </Text>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>

      {/* Micro copy */}
      {showMicroCopy && (
        <View style={styles.microCopy}>
          <Text style={styles.microCopyText}>
            {index === 0 ? 'Nice start ✨' : 'Totally you ✨'}
          </Text>
        </View>
      )}
    </View>
  );
}

/* -------------------- STYLES -------------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    paddingTop: hp(3),
  },
  /* Progress */
  progress: {
    paddingHorizontal: wp(6),
    marginBottom: hp(2),
  },
  progressText: {
    fontSize: rf(1.5),
    marginBottom: hp(1),
    color: colors.slate500,
    fontFamily: fonts.bold,
  },
  progressBarBg: {
    height: hp(1),
    backgroundColor: '#eee',
    borderRadius: wp(2),
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: wp(2),
  },
  /* Card */
  cardArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    aspectRatio: 3 / 4,
    backgroundColor: '#fff',
    borderRadius: wp(5),
    padding: wp(6),
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  questionLabel: {
    fontSize: rf(1.4),
    color: colors.primary,
    fontFamily: fonts.bold,
    textAlign: 'center',
  },
  questionText: {
    fontSize: rf(2.2),
    fontFamily: fonts.extraBold,
    textAlign: 'center',
  },
  hintRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: colors.slate400,
  },
  /* Micro copy */
  microCopy: {
    position: 'absolute',
    bottom: hp(10),
    alignSelf: 'center',
  },
  microCopyText: {
    backgroundColor: colors.primary,
    color: '#fff',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    borderRadius: wp(6),
    fontSize: rf(1.6),
    fontFamily: fonts.bold,
  },
});
