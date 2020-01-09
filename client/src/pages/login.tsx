import React, { Component, ChangeEvent } from 'react'
import { Title, CancelButton, PageWrapper, FormWrapper, InputGroup, InputGroupPrepend, InputGroupText, FormControl, ButtonGroup, ButtonPrimary, ButtonDanger } from '../components/styledComponent'

interface Props {

}
interface State {
    name: string;
    password: string;
    [x: string]: string;
}

export default class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            password: "",
            name: ""
        }
    }
    render() {
        const { name, password } = this.state;
        return (
            <PageWrapper>
                <FormWrapper>
                    <Title>Login</Title>
                    <InputGroup >
                        <InputGroupPrepend >
                            <InputGroupText>User Id</InputGroupText>
                        </InputGroupPrepend>
                        <FormControl
                            type="text"
                            value={name}
                            name='name'
                            onChange={this.handleChangeInput} />
                    </InputGroup>

                    <InputGroup >
                        <InputGroupPrepend>
                            <InputGroupText>Password</InputGroupText>
                        </InputGroupPrepend>
                        <FormControl type="text"
                            value={password}
                            name='password'
                            onChange={this.handleChangeInput} />
                    </InputGroup>
                    <ButtonGroup>
                        <ButtonPrimary onClick={this.handleLogin}>Login</ButtonPrimary>
                        <ButtonDanger onClick={this.handleCancelLogin}>Cancel</ButtonDanger>
                    </ButtonGroup>

                </FormWrapper>
            </PageWrapper>
        )
    }

    handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('e', e.target.name);
        this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin = (e: any) => {
        console.log('login');
    }

    handleCancelLogin = () => {
        console.log('cancel');
    }
}
