import React, { Component } from 'react';
import uuid from 'uuid';
import AddProject from './Components/AddProject';
import Projects from './Components/Projects';
import ToDos from './Components/ToDos';
import 'whatwg-fetch';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  };

  /**
   * Lifecycle method
   * will be called every time the component is rendered
   * if getting data from ajax, do it in this method and setState
   */
  componentWillMount() {
    this.getProjects();
  };

  componentDidMount() {
    this.getToDos();
  };
  
  render() {
    /**
     * Everything has to be in one element (main div)
     * In JSX, attr 'class' cannot be used, instead use 'className' | use 'htmlFor' instead of 'for' in "label" tag
     */
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <hr />
        <Projects test="This is how to pass prop to a component"
            projects={this.state.projects}
            deleteProject={this.deleteProject.bind(this)} />
        <hr />
        <ToDos toDos={this.state.todos} />
      </div>
    );
  };

  getProjects() {
    this.setState({projects: [
        {
          id: uuid.v4(),
          title: 'ebay',
          category: 'Website'
        },{
          id: uuid.v4(),
          title: 'ebay Mobile',
          category: 'Mobile App'
        }
    ]});
  };

  handleAddProject(newProject) {
    this.state.projects.push(newProject);
    this.setState(this.state.projects);
  };

  deleteProject(id) {
    let index = this.state.projects.findIndex(project=>project.id === id);
    this.state.projects.splice(index, 1);
    this.setState(this.state.projects);
  };

  getToDos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response)=>{
        return response.json();
      })
      .then((body)=>{
        this.setState({todos: body}, ()=>{
          console.log(this.state);
        });
      });
  };
}

export default App;
