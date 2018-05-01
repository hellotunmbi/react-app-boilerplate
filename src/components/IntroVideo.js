import React from 'react';

class IntroVideo extends React.Component
{
    render() {
        return (
                <div id="currentlyPlaying">
                   <iframe id="ytplayer" type="text/html" title="intro" src="https://www.youtube.com/embed?listType=playlist&list=PLcvdgHcJqApCPKq_Hcnp0hnKH6-Frh8kH&loop=1&rel=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
                </div>
        );
    }
}

export default IntroVideo;