import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import PostCard from './PostCard';

export default function PostList(props) {
  const { posts } = props;

  return (
    <FlatList
      data={posts}
      numColumns={1}
      showsVerticalScrollIndicator={false}
      keyExtractor={(posts) => String(posts.post_id)}
      renderItem={(({ item }) => <PostCard post={item} />)}
      contentContainerStyle={styles.flatListContentcontainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentcontainer: {
    backgroundColor: 'white'
  }
})