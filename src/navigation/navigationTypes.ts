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

export type NewBoardScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Board'
>;
export type NewGroupScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'NewGroup'
>;
export type NewTaskScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'TaskForm'
>;
