import React from 'react';

class Playing extends React.Component
{
    render() {
        return (
                <div id="currentlyPlaying">
                    {
                        this.props.currentlyShowing.videoId ? <iframe src="https://www.youtube.com/embed/{this.props.currentlyShowing.videoId}?rel=0&amp;showinfo=0&autoplay=1" title={this.props.currentlyShowing.title} frameBorder="0" allow="autoplay; encrypted-media"  className="mp4downloader_embedButtonInitialized mp4downloader_tagChecked" allowFullScreen></iframe>   :  <h2>Sorry this channel is not live, check another channel.</h2>

                    }
                    {/* <div style="width: 750px; text-align: center;"></div> */}
                </div>
        );
    }
}

export default Playing;