import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import {
  Stack,
  FormControl,
  Input,
  InputGroup,
  Icon,
  InputLeftElement,
  FormHelperText,
  Button,
} from '@chakra-ui/core';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      emailup: '',
      username: '',
      passwordup: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Stack spacing="2">
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<Icon name="info" />} />
                <Input
                  type="name"
                  id="name"
                  onChange={this.handleChange}
                  placeholder="Name"
                  aria-label="Name"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<Icon name="email" />} />

                <Input
                  type="email"
                  id="emailup"
                  onChange={this.handleChange}
                  placeholder="email"
                  aria-label="email"
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<Icon name="at-sign" />} />

                <Input
                  type="username"
                  id="username"
                  placeholder="Username"
                  aria-label="Username"
                  onChange={this.handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<Icon name="lock" />} />

                <Input
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  id="passwordup"
                  onChange={this.handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormHelperText textAlign="center">
              We will never share your data!
              <br />
              🤞
            </FormHelperText>
            <Button
              type="submit"
              boxShadow="sm"
              _hover={{ boxShadow: 'sm' }}
              _active={{ boxShadow: 'lg' }}
              variant="ghost"
              // variantColor="red"
            >
              Sign up!
            </Button>
          </Stack>
        </form>
      </>
    );
  }
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  signUp,
};

export default connect(null, mapDispatchToProps)(SignUpForm);
