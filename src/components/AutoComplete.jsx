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
    //   let suggestions = [];
    //   if (value.length > 0){
    //     const regex = new RegExp(`ˆ${value}`, 'i');
    //     suggestions = this.state.data.sort().filter(v=>regex.test(v))
    //     console.log(regex)
    //   }
    // this.setState(() => ({suggestions}))
    this.setState({inputValue: value}, ()=> this.renderSuggestions())
  }

  renderSuggestions(){
      const {suggestions, data, inputValue} = this.state;
    //   if(inputValue){
    //     const match = data.reduce((acc, curVal)=>{
    //         curVal[]
    //     }, [])
    //     this.setState({suggestions: match})
    //   }
  }
  
  render(){
    const {suggestions, inputValue, data} = this.state;
    const content = data.map(item => <li>{item}</li>)


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
