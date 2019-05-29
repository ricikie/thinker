import React, { Fragment } from 'react';

const ImageDetect = ({ onInputChange, onButtonSubmit, imageUrl, box }) => {
    return(
        <Fragment>
            <div className='ImageDetect'>
                <div>
                    <div className='pa4 shadow-3 formImage'>
                        <p className='f3 purple'>
                            {'Now you are rank '} <strong>{'#1'}</strong>
                        </p>
                        <p className='f5 white'>
                            {'This page thinker will detect many faces. Can you hide ?'}
                        </p>

                        <input className='f4 pa2 w-70' type='text' onChange={onInputChange}/>
                        <button className='w-30 grow f4 link pv2 white bg-light-purple'
                                onClick = {onButtonSubmit}>
                                Detect
                        </button>
                    </div>       
                    <div className='imgPlace absolute'>
                        <img id='thumbnailImg' alt='' src={imageUrl}/>
                        <div className='bounding-box' 
                            style={{
                                top: box.topRow,
                                right: box.rightCol,
                                bottom: box.bottomRow,
                                left: box.leftCol
                            }}
                        >
                        </div>
                    </div>                                
                </div>
            </div>
        </Fragment>
    );
}
export default ImageDetect;