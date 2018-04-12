import React from 'react';
import Menu from './Menu';
import Playing from './Playing';
import Channels from './Channels';
import IntroVideo from './IntroVideo';
import base from '../base';

class App extends React.Component
{
    state = {
        ychannels: {},
        currentlyShowing: {
            isLive: false
        }
    }

    componentDidMount() {
        this.ref = base.syncState('onlinechurch-v3/channels', {
            context: this,
            state: 'ychannels'
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    loadCurrentlyShowing = (videoId, title) => {
        const currentlyShowing = {...this.state.currentlyShowing};
        currentlyShowing['videoId'] = videoId;
        currentlyShowing['title'] = title;
        currentlyShowing['isLive']= true;
        // // 3. Set the state back
        this.setState({ currentlyShowing });

    }

    notLive = (title) => {
        const currentlyShowing = { ...this.state.currentlyShowing };
        currentlyShowing.title = title;
        currentlyShowing.isLive = false;
        currentlyShowing.videoId = '';
        // // 3. Set the state back
        this.setState({ currentlyShowing });

        console.log("not live bro");
    }



    render() {
        return (
            <div>
                <Menu />

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            { this.state.currentlyShowing.isLive ?
                                <Playing currentlyShowing={this.state.currentlyShowing} /> : <IntroVideo />
                            }
                        </div>

                        <div className="col-md-4">
                            <Channels
                                ychannels={this.state.ychannels}
                                loadCurrentlyShowing={this.loadCurrentlyShowing}
                                notLive={this.notLive} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;