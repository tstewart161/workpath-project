import React from 'react';
import Results from './Results';
import '../styling/UserInput.css'
import axios from 'axios'

class UserInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            news_category: 'home',
            search_term: '',
            search_by: 'title',
            articles: [],
            article_count: -1
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getArticleList = (news_category) => {
        let url = `https://api.nytimes.com/svc/topstories/v2/${news_category}.json?api-key=VAbwhpQE6koVHshxkEiy1fV2ZoiQDwny`

        axios.get(url).then((res) => {
            let raw_article_list = res.data.results
            let user_searched_articles = this.getSearchedArticles(raw_article_list)

            this.setState({
                articles: user_searched_articles.slice(0, 10), // limit results to first 10 articles
                article_count: user_searched_articles.length
            })
        })
    }

    getSearchedArticles = (raw_article_list) => {
        let search_term = this.state.search_term.toLowerCase()
        let search_by = this.state.search_by

        let searched_articles = raw_article_list.filter((item) => {
            return item[search_by].toLowerCase().includes(search_term)
        })

        return searched_articles
    }

    handleSubmit(event) {
        this.getArticleList(this.state.news_category)
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
                    <form className="inputForm" onSubmit={this.handleSubmit}>
                        <div>
                            <label className="searchBar">
                                Search term: 
                                <input type="text" name="search_term" onChange={this.handleChange}/>
                            </label>
                        </div>
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
                        <div>
                            <label>
                                Category: 
                                <select onChange={this.handleChange} id="dropdown" name="news_category">
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
                        <div>
                            <input type="submit" value="Search" />
                        </div>
                    </form>
                </div>
                <div>
                    <Results articles={this.state.articles} 
                             article_count={this.state.article_count}/>
                </div>
            </div>
        )
    }
}

export default UserInput;