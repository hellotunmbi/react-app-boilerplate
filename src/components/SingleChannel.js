import React from 'react';

class SingleChannel extends React.Component
{

   loadChannel = evt => {
        evt.preventDefault();

        const { title } = this.props.details;
        const isLive = "items" in this.props.details.live ? ' | LIVE | ' : '';
        const videoId = isLive ? this.props.details.live.items[0].id.videoId : '';

        if(isLive) {
            this.props.loadCurrentlyShowing(videoId, title);
        } else {
            this.props.notLive(title);
        }

    }


    render() {
        const { title, thumbnail, channelId } = this.props.details;
        const isLive = "items" in this.props.details.live ? ' | LIVE | ' : '';
        const liveClass = isLive ? 'live' : '';
        const videoId = isLive ? this.props.details.live.items[0].id.videoId : '';

        return (
                    <a href="" className="list-group-item list-group-item-action" id={liveClass} onClick={this.loadChannel}>
                        <img src={thumbnail} alt="..." className="pull-left gap-right" width="50px" height="50px" />
                        <h4 className="list-group-item-heading" data-value={channelId} id={videoId}>
                            { title }{ isLive }
                        </h4>
                        <p className="list-group-item-text"><br/></p>
                    </a>

        );
    }
}

export default SingleChannel;