import React from 'react';
import '../styling/Results.css';

class Results extends React.Component {

    formatDate = (date) => {
        if (date === null) {
            return 'No date given'
        }

        let input_date = new Date(date);
        let formatOptions = { 
            day:    '2-digit', 
            month:  '2-digit', 
            year:   'numeric',
            hour:   'numeric', 
            minute: '2-digit',
            hour12: true,
            timeZone: 'Pacific/Fiji' // convert to fiji
        };
        let formatted_date = input_date.toLocaleDateString('en-US', formatOptions)
                                 .replace(',', '') + " FJT"; // "02/17/2017 11:32 PM FJT"

        return formatted_date
    }

    renderArticleList = () => {
        let user_searched_articles = this.props.articles

        return (
            <ul>
                {user_searched_articles.map((item, i) => (
                    <li key={i}>
                        <b>{item.title}</b>
                        <br/>
                        {this.formatDate(item.published_date)}
                        <br/>
                        <i><div className="articleAbstract">{item.abstract}</div></i>
                        <br/>
                        <div className="articleLink">{item.url}</div>
                        <br/>
                        <br/>
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                {this.props.article_count === 0 && // Only render this if 0 search results
                    <div>
                        No article results match that search.
                    </div>
                }
                {this.props.article_count > 0 && // Only render this if > 0 search results
                    <div className="numberOfResults">
                        <u><h4>Number of results: {this.props.article_count}</h4></u>
                    </div>
                }
                <div>
                    {this.renderArticleList()}
                </div>
            </div>
        )
    }
}

export default Results;