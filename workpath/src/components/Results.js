import React from 'react';

class Results extends React.Component {

    renderArticleList = () => {
        // let term = this.props.term
        // let searched_articles = this.props.articles.filter(item => {
        //     item.title.includes(term) || item.url.includes(term) || item.abstract.i})
        return (
            <ul>
                {this.props.articles.map((item, i) => (
                    <li key={i}>
                        {item.title}
                        <br/>
                        {item.url}
                        <br/>
                        {item.abstract}
                        <br/>
                        {item.published_date}
                    </li>
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