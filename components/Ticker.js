// components/Ticker.js
'use client'
import React from 'react';
import { AnimationPlaybackControls, useAnimate, useInView } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const TICKER_DIRECTION_UP = -1;
const TICKER_DIRECTION_DOWN = 1;

const Ticker = (props) => {
    const {
        children,
        duration = 10,
        onMouseEnter = () => {},
        onMouseLeave = () => {},
        isPlaying = true,
        direction = TICKER_DIRECTION_UP,
    } = props;
    const tickerRef = React.useRef(null);
    const [tickerUUID, setTickerUUID] = React.useState('');
    const [tickerContentHeight, setTickerContentHeight] = React.useState(0);
    const [numDupes, setNumDupes] = React.useState(1);
    const [scope, animate] = useAnimate();
    const [animationControls, setAnimationControls] = React.useState(undefined);
    const isInView = useInView(scope);

    React.useEffect(() => {
        setTickerUUID(uuidv4());
    }, []);

    React.useEffect(() => {
        let contentHeight = 0;

        for (let index = 0; index < children.length; index++) {
            const element = document.getElementById(tickerUUID + '_' + index)?.clientHeight;
            if (element) {
                contentHeight += element;
            }
        }

        setTickerContentHeight(contentHeight);
    }, [children, tickerUUID]);

    React.useEffect(() => {
        if (tickerRef.current && tickerContentHeight) {
            setNumDupes(Math.max(Math.ceil((2 * tickerRef.current.clientHeight) / tickerContentHeight), 1));
        }
    }, [tickerRef.current, tickerContentHeight]);

    React.useEffect(() => {
        if (isInView && !animationControls) {
            const controls = animate(
                scope.current,
                { y: tickerContentHeight ? tickerContentHeight * direction : 0 },
                { ease: 'linear', duration, repeat: Infinity }
            );
            controls.play();
            setAnimationControls(controls);
        }
    }, [isInView, animationControls, scope, animate, tickerContentHeight, direction, duration]);

    React.useEffect(() => {
        if (animationControls) {
            if (!isInView || !isPlaying) {
                animationControls.pause();
            } else {
                animationControls.play();
            }
        }
    }, [isInView, isPlaying, animationControls]);

    return (
        <div
            className="FMT__container relative"
            ref={tickerRef}
            style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="gradient-overlay gradient-top" />
            <div
                ref={scope}
                className="FMT__container__contents"
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                {children.map((item, index) => (
                    <div key={index} id={`${tickerUUID}_${index}`}>
                        {item}
                    </div>
                ))}
                {[...Array(numDupes)].map((_, dupIndex) =>
                    children.map((item, index) => (
                        <div key={`${dupIndex}-${index}`}>
                            {item}
                        </div>
                    ))
                )}
            </div>
            <div className="gradient-overlay gradient-bottom" />
        </div>
    );
};

export default Ticker;
export { TICKER_DIRECTION_UP, TICKER_DIRECTION_DOWN };
