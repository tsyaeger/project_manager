import React, {Component} from 'react';
import GroupCard from '../components/groupCard'
import {getGroups} from '../services/todoServices'

class OverviewPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      groups: []
    }
  }

    componentDidMount = () => {
      const groups = getGroups().then(groups => {
        this.setState({ groups })
      })
    }

    renderGroupCards = () => {
      return this.state.groups.map((group, ix) => {
        return <GroupCard
          key={ix}
          id={group["id"]}
          title={group["name"]}
          total={group["total"]}
          completed={group["completed"]}
          handleSelectGroup={this.handleSelectGroup} />
      })
    }

    render(){
      return(
        <div className="content">
          <div className="todos-header-container">
            <h2 className="todos-title">Things To Do</h2>
          </div>
          <div className="todos-container">
            <div className="todos">{this.renderGroupCards()}</div>
          </div>
        </div>
      )
    }
}

export default OverviewPage;
