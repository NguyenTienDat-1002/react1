import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
 
export default function Register(){
    return (
    <View style={styles.container}>
      <Text>Checkin</Text>
      <StatusBar style="auto" />
    </View>
    );
}