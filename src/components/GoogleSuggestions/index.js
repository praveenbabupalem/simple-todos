// Write your code here

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {suggestionsList: this.props}

  render() {
    const {suggestionsList} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-container">
          <input type="search" className="search" placeholder="Search Google" />
          <ul>
            {suggestionsList.map(eachSearch => (
              <SuggestionItem />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
