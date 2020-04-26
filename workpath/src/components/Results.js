import React from 'react';
import '../styling/Results.css';

class Results extends React.Component {

    //TODO: add error handling: no results from search, 
    formatDate = (date) => {
        let new_date = new Date(date);
        let formatOptions = { 
            day:    '2-digit', 
            month:  '2-digit', 
            year:   'numeric',
            hour:   'numeric', 
            minute: '2-digit',
            hour12: true,
            timeZone: 'UTC + 12'
        };
        let dateString = new_date.toLocaleDateString('en-US', formatOptions)
                                 .replace(',', '') + " EST"; // "02/17/2017 11:32 PM EST"
        // convert to Fiji

        return dateString
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
                {this.props.article_count > 0 &&
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