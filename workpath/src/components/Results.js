import React from 'react';
import axios from 'axios';

class Results extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            category: ''
        }
    }

    getNewsArticles = (term, category) => {
        let URL = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=yourkey`
        let config = { 'Authorization': '27c7fabc-2398-4c3d-b85c-b1169ddb364a' }

        axios.get(URL, { headers: config }).then(console.log())
    }

    render() {
        return (
            <div>
                Results
            </div>
        )
    }
}

export default Results;