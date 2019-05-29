import React, { Fragment } from 'react';

const Nav = ({ onRouteChange, isSignedin }) => {
    if(isSignedin === false){
        return(
            <Fragment>
                <nav 
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                >
                    <div onClick={()=>onRouteChange('register')} className='f4 link dim white pa3 pointer end'>Register</div>
                    <div onClick={()=>onRouteChange('signin')} className='f4 link dim white pa3 pointer end'>Login</div>
                </nav>
            </Fragment>
        );
    } else {
        return(
            <Fragment>
                <nav 
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}
                >
                    <div onClick={()=>onRouteChange('signin')} className='f4 link dim white pa3 pointer end'>Logout</div>
                </nav>
            </Fragment>
        );        
    }

}
export default Nav;