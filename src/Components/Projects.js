import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  projectItems;
  render() {
    this.getProjectItems();

    return (
      <div className="Projects">
        <h3>My React Projects</h3>
        <div>{this.props.test}</div>
        <div>{this.projectItems}</div>
      </div>
    );
  }

  getProjectItems() {
    if(this.props.projects) {
      this.projectItems = this.props.projects.map(project=>{
        return (
          <ProjectItem key={project.title} 
              project={project}
              deleteProject={this.deleteProject.bind(this)}/>
        );
      });
    }
  };

  deleteProject(id) {
    this.props.deleteProject(id);
  };
}

Projects.propTypes = {
  projects: PropTypes.array,
  deleteProject: PropTypes.func
}

export default Projects;
