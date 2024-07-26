import React, { useState, useEffect } from 'react';
import { getTopPostApi } from '../api/post';
import PostList from '../components/PostList';
import { addPost } from '../utils/addPost';

export default function TopScreen() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            await loadPosts();
        })()
    }, [])

    const loadPosts = async () => {
        try {
            const response = await getTopPostApi();
            const postsArray = [];
            addPost(postsArray, response);
            setPosts(...posts, postsArray);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PostList posts={posts} />
    );
}