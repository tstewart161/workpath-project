import React from 'react';
import axios from 'axios';

class Results extends React.Component {

    // Process:
    // use category to return articles from api
    // filter article list for key words
    // only get 10 results
    // render filtered article list
    getNewsArticles = (category) => {
        let URL = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=VAbwhpQE6koVHshxkEiy1fV2ZoiQDwny`

        axios.get(URL).then((res) => { console.log(res.data.results) })

        // return articles
    }

    renderArticleList = (term, category) => {
        console.log(term)
        console.log(category)
        this.getNewsArticles(this.props.category)
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