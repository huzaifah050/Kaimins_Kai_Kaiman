import React, { Component } from 'react';
import { Textarea } from '@chakra-ui/core';

export class SendKai extends Component {
  render() {
    return (
      <div className="send-kai">
        <div className="send-kai-flex">
          <div className="user-img-container">
            <div className="user-img"></div>
          </div>
          <Textarea
            border="none"
            // value={value}
            // onChange={handleInputChange}
            placeholder="What is happening?"
            size="sm"
          />
        </div>
        <button className="send"> Kaiiii</button>
      </div>
    );
  }
}

export default SendKai;
