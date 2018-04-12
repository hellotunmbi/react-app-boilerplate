import React from 'react';
import SingleChannel from './SingleChannel';

class Channels extends React.Component
{

    render() {
        // Object.keys(this.props.channelIds).map(key => {
        //     this.getLiveVideo(this.props.channelIds[key].id);
        //     // console.log(this.props.channelIds[key]);
        //     // this.getLiveVideo('UCEXGDNclvmg6RW0vipJYsTQ');
        // })

        return (
            <div className="channelslist">
                <div className="list-group">
                    { Object.keys(this.props.ychannels).map(key => {
                        return (<SingleChannel
                                key={key}
                                details={this.props.ychannels[key]}
                                loadCurrentlyShowing={this.props.loadCurrentlyShowing}
                                notLive={this.props.notLive} />)
                      }
                    )}
                    {/* { Object.keys(this.props.ychannels)
                        .sort((a, b) => a.)
                        .map(key => {
                        return (<SingleChannel key={key} details={this.props.ychannels[key]}  />)
                      }
                    )} */}
                </div>
            </div>
        )
    }
}

export default Channels;