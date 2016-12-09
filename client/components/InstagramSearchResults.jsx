
import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import ResultListEntry from './ResultListEntry.jsx';

const InstagramSearchResults = (props) => {
    if (!props.results.length) {
        return (
            <div>
            <LinearProgress
                style={{ height: '4px' }}
                mode="indeterminate"
                color="#f2b632"
            />
            </div>
        );
    }
    return (
        <div className="container">
            <div className="resultContainer">
                {props.results.map((result, index) => {
                    return <ResultListEntry
                        key={index}
                        result={result}
                    />
                })}
            </div>
        </div>

    );
};

export default InstagramSearchResults;
