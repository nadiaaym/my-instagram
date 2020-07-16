import React, { useState, useEffect } from 'react';

const CreatePostForm = (props) => {

    const [input, setInput] = useState('');
    const onSubmitush = (e) => {
        e.preventDefault();
        props.onCreatePost(input)

    }

    return (
        <div>
            <form onSubmit={onSubmitush}>
                <h1>message</h1>
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
