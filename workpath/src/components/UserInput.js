import React from 'react';
import Results from './Results';
import axios from 'axios'

class UserInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            category: 'home',
            term: '',
            articles: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getNewsArticles = (category) => {
        let URL = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=VAbwhpQE6koVHshxkEiy1fV2ZoiQDwny`
        let articleList = []

        let self = this
        axios.get(URL).then((res) => { 
            articleList = res.data.results
            self.setState({
                articles: articleList
            }, console.log(this.state.articles))
        })
    }

    // retrieve list of articles using category
    handleSubmit(event) {
        this.getNewsArticles(this.state.category)
        event.preventDefault();
    }

    handleChange(event) {
        console.log(event.target.value)
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
                        </div>
                        <div>
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
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div>
                    <Results articles={this.state.rawArticles} term={this.state.term} category={this.state.category}/>
                </div>
            </div>
        )
    }
}

export default UserInput;