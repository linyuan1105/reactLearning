import React from 'react';
class FF extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ["grapefruit","lime"]};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      let value = this.state.value
      value.unshift(event.target.value)
      value.pop()
      this.setState({value: value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            
            <select multiple={true} defaultValue={this.state.value} onChange={(e)=>{this.handleChange(e)}}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }
  
export default FF