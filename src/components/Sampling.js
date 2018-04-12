import React from 'react';
import Menu from './Menu';
// import Playing from './Playing';
import Channels from './Channels';
// import axios from 'axios';

import subscriptions from './subscriptions';

class App extends React.Component
{
    state = {
        ychannels: {},
        liveChannels: {},
        channelIds: {}
    }

    componentWillMount() {

        console.log("About to mount");
        const ychannels = { ...this.state.ychannels };
        const channelIds = { ...this.state.channelIds };
        // const url = "https://www.googleapis.com/youtube/v3/subscriptions?key=AIzaSyDHqhu5jTxKnMn6MnSHm5V6A7Ju1Sh2VOY&part=id,snippet,contentDetails&channelId=UCe45sPolCZzsnmQuDOxVZ_Q&maxResults=50";
        // axios.get(subscriptions)
        //     .then((response) => {

        const sub = { ...subscriptions };
                const res = sub.items;
                res.map(key => {
                    // add returned values into new object
                    let singleChannel = {
                        channelId: key.snippet.resourceId.channelId,
                        thumbnail: key.snippet.thumbnails.default.url,
                        title: key.snippet.title
                    };

                    ychannels[key.id] = singleChannel;
                    channelIds[key.id] = { id: key.snippet.resourceId.channelId};
                }); // end of map

                this.setState({ ychannels: ychannels});
                this.setState({ channelIds: channelIds});

            // })
            // .catch(err => console.log('Error occured: '+err));

            console.log("Finished About to mount");
    }

    componentDidMount() {
        console.log("Just Did Mount");
        // this.getLiveVideo('UCEXGDNclvmg6RW0vipJYsTQ');

        console.log("Finished Did MOunt");
    }



    render() {

        return (
            <div>
                <Menu />

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {/* <Playing /> */}
                        </div>

                        <div className="col-md-4">
                            <Channels ychannels={this.state.ychannels} channelIds={this.state.channelIds} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;