import React, { Component } from 'react';
import { Textarea } from '@chakra-ui/core';
import { sendKai } from '../../store/actions/KaiminActions';
import { connect } from 'react-redux';

class SendKai extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kai: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.sendKai(this.state);
    this.setState({
      kai: '',
    });
  };

  render() {
    // console.log(this.props);
    return (
      <div className="send-kai">
        <div className="send-kai-flex">
          <div className="user-img-container">
            <div className="user-img"></div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <Textarea
              border="none"
              value={this.state.kai}
              id="kai"
              onChange={this.handleChange}
              placeholder="What is happening?"
              size="sm"
            />

            <button className="send"> Kaiiii</button>
          </form>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  sendKai,
};

export default connect(null, mapDispatchToProps)(SendKai);
