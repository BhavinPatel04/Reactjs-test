import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category} &nbsp;&nbsp;<button onClick={this.deleteProject.bind(this, this.props.project.id)}>X</button>
      </li>
    );
  };

  deleteProject(id) {
    this.props.deleteProject(id);
  };
}

export default ProjectItem;
