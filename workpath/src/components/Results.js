import React from 'react';

class Results extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            article_count: 0
        }
    }

    formatDate = (date) => {
        let new_date = new Date(date);
        let formatOptions = { 
            day:    '2-digit', 
            month:  '2-digit', 
            year:   'numeric',
            hour:   'numeric', 
            minute: '2-digit',
            hour12: true
        };
        let dateString = new_date.toLocaleDateString('en-US', formatOptions)
                                 .replace(',', '') + " EST"; // "02/17/2017 11:32 PM EST"
        return dateString
    }

    getSearchedArticles = () => {
        let term = this.props.term.toLowerCase()
        let search_by = this.props.search_by
        let articles = this.props.articles

        let searched_articles = articles.filter((item) => {
            return item[search_by].toLowerCase().includes(term)
        })
        
        return searched_articles
    }

    renderArticleList = () => {
        let searched_articles = this.getSearchedArticles()

        return (
            <ul>
                {searched_articles.map((item, i) => (
                    <li key={i}>
                        {item.title}
                        <br/>
                        {item.url}
                        <br/>
                        {item.abstract}
                        <br/>
                        {this.formatDate(item.published_date)}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <div>
                    Number of results: {this.state.article_count}
                </div>
                {this.renderArticleList()}
            </div>
        )
    }
}

export default Results;