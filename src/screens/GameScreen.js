import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addAnswer} from '../redux/personalitySlice';
import {questions} from '../data/questions';

export default function GameScreen({navigation}) {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const question = questions[index];

  const handleAnswer = answer => {
    dispatch(addAnswer(answer));

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      navigation.navigate('Result');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
      <Text style={{fontSize: 22, marginBottom: 30}}>{question.text}</Text>

      {question.options.map(option => (
        <TouchableOpacity
          key={option}
          onPress={() => handleAnswer(option)}
          style={{
            padding: 16,
            borderRadius: 12,
            backgroundColor: '#eee',
            marginBottom: 12,
          }}>
          <Text style={{fontSize: 18}}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
