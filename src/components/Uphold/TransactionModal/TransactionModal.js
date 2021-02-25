import React, { Component } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import axios from '../../../axios';

const { apiBaseUrl } = require('../../../env');

export default class extends Component {
  state = {
    show: true,
    transaction: null,
    confirming: false,
    done: false,
    displaySuccessMessage: false,
    displayErrorMessage: false,
  };

  componentDidMount = async () => {
    const response = await axios.get(
      apiBaseUrl +
        '/uphold/transaction?transactionId=' +
        this.props.transactionId
    );

    const transaction = response.data.response;

    console.log({ transaction });
    this.setState({ transaction });
  };

  confirm = async () => {
    try {
      this.setState({ confirming: true });
      const response = await axios.post(
        apiBaseUrl + '/uphold/commit-transaction',
        window.qs({ transactionId: this.props.transactionId }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );
      this.setState({
        confirming: false,
        displaySuccessMessage: true,
        done: true,
      });
    } catch (error) {
      this.setState({
        confirming: false,
        displayErrorMessage: true,
        done: true,
      });
    }
  };

  handleClose = () => {
    this.setState({ show: false });
    setTimeout(this.props.handleClose, 200);
  };

  render = () => (
    <Modal
      show={!!this.props.transactionId}
      onHide={this.handleClose}
      centered={true}
      size="sm"
    >
      <Modal.Header closeButton>
        <Modal.Title>Transaction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {this.state.transaction ? (
          <>
            <div style={{ display: 'block' }}>
              User to ComputeEx [{this.state.transaction.origin.amount}{' '}
              {this.state.transaction.origin.currency}]
            </div>
            <div style={{ display: 'block' }}>
              ComputeEx to User [{this.state.transaction.esAmount} ES]
            </div>
            <br />
            <div style={{ display: 'block' }}>
              Note: From whitepaper, there is 4% fees, but due to the ongoing
              promotional launch, the fee is removed temporarily.
            </div>
          </>
        ) : (
          <>Loading...</>
        )}

        {this.state.displaySuccessMessage ? (
          <Alert variant="success">Your transaction is successful!</Alert>
        ) : null}
        {this.state.displayErrorMessage ? (
          <Alert variant="danger">Your transaction has failed.</Alert>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        {!this.state.done ? (
          <>
            <Button
              variant="secondary"
              disabled={this.state.confirming}
              onClick={this.handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              disabled={this.state.confirming}
              onClick={this.confirm}
            >
              {!this.state.confirming ? <>Confirm</> : <>Confirming</>}
            </Button>
          </>
        ) : (
          <>
            <Button variant="primary" onClick={this.props.handleClose}>
              Close
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
}
