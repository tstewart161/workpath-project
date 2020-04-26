import React from 'react';

class Results extends React.Component {

    componentDidMount() {
        let date = new Date('2017-02-17T22:32:25.000Z');
        let formatOptions = { 
            day:    '2-digit', 
            month:  '2-digit', 
            year:   'numeric',
            hour:   '2-digit', 
            minute: '2-digit',
            hour12: true 
        };
        let dateString = date.toLocaleDateString('en-US', formatOptions);
        // => "02/17/2017, 11:32 PM"

        dateString = dateString.replace(',', '') + " EST"
        // convert to Fiji


        console.log(dateString);
    }

    renderArticleList = () => {
        // let term = this.props.term
        // let searched_articles = this.props.articles.filter(item => {
        //  item.title.includes(term) || item.url.includes(term) || item.abstract.i})
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