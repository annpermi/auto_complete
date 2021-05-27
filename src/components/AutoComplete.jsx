import React,{ Component } from 'react';
import './autoComplete.css';

class AutoComplete extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ],
      inputValue: "",
      suggestions: []
    }
  }
  onInput = (e) => {
    const value = e.target.value;
    this.setState({inputValue: value}, ()=> this.renderSuggestions())
  }

  renderSuggestions(){
      const {suggestions, data, inputValue} = this.state;
      if(inputValue){
        const suggestions = data.reduce((acc, curVal)=>{
            if(curVal.substr(0, inputValue.length).toLocaleLowerCase()===inputValue.toLocaleLowerCase()){
              acc.push(curVal)
            }
            return acc;
        }, [])
        this.setState({suggestions})
      }else{
        this.setState({suggestions: []})
      }
  }

  selectSuggestion(item){
    this.setState({inputValue: item, suggestions: []})
  }
  
  render(){
    const {suggestions, inputValue} = this.state;
    const content = suggestions.map(item => <li key={item} onClick={()=>this.selectSuggestion(item)}>{item}</li>)
    return (
      <div className="App">
        <div className='wrapper'>
          <p>Search:</p>
          <div className='autoComplete'>
            <input type='text' value={inputValue} onChange={this.onInput}/>
            <ul>
                {content}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AutoComplete;
