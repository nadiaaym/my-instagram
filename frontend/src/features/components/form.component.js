import React, { useState, useEffect } from 'react';

const CreatePostForm = (props) => {
    const [input, setInput] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        props.onCreatePost(input, props.image.id )
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    autoFocus
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <input type='submit' value='create post' />
            </form>
        </div>
    )
};

export default CreatePostForm;
