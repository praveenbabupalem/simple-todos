// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {eachSearch} = props
  const {id, suggestion} = eachSearch

  return (
    <li>
      <p>{suggestion}</p>
    </li>
  )
}

export default SuggestionItem
