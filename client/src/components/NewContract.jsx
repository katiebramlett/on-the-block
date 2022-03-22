import React, { useState } from "react";
import RentalContract from "../contracts/RentalContract.json";
import getWeb3 from "../utils/getWeb3";
import "../assets/NewContract.css"
import { axiosBackend  } from "../utils/axios";
import useToken from "../utils/useToken";


function NewContract() {

  const [landlord_addr, setLandlord_addr] = useState();
  const [tenant_addr, setTenant_addr] = useState();
  const [monthlyfee, setMonthlyfee] = useState();
  const [startdate, setStartDate] = useState();
  const [enddate, setEndDate] = useState();

  const [message, setMessage] = useState();
  const {token, setToken } = useToken();

  const today = new Date().toISOString().split("T")[0]

  const createContract = async e => {

    e.preventDefault()

    const contractId = axiosBackend
      .post('/contracts', {
        token, 
        landlord_addr, 
        tenant_addr,
        monthlyfee,
        startdate,
        enddate
      }).then(response => {
        alert("Contract submitted successfully with id" + response.data.contractid)
        // response.data.contractid
      }).catch(e => {
        console.log(e)
        alert("Error submitting!")
      })
    
  }

  /*
  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = RentalContract.networks[networkId];
      const instance = new web3.eth.Contract(
        RentalContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance, balances: new Array(10)}, this.runExample);
    } 
    catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // Try just sending money once on form submission and ignoring the number of months input
    if (this.state.contract) {
      this.state.contract.methods.payRent(this.state.l_account_num).send({from: this.state.t_account_num, value: (1000000000000000000 * this.state.monthly_amount)}).then((error, tranasctionHash)=>{alert(tranasctionHash);});
      //contract.methods.payRent(accounts[1]).send({from: accounts[0], value: 1000000000000000000 }).then((error, tranasctionHash)=>{alert(tranasctionHash);});

      alert('A new contract was submitted! The landlord account number is '+ this.state.l_account_num + 
    ', the tenant account number is ' + this.state.t_account_num + ', the monthly payment amount is '
    + this.state.monthly_amount + ', and the number of months is ' + this.state.num_months + '.');
    }
    else {
      alert('Contracts was null.');
    }

    event.preventDefault();
  }

  runExample = async () => {
    const { accounts, contract } = this.state;
  }

  render() {
    return (
        <div className="newcontract_container">
          <div className="row">
            <div className="col" id="col1">
              <h1><span style={{color: 'var(--main)'}}>Start New Contract</span></h1>
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Landlord Account Number" name="l_account_num" onChange={this.handleInputChange}></input><br></br>
                <input type="text" placeholder="Tenant Account Number" name="t_account_num" onChange={this.handleInputChange}></input><br></br>
                <input type="text" placeholder="Monthly Amount" name="monthly_amount" onChange={this.handleInputChange}></input><br></br>
                <input type="text" placeholder="Number of Months" name="num_months" onChange={this.handleInputChange}></input><br></br>
                <input type="submit" value="Submit Contract"></input>
              </form>
            </div>
            <div className="col" id="col2">
              <h1>Your Rental Contract</h1>
              <div className="p">
                This contract enters you into a rental agreement with your tenant. Please specify the Ethereum account address to collect this payment. 
                Upon submission, your tenant will be notified of the contract. Please specific the amount in Ether per month. 
              </div>
            </div>
          </div>
        </div>
    );
  }
  */

  /*
  return (
      <div className="container">
        <div className="row">
          <div className="col" id="col1">
            <h1><span style={{color: 'var(--main)'}}>Start New Contract</span></h1>
            <form onSubmit={createContract}>
              <input type="text" placeholder="Landlord Account Number" name="landlord_addr" onChange={e => setLandlord_addr(e.target.value)} ></input><br></br>
              <input type="text" placeholder="Tenant Account Number" name="tenant_addr" onChange={e => setTenant_addr(e.target.value)}></input><br></br>
              <input type="text" placeholder="Monthly Amount (in ETH)" name="monthlyfee" onChange={e => setMonthlyfee(e.target.value)} ></input><br></br>
              <input type="date" min={today} name="startdate" onChange={e => setStartDate(e.target.value)} ></input><br></br>
              <input type="date" name="enddate" min={today} onChange={e => setEndDate(e.target.value)} ></input><br></br>
              <input type="submit" value="Submit Contract"></input>
            </form>
          </div>
          <div className="col" id="col2">
            <h1> Your Rental Contract </h1>
            <div className="p">
              This contract enters you into a rental agreement between tenant and landlord.<br></br>Please specify the Ethereum account addresses for the receiver and sender to set up this contract. 
              <br></br>Upon submission, the other party of your rental agreement will be notified of the contract and have the option to accept or deny. Subsequently, if accepted, the transaction will be sent and recorded.
            </div>
          </div>
        </div>
      </div>
  );
  */

  return (
    <div className="container">
      <div className="row align-items-top my-5">
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <h1><span style={{color: 'var(--main)'}}>Start New Contract</span></h1>
          <form onSubmit={createContract}>
            <input type="text" placeholder="Landlord Account Number" name="landlord_addr" onChange={e => setLandlord_addr(e.target.value)} ></input><br></br>
            <input type="text" placeholder="Tenant Account Number" name="tenant_addr" onChange={e => setTenant_addr(e.target.value)}></input><br></br>
            <input type="text" placeholder="Monthly Amount (in ETH)" name="monthlyfee" onChange={e => setMonthlyfee(e.target.value)} ></input><br></br>
            <input type="date" min={today} name="startdate" onChange={e => setStartDate(e.target.value)} ></input><br></br>
            <input type="date" name="enddate" min={today} onChange={e => setEndDate(e.target.value)} ></input><br></br>
            <input type="submit" value="Submit Contract"></input>
          </form>
        </div>
        <div className="col-lg-5">
          <h1> Your Rental Contract </h1>
          <div className="p">
            This contract enters you into a rental agreement between tenant and landlord.<br></br>Please specify the Ethereum account addresses for the receiver and sender to set up this contract. 
            <br></br>Upon submission, the other party of your rental agreement will be notified of the contract and have the option to accept or deny. Subsequently, if accepted, the transaction will be sent and recorded.
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}

export default NewContract;