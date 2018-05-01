import React from 'react';
import logoimg from '../images/onlinechurchlogo.gif';

class Logo extends React.Component
{
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8"><img alt="Logo" src={logoimg} /></div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">LIVE-NOW
                            <small id="currentTitle">MFM Streams</small>
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Logo;