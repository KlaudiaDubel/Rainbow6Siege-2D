import React from 'react';
import "../css/pageNotFound.css";

class PageNotFound extends React.Component
{
    render()
    {
        return <div className="muted">
            <div className="stoppedText">
                <p> You have been stopped by a Signal Disruptor.</p>
                <p> Objective not found.</p>
            </div>

        </div>
    }
}

export default PageNotFound;