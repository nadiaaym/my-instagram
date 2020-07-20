import React from 'react';
import Card from './card.component';

const ImageList = (props) => {
    const getPostsByImgId = (imgId) => {
        return props.posts.filter((p) => p.imgId === imgId)
    }

    return (
        <div> {
            props.imageList.map(
                (image) => {
                    return (
                        <Card key={image.id} image={image} posts={getPostsByImgId(image.id)} onCreatePost={props.onCreatePost}/>
                    )
                }
            )
        }
        </div>
    )
}

export default ImageList;