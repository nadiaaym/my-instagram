import React from 'react';

const RenderPostList = (props) => {
    return (
        <ul>
            {
                props.posts.map((post, index) => {
                    return (
                        <li key={index}>{post.message}</li>
                    )
                })
            }
        </ul>
    )

}

export default RenderPostList;