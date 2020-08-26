import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTasks, deleteTask } from '../../actions/tasks'

export class Tasks extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    return (
      <Fragment>
        <h2>Tareas</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Estado</th>
              <th>Fecha creación</th>
            </tr>
          </thead>
          <tbody>
            { this.props.tasks.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>{new Date(task.created_at).toLocaleString()}</td>
                <td><button onClick={this.props.deleteTask.bind(this, task.id)} className="btn btn-danger btn-sm">Eliminar</button></td>
              </tr>
            )) }
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default connect(mapStateToProps, { getTasks, deleteTask })(Tasks)
