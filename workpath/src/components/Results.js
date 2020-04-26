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

    componentWillReceiveProps() {
        let rawArticles = this.getNewsArticles(this.props.category)
        this.setState({
            articles: rawArticles
        }, console.log(this.state.articles))
    }

    // Process:
    // use category to return articles from api
    // filter article list for key words
    // only get 10 results
    // render filtered article list
    getNewsArticles = (category) => {
        let URL = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=VAbwhpQE6koVHshxkEiy1fV2ZoiQDwny`
        let articles = []

        axios.get(URL).then((res) => { 
            console.log(res.data.results)
            articles = res.data.results
            this.setState({
                articles: articles
            })
        })

        return articles
    }

    renderArticleList = (term, category) => {
        console.log(term)
        console.log(category)
        // render the articles from state.
    }

    render() {
        return (
            <div>
                {this.renderArticleList(this.props.term, this.props.category)}
            </div>
        )
    }
}

export default Results;