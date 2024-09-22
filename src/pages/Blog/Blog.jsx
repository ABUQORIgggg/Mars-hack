import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegCommentDots } from "react-icons/fa";

const Blog = () => {
  const initialPosts = [
    {
      id: 1,
      author: 'Muhammadyusuf Adxamov',
      time: 'Сегодня 11:00',
      title: 'Qarsillama Somsa',
      image: 'https://via.placeholder.com/150', // Replace with the actual image URL
      likes: 1,
      liked: false, // Track whether the post is liked
      comments: 0
    }
  ];

  const friends = [
    {
      id: 1,
      name: 'Ilhomov Abubakir',
      description: 'Individual Pro (Programming) | INPR-1021',
      avatar: 'https://via.placeholder.com/100' 
    }
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [comment, setComment] = useState(""); // Track the input for the comment

  // Handle like toggle
  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked } : post
    ));
  };

  // Handle comment input change
  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="flex gap-[8%] px-4 py-6 w-full">
      <div className="max-w-[60%] w-full">
        <h2 className="text-2xl text-blue-800 font-semibold mb-4">Посты</h2>
        
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="flex items-center mb-4">
              <img
                src="https://via.placeholder.com/50"
                alt={post.author}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-gray-500 text-sm">{post.time}</p>
              </div>
            </div>
            <p className="text-lg font-semibold">{post.title}</p>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-lg mt-4"
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-6 select-none text-gray-500">
                {/* Like button logic */}
                <span 
                  className='flex items-center gap-1 cursor-pointer'
                  onClick={() => handleLike(post.id)}
                >
                  {post.liked ? <FcLike /> : <IoIosHeartEmpty />} {post.likes}
                </span>
                <span className='flex items-center gap-1'><FaRegCommentDots/> {post.comments} Comments</span>
              </div>
            </div>
            <div className='flex gap-2 mt-3'>
              <input 
                placeholder='Оставьте комментарий' 
                className='py-3 max-w-[80%] px-2 w-full bg-base-200 rounded-lg' 
                type="text" 
                value={comment}
                onChange={handleInputChange}
              />
              <button 
                className='w-full max-w-[20%] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 font-semibold text-white rounded-lg disabled:bg-slate-300'
                disabled={!comment.trim()}
              >
                Send
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[40%]">
        <h2 className="text-2xl text-blue-800 font-semibold mb-4">Друзья</h2>
        
        {friends.map((friend) => (
          <div key={friend.id} className="bg-white w-full p-4 rounded-lg shadow mb-6 flex items-center">
            <img
              src={friend.avatar}
              alt={friend.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{friend.name}</p>
              <p className="text-gray-500 text-sm">{friend.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
