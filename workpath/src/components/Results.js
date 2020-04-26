import React from 'react';
import axios from 'axios';

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            articles: []
        }
    }

    // componentDidMount() {
    //     let rawArticles = this.getNewsArticles(this.props.category)
    //     this.setState({
    //         articles: rawArticles
    //     })
    // }

    // // Process:
    // // use category to return articles from api
    // // filter article list for key words
    // // only get 10 results
    // // render filtered article list
    // getNewsArticles = (category) => {
    //     let URL = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=VAbwhpQE6koVHshxkEiy1fV2ZoiQDwny`
    //     let articles = []

    //     axios.get(URL).then((res) => { 
    //         articles = res.data.results
    //         this.setState({
    //             articles: articles
    //         })
    //     })

    //     return articles
    // }

    renderArticleList = () => {
        return (
            <ul>
                {this.state.articles.map((item, i) => (
                    <li key={i}>{item.title}<br/>{item.url}<br/>{item.abstract}<br/>{item.published_date}</li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                {this.renderArticleList()}
            </div>
        )
    }
}

export default Results;