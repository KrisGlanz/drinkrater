import React from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './styles';

const Post = ({ content, rating, title, author }) => (
  <View style={styles.main}>
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text>{content}</Text>
      <Text>{rating}</Text>
      <Text>{author}</Text>
    </View>
  </View>
);

export default Post;