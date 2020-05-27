import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
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

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    // console.log(this.props);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Stack spacing="2">
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<Icon name="email" />} />

                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  aria-label="Email"
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
                  id="password"
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
            >
              Sign in!
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
  signIn,
};

export default connect(null, mapDispatchToProps)(SignInForm);
