import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Your Personality</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game')}>
        <Text style={styles.buttonText}>Start Playing</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 28, fontWeight: '600', marginBottom: 40},
  button: {
    backgroundColor: '#6C63FF',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {color: '#fff', fontSize: 18},
});
