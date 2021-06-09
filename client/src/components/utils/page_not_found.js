import React from 'react';

import {FaExclamationCircle} from 'react-icons/fa';

const PageNotFound = () => {
    return (
        <div className="container">
            <div className="not_found_container">
                <FaExclamationCircle />
                <div>
                    Oops !! page not found
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;