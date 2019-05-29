import React, { Fragment } from 'react';
import ImageDetect from './ImageDetect';

const Wrapper = ({ onInputChange, onButtonSubmit, imageUrl, box }) => {
    return(
        <Fragment>
            <div className='wrapper'>
                <ImageDetect 
                    onInputChange = {onInputChange}
                    onButtonSubmit = {onButtonSubmit}
                    imageUrl={imageUrl}
                    box={box}
                />
            </div>
        </Fragment>
    );
}
export default Wrapper;