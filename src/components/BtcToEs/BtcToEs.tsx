// import axios from 'axios';
import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { getToken } from '../../API/api';

// const apiBaseUrl = 'https://accounts.probit.com/'; 


export default class extends Component {
  state = {
    
  };

  intervalId = null;

  componentDidMount = () => {
    (async() => {
      // const x = await getToken();
      // console.log(x);
      
    })();
 



  };




 

  render() {
    return (
      <>
      <div className="welcome-area v2 wow fadeInUp" id="home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 align-self-center">
              <div className="welcome-right">
                <div className="welcome-text">
                  <h1>Convert BTC to ES</h1>
                  <h4>Now converting BTC to Era Swap is made easy.</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 offset-1">
              <div className="v2 welcome-progress">
              <InputGroup>
                <FormControl
                  id="btc-amount-input-box"
                  placeholder="Enter amount"
                  className="form-input light large"
                  // onChange={this.updateEsAmount}
                  
                />
                <InputGroup.Append className="large light">
                  <Button
                    variant="outline-secondary"
                    disabled
                  >
                    BTC
                  </Button>
                </InputGroup.Append>
              </InputGroup>

              {/* <p style={{lineHeight:'2rem', margin: '1rem 0'}}>
                You'll get approximately<br />
              <span className="es-amount-number">{this.state.esAmount || 0}</span><span className="es-amount-symbol">ES</span>
                {this.state.probitOrderBook.length > 1 ? <>(live from Probit)</> : null}
              </p>
              <div style={{textAlign: 'center', paddingTop: '10px'}}>

                {this.state.isBtcAvailable === true
                ? <>
                  <p>Enter an address where you want to receive converted ES.</p>
                  <FormControl
                    id="es-address-withdrawal"
                    placeholder="Enter ES wallet address"
                    className="form-input light large"
                    value={this.state.esWalletAddress}
                    style={{border:this.state.invalidWalletAddress===true?'1px solid red':undefined}}
                    onChange={event => this.setState({ esWalletAddress: event.target.value })}
                  />
                </> : null}

                {this.state.errorMessage ? <Alert variant="danger">{this.state.errorMessage}</Alert> : null}
                {this.state.successMessage ? <Alert variant="success">{this.state.successMessage}</Alert> : null} */}

                <button
                  className="gradient-btn  large"
                  style={{marginTop:'10px',padding:'10px', display: 'block', width: '100%'}}
                  onClick={getToken}
                  // disabled={this.state.btcButtonDisabled}
                  // onClick={async() => {
                  //   if(!this.state.isBtcAvailable) {
                  //     this.setState({
                  //       btcButtonDisabled: true,
                  //       btcButtonText: 'Checking...',
                  //       isBtcAvailable: null,
                  //       errorMessage: ''
                  //     });
                  //     const response = await axios.get(apiBaseUrl+'/bitcoin-es/btc-amount-available?btcAmount='+this.state.inputAmount);
                  //     console.log('response', response);
                  //     this.setState({
                  //       btcButtonDisabled: false,
                  //       isBtcAvailable: response.data.response,
                  //       btcButtonText: response.data.response ? 'Register Deposit Request' : 'Try Again',
                  //       errorMessage: response.data.response===false ? 'This BTC amount is not available, please change the BTC deposit amount and try again.' : ''
                  //     });
                  //     if(!response.data.response) {
                  //       document.getElementById('btc-amount-input-box').focus();
                  //     } else if(!this.state.esWalletAddress) {
                  //       document.getElementById('es-address-withdrawal').focus();
                  //     }
                  //   } else {
                  //     const isWalletAddress = window.isWalletAddress(this.state.esWalletAddress);
                  //     console.log({isWalletAddress});
                  //     if(!isWalletAddress) {
                  //       document.getElementById('es-address-withdrawal').focus();
                  //       return this.setState({
                  //         invalidWalletAddress: true
                  //       });
                  //     }
                  //     this.setState({
                  //       invalidWalletAddress: false,
                  //       btcButtonDisabled: true,
                  //       btcButtonText: 'Registering...',
                  //       errorMessage: ''
                  //     });

                  //     const response = await axios.post(apiBaseUrl+'/bitcoin-es/register-deposit', window.qs({
                  //       btcAmount: +this.state.inputAmount,
                  //       walletAddress: this.state.esWalletAddress
                  //     }),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}});

                  //     if(response.data.response === true) {
                  //       this.setState({
                  //         btcButtonDisabled: true, // leaving true for keeping it disabled
                  //         btcButtonText: 'Registered!',
                  //         successMessage: `Your deposit is registered! Send ${this.state.inputAmount} BTC to ${this.state.bitcoinDepositAddress}`
                  //       });
                  //       this.getRequests();
                  //     } else {
                  //       this.setState({
                  //         btcButtonDisabled: false,
                  //         btcButtonText: 'Register Deposit Request',
                  //         errorMessage: `There was an error: ${response.data.response}`
                  //       });
                  //     }
                  //   }
                  // }}
                >
                  {/* {this.state.btcButtonText} */}Convert
                </button>
              </div>
              </div>
            </div>
          </div>
          {/* {this.state.depositRequests.length
            ? <div className="dashboard-container container">
                <h3>Your Deposit Requests:</h3>
                {this.state.depositRequests.map(request => (
                  <div className="deposit-request-div">
                    <p>BTC Amount: {request.btcAmount}</p>
                    <p>ES Address: {request.esAddress}</p>
                    <p>BTC Deposit Tx Hash: {request.btcDepositTxHash || <>Waiting for BTC deposit</>}</p>
                    {request.esAmount ? <p>ES Amount: {request.esAmount}</p> : null}
                    {request.esWithdrawalTxHash ? <p>ES Withdrawal Tx Hash: {request.esWithdrawalTxHash}</p> : null}
                    <p>Status: {(() => {
                      switch(request.status) {
                        case 'waiting':
                          return <>Waiting for BTC Deposit</>;
                        case 'suspended':
                          return <>Deposit Suspended due to exceeded deposit time</>;
                        case 'btcdeposited':
                          return <>Bitcoins are deposited, waiting for calculation of ES Tokens</>;
                        case 'espending':
                          return <>Withdrawal Transaction to {request.esAddress} will be sent soon.</>
                        case 'essent':
                          return <>Withdrawal of ES is completed.</>
                      }
                    })()}</p>
                    {!request.waiting
                      ? <>{request.status === 'waiting' ? <Alert variant="danger">Deposit of {request.btcAmount} BTC to {this.state.bitcoinDepositAddress} from you is pending to complete your swap.</Alert> : (request.status === 'essent' ? <Alert variant="success">ES has been sent to your wallet address!</Alert> : null)}</>
                      : <Alert variant="warning">We got your deposit. Waiting for enough confirmations.</Alert>
                    }
                  </div>
                ))}
              </div>
          : null} */}
        </div>
   

      </>
    );
  }
}
