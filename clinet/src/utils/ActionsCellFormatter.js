import React, { Component } from "react";
import PropTypes from "prop-types";
import ModalUtil from "../vendor/vs-react-modal-new/Util";
import axios from "axios";

class ActionsCellFormatter extends Component {

  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    color: PropTypes.string
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps !== this.props);
  }

  handleWindowReload = () => {
    window.location.reload();
  }

  handleDeleteMethod = (url) => {
    axios.delete(`http://localhost:5000${url}`).then((response) => {
      if (response.status === 200) {
        ModalUtil.success("Your Data Has Been Deleted Successfully", this.handleWindowReload, {
          title: "React Modal",
          maxWidth: 500,
          header: false,
          footer: true
        });
        //window.location.reload();
      }
    }).catch(error => {
      ModalUtil.error(error.message, null, {
        title: "React Modal",
        maxWidth: 600,
        header: false,
        footer: true
      });
    });
  }

  handleDelete = (url) => {
    ModalUtil.confirm("Do You Want to delete this record", this.handleDeleteMethod.bind(this, url), null, {
      title: "React Modal",
      maxWidth: 500,
      header: false,
      footer: true
    });
    
  }

  getActions = () => {
    const { value } = this.props;

    if (!value && value.length <= 0) {
      return null;
    }

    return value.map((action, idx) => {
      if (action.title.toLowerCase() === "delete") {
        return (<div key={idx} onClick={() => this.handleDelete(action.url)} 
        className="btn btn-link">{action.title}</div>);
      }
      return (
        <a key={idx} className="btn btn-link" href={action.url}>{action.title}</a>
      );
    });
  }

  render() {

    return (
      <div className="actionRow">{this.getActions()}</div>
    );
  }
}

export default ActionsCellFormatter;
