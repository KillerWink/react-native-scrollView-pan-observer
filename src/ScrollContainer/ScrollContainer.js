import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { PanGestureHandler, NativeViewGestureHandler } from 'react-native-gesture-handler';
import { ScrollWrapper } from './ScrollContainer.style';
import { PanContext } from '../PanContext';


class ScrollContainer extends Component {

    static contextType = PanContext;
    constructor(props) {
        super(props);
        this.state = {
            shouldScroll: true,
            scrollState: 0,
        };
        this.onPanGestureEvent = this.onPanGestureEvent.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.calculatePan = this.calculatePan.bind(this);
        this.scroller = React.createRef();
        this.listRef = React.createRef();
        this.panRef = React.createRef();
    }

    calculatePan = panDistance => {
        const { setPanDistance } = this.context;
        setPanDistance(panDistance);
    };

    onPanGestureEvent = (evt) => {
        if(evt.nativeEvent.translationY > 0 && this.state.scrollState === 0){
            this.calculatePan(evt.nativeEvent.translationY);
            const { setPanReleased } = this.context;
            setPanReleased(false);
            this.setState({ shouldScroll: false });
        }else{
            const { setPanY } = this.context;
            setPanY(evt.nativeEvent.translationY);
        }
    };

    onScroll = (evt) => {
        this.setState({ scrollState: evt.nativeEvent.contentOffset.y });
    };

    onHandlerStateChange = (evt) => {
        if(evt.nativeEvent.state === 5){
            const { setPanReleased } = this.context;
            setPanReleased(true);
            this.setState({ shouldScroll: true });
        }
    };


    render() {
        return (
            <ScrollWrapper>
                <PanGestureHandler
                    ref={this.panRef}
                    onGestureEvent={this.onPanGestureEvent}
                    simultaneousHandlers={this.listRef}
                    onHandlerStateChange={this.onHandlerStateChange}
                >
                    <NativeViewGestureHandler
                        ref={this.listRef}
                        simultaneousHandlers={this.panRef}
                        enabled={this.state.shouldScroll}
                    >
                        <ScrollView
                            ref={this.scroller}
                            onScroll={this.onScroll}
                        >
                            {React.cloneElement(this.props.children, {
                                scrollEnabled: false
                            })}
                        </ScrollView>
                    </NativeViewGestureHandler>
                </PanGestureHandler>
            </ScrollWrapper>
        );
    }
}

ScrollContainer.propTypes = {
    children: PropTypes.node
};

export default ScrollContainer;
