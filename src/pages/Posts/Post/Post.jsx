import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { likePost, deletePost } from '../../../actions/posts';
import { AiOutlineLike, AiFillLike, AiFillDelete, AiOutlineEdit } from 'react-icons/ai'; // Icons from react-icons

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
                ? (
                    <>
                        <AiFillLike className="inline-block" />&nbsp;
                        {post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
                    </>
                ) : (
                    <>
                        <AiOutlineLike className="inline-block" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
                    </>
                );
        }
        return <><AiOutlineLike className="inline-block" />&nbsp;Like</>;
    };

    return (
        <div className="card shadow-lg rounded-xl bg-gradient-to-r from-purple-700 to-indigo-800 h-full relative hover:scale-105 transform transition duration-300 ease-in-out overflow-hidden w-full lg:w-80 max-w-md">
            <div className="relative h-80">
                <img className="object-cover h-full w-full opacity-90" src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
            </div>
            <div className="absolute top-5 left-5 text-white">
                <h6 className="font-bold text-lg">{post.name}</h6>
                <p className="text-sm italic">{moment(post.createdAt).fromNow()}</p>
            </div>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                <div className="absolute top-5 right-5 space-x-2 flex">
                    <button onClick={() => setCurrentId(post._id)} className="text-white">
                        <AiOutlineEdit className="text-2xl" />
                    </button>
                    <button onClick={() => dispatch(deletePost(post._id))} className="text-white">
                        <AiFillDelete className="text-2xl" />
                    </button>
                </div>
            )}
            <div className="px-6 py-4">
                <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag) => (
                        <span key={tag} className="text-xs text-indigo-200 bg-indigo-700 px-2 py-1 rounded-full">{`#${tag}`}</span>
                    ))}
                </div>
                <h2 className="text-white text-2xl font-semibold mb-2 truncate">{post.title}</h2>
                <p className="text-gray-300 text-sm">{post.message}</p>
            </div>
            <div className="flex justify-between items-center px-6 pb-6">
                <button className="btn btn-primary btn-md flex items-center space-x-2" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
                    <Likes />
                </button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <button className="btn btn-error btn-md flex items-center space-x-2" onClick={() => dispatch(deletePost(post._id))}>
                        <AiFillDelete className="mr-1" /> Delete
                    </button>
                )}
            </div>
        </div>
    );
};

export default Post;
