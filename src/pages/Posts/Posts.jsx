import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    console.log('Posts in component:', posts); // Add this log to check posts in the component

    if (!Array.isArray(posts) || posts.length === 0) {
        return <p className="text-center text-orange-500 mx-auto">No posts available</p>;
    }

    return (
        <div className="p-5">
            <div className="flex flex-wrap justify-center gap-6">
                {posts.map((post) => (
                    <Post key={post._id} post={post} setCurrentId={setCurrentId} />
                ))}
            </div>
        </div>
    );
};

export default Posts;
