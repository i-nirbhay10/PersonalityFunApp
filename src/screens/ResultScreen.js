import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {resetAnswers} from '../redux/personalitySlice';

export default function ResultScreen({navigation}) {
  const answers = useSelector(state => state.personality.answers);
  const dispatch = useDispatch();

  const personality = answers.includes('Rest alone')
    ? 'Calm Thinker'
    : 'Social Explorer';

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 26, marginBottom: 12}}>{personality}</Text>

      <Text style={{fontSize: 16, marginBottom: 30}}>
        Based on your choices, this fits you well.
      </Text>

      <TouchableOpacity
        onPress={() => {
          dispatch(resetAnswers());
          navigation.navigate('Home');
        }}
        style={{
          padding: 14,
          backgroundColor: '#6C63FF',
          borderRadius: 10,
        }}>
        <Text style={{color: '#fff'}}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
}
