import React, { Component, Fragment } from 'react';
import Modal from '../../components/UI/Modal/Modal'

const errorWrapper = ( WrappedComponent, axios ) => {
    return class extends Component {
        state = {
            error : null
        }

        componentDidMount () {
            axios.interceptors.request.use(req => {
                this.setState({ error : null})
                return req
            });

            axios.interceptors.request.use(null, error => {
                this.setState({ error : error})
            })
        }
        
        errorHandle = () => {
            this.setState({error : null})
        }

        render() {
            return (
                <Fragment>
                    <Modal Show={this.state.error}
                            close={this.errorHandle}>
                       Network Error
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            )
        }
    }
}

export default errorWrapper;