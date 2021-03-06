import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTask } from '../../actions/tasks';

export class Form extends Component {
  state = {
    title: '',
    status: ''
  };

  static propTypes = {
    addTask: PropTypes.func.isRequired
  };

  onChange = e => this.setState({
    [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { title, status } = this.state;
    const task = { title, status };
    this.props.addTask(task);
    this.setState({
      title: "",
      status: ""
    })
  };
  render() {
    const { title, status } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Añadir tarea</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Título</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <textarea
              className="form-control"
              type="text"
              name="status"
              onChange={this.onChange}
              value={status}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Añadir
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { addTask })(Form);
