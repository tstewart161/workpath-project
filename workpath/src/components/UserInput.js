import React from 'react';
import Results from './Results';
import axios from 'axios'

class UserInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            category: 'home',
            term: '',
            search_by: 'title',
            articles: [],
            article_count: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getArticleList = (category) => {
        let url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=VAbwhpQE6koVHshxkEiy1fV2ZoiQDwny`

        axios.get(url).then((res) => { 
            let article_list = res.data.results
            console.log(article_list)
            let searched_articles = this.getSearchedArticles(article_list)
            console.log(searched_articles)

            this.setState({
                articles: searched_articles,
                article_count: searched_articles.length
            })
        })
    }

    getSearchedArticles = (article_list) => {
        let term = this.state.term.toLowerCase()
        let search_by = this.state.search_by
        let articles = article_list

        let searched_articles = articles.filter((item) => {
            return item[search_by].toLowerCase().includes(term)
        })
        
        return searched_articles
    }

    handleSubmit(event) {
        this.getArticleList(this.state.category)
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>
                                Search term: 
                                <input type="text" name="term" onChange={this.handleChange}/>
                            </label>
                            <div>
                                <label>
                                    Search by: 
                                    <select onChange={this.handleChange} name="search_by">
                                        <option value="title">Title</option>
                                        <option value="url">URL</option>
                                        <option value="abstract">Abstract</option>
                                        <option value="date">Date</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label>
                                Category: 
                                <select onChange={this.handleChange} id="dropdown" name="category">
                                    <option value="home">Home</option>
                                    <option value="arts">Arts</option>
                                    <option value="automobiles">Automobiles</option>
                                    <option value="books">Books</option>
                                    <option value="business">Business</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="food">Food</option>
                                    <option value="health">Health</option>
                                    <option value="home">Home</option>
                                    <option value="insider">Insider</option>
                                    <option value="magazine">Magazine</option>
                                    <option value="movies">Movies</option>
                                    <option value="nyregion">NY Region</option>
                                    <option value="obituaries">Obituaries</option>
                                    <option value="opinion">Opinion</option>
                                    <option value="politics">Politics</option>
                                    <option value="realestate">Real Estate</option>
                                    <option value="science">Science</option>
                                    <option value="sports">Sports</option>
                                    <option value="sundayreview">Sunday Review</option>
                                    <option value="technology">Technology</option>
                                    <option value="theater">Theater</option>
                                    <option value="t-magazine">T-Magazine</option>
                                    <option value="travel">Travel</option>
                                    <option value="upshot">Upshot</option>
                                    <option value="us">US</option>
                                    <option value="world">World</option>
                                </select>
                            </label>
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                    <Results articles={this.state.articles} 
                             term={this.state.term} 
                             category={this.state.category} 
                             search_by={this.state.search_by}
                             article_count={this.state.article_count}/>
                </div>
            </div>
        )
    }
}

export default UserInput;