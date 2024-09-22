import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts, getPostsBySearch } from '../../actions/posts';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const dispatch = useDispatch();
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleAdd = (tag) => setTags((prevTags) => [...prevTags, tag]);
    const handleDelete = (tagToDelete) => setTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));

    const handleSearch = () => {
        if (search.trim() || tags.length) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') })); // Tags should be passed as a comma-separated string
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            navigate('/posts');
        }
    };

    return (
        <div className="container mx-auto px-4">
            <div className="flex items-start gap-6">
                {/* Posts Section */}
                <div className="w-full md:w-2/3">
                    <Posts setCurrentId={setCurrentId} />
                </div>

                {/* Sidebar with Search and Form */}
                <div className="w-full md:w-1/3">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                        {/* Search Bar */}
                        <input
                            type="text"
                            placeholder="Search Memories"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="input input-bordered w-full mb-4 bg-gray-700 text-white"
                        />

                        {/* Tags Input */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="badge badge-primary cursor-pointer"
                                    onClick={() => handleDelete(tag)}
                                >
                                    {tag} &times;
                                </span>
                            ))}
                        </div>
                        <input
                            type="text"
                            placeholder="Add Tag"
                            onKeyDown={(e) => e.key === 'Enter' && handleAdd(e.target.value)}
                            className="input input-bordered w-full mb-4 bg-gray-700 text-white"
                        />

                        {/* Search Button */}
                        <button onClick={handleSearch} className="btn btn-primary w-full">
                            Search
                        </button>
                    </div>

                    {/* Form */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;
