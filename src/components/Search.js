import React from 'react';

class Search extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        value: ''
      };
    }
  
    handleInputChange(e) {
      e.preventDefault();
        this.props.searchClick(this._inputValue.value);
        this.setState({
            value: this._inputValue.value
        });
    }
  
    render() {
      return (
        <div className="search-bar">
          <form onSubmit={this.handleInputChange.bind(this)}>
            <input ref={(v) => this._inputValue = v}></input>
            <button type="submit">Go!</button>
          </form>
        </div>
      );
    }
  }
  
  export default Search;
  