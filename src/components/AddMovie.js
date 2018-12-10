import React from 'react';

class AddMovie extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        value: ''
      };
    }
  
    handleInputChange(e) {
      e.preventDefault();
        this.props.addClick(this._inputValue.value);
        this.setState({
            value: this._inputValue.value
        });
    }
  
    render() {
      return (
        <div className="AddMovie-bar">
          <form onSubmit={this.handleInputChange.bind(this)}>
            <input placeholder="Add movie title here" ref={(v) => this._inputValue = v}></input>
            <span className="spacer"></span>
            <button className="green" type="submit">Add</button>
          </form>
        </div>
      );
    }
  }
  
  export default AddMovie;
  