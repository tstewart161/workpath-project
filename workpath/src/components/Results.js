import React from 'react';
import axios from 'axios';

class Results extends React.Component {

    renderArticleList = () => {
        return (
            <ul>
                {this.props.articles.map((item, i) => (
                    <li key={i}>{item.title}<br/>{item.url}<br/>{item.abstract}<br/>{item.published_date}</li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <div>
                    Number of results: {this.props.articles.length}
                </div>
                {this.renderArticleList()}
            </div>
        )
    }
}

export default Results;