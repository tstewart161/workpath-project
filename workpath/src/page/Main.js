import React from 'react';
import UserInput from '../components/UserInput';
import Results from '../components/Results'; 

class Main extends React.Component {


    render() {
        return (
            <div>
                <h1>Welcome to Workpath News</h1>
                <div>
                    <p>This tool allows you to search top stories from the NYT and display
                    them in a list with their titles, link, a brief description, and the date
                    they were published. Search by article category and keywords. Try it out!</p>
                </div>
                <div>
                    <UserInput />
                    <br/>
                    <Results />
                </div>
            </div>
        )
    }
}

export default Main;