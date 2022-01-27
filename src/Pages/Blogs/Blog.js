import React from 'react';
import { useParams } from 'react-router-dom';

const Blog = () =>
{
    const { id } = useParams();

    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default Blog;
