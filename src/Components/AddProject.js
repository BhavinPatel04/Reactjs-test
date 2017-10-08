import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {

  constructor() {
    super();

    this.state = {
      newProject: {}
    }
  };

  static defaultProps = {
    categories: ['Website', 'Mobile App']
  };
  categoryOptions;

  render() {
    this.getCategoryOptions();

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {this.categoryOptions}
            </select>
          </div>
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }

  getCategoryOptions() {
    this.categoryOptions = this.props.categories.map(category=>{
      return <option key={category} value={category}>{category}</option>
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    if(this.refs.title.value) {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, function() {
        console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    } else {
      alert('TItle required');
    }
  };
}

export default AddProject;
