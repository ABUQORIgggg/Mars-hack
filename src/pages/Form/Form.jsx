import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0); // Ensure this is passed correctly from the parent
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Submitting post data:", postData); // Log the data before submitting
  
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name })); // Create a new post
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name })); // Update an existing post
    }
    clear(); // Clear the form after submission
  };
  
  
  

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-md">
      <form autoComplete="off" noValidate className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-white text-xl font-bold">
          {currentId ? `Editing "${post?.title}"` : 'Create News'}
        </h2>
        <input
          className="input input-bordered w-full bg-gray-700 text-white"
          type="text"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <textarea
          className="textarea textarea-bordered w-full bg-gray-700 text-white"
          rows="4"
          placeholder="Message"
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        />
        <input
          className="input input-bordered w-full bg-gray-700 text-white"
          type="text"
          placeholder="Tags (comma separated)"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <div className="mb-4">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <button className="btn btn-primary w-full" type="submit">
          Submit
        </button>
        <button className="btn btn-error w-full" type="button" onClick={clear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;
