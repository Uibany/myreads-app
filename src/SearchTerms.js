import React, { Component } from 'react';
import PropTypes from 'prop-types';

const searchTerms = [
    'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 
    'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 
    'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 
    'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 
    'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 
    'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 
    'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 
    'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 
    'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming',
     'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
]

class SearchTerms extends Component{
    
    render(){
        return (
            <div className = "search-terms-collection">
                <button className = "search-terms-toggle">Show suggested search terms</button>
                <li className = "search-terms-list">
                    {searchTerms.map(term=>{
                        return(
                            <ol className = "search-term" >{term}</ol>
                        )
                    })}
                </li>
            </div>

        )
    }

}
export default SearchTerms;