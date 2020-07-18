import React from 'react';

const Images = (props) => {
    return (
        <div> {
            props.imageList.map(
                (image) => {
                    return (
                        <img key={image.id} src={image.url} />
                    )
                }
            )
        }
        </div>
    )
}

export default Images;