import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import TodoCard from '../components/todoCard'
import {getGroup,
  getTasks,
  checkTaskStatus,
  completeTask} from '../services/todoServices'

class DetailsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groupId: "",
      groupName: "",
      groupTasks: [],
      allTasks: []
    }
  }

  componentDidMount() {
    getGroup(this.props.match.params.id).then(g => {
      let group = g[1]
      this.setState({
        groupId: group["id"],
        groupName: group["name"],
        groupTasks: group["tasks"],
        allTasks: getTasks()
      })
    })
  }

    handleCheck = (id) => {
      completeTask(id)
      const newTasks = this.state.groupTasks.map((task) => {
        if (task.id == id) {
          task.completedAt = new Date().toLocaleString()
        }
      })
      this.setState((allTasks,newTasks) => ({
        allTasks: newTasks
      }))
    }

    isUnlocked = (dependencyIds) => {
      return checkTaskStatus(dependencyIds)
    }

    renderTaskCards = () => {
      return this.state.groupTasks.map((task,ix) => {
        return <TodoCard
          key={ix}
          id={task.id}
          title={task.task}
          isComplete={!!task.completedAt}
          isUnlocked={this.isUnlocked(task.dependencyIds)}
          handleCheck={this.handleCheck} />
      })
    }

    render(){
      return(
        <div className="content">
          <div className="todos-header-container">
            <h2 className="todos-title">{this.state.groupName}</h2>
            <Link to={{ pathname: `/overview`}} >
              <p className="groups-link">ALL GROUPS</p>
            </Link>
          </div>
          <div className="todos-container">
            <div className="todos">{this.renderTaskCards()}</div>
          </div>
        </div>
      )
    }
}

export default DetailsPage;
