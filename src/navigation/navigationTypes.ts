import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './Route';

export type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type BoardScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;
