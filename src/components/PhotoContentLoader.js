import React from 'react';
import ContentLoader, { rect } from 'react-content-loader';

function PhotoContentLoader(props) {
    return (
        <ContentLoader height="1000px" viewBox="0 0 1200 1000">
            <rect x="80" y="17" width="1200px" height="1000px"/>
        </ContentLoader>
    );
}

export default PhotoContentLoader;