import React from 'react';
// import spinner from './loader.gif';
// import spinner from './Spinner-3.gif';
// import spinner from './Iphone-spinner-2.gif';
import spinner from './Spinner-1s-177px.gif';

const Spinner= () => {
    return (
        <div>
            <img
                src={spinner}
                alt="Loading...."
                style={{ width: '200px', margin: '40px auto', display: 'block' }}
            />
        </div>
    );
};
export default Spinner;