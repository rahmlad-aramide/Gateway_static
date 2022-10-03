"use strict";

/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

 // Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;
const Torus = window.Torus;
const MewConnect = window.MEWConnect;

//get amount to be transferred and receiving address
let amount = document.getElementById('amount').value;
let toaddress = document.getElementById('address').value;
//let amount = {{txn.totalamount}};


// Web3modal instance
let web3Modal;

// Chosen wallet provider given by the dialog window
let provider;

// Address of the selected account
let selectedAccount;

//balance of crypto in said account
let humanFriendlyBalance;

function init() {

    console.log("Initializing example");
    console.log("WalletConnectProvider is", WalletConnectProvider);
    console.log("Fortmatic is", Fortmatic);
    console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);
    console.log("Torus is", Torus);
    console.log("MEW is", MewConnect)
  
  
    // Tell Web3modal what providers we have available.
    // Built-in web browser provider (only one can exist as a time)
    // like MetaMask, Brave or Opera is added automatically by Web3modal
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          // Mikko's test key - don't copy as your mileage may vary
          infuraId: "29d9250568614538a1e1e12acba6a7f6",
        }
      },
      
      torus: {
        package: Torus, // required
      },
  
      fortmatic: {
        package: Fortmatic,
        options: {
          // Mikko's TESTNET api key
          key: "pk_test_391E26A3B43A3350"
        }
      },

      
      mewconnect: {
        package: MewConnect, // required
        options: {
          infuraId: "29d9250568614538a1e1e12acba6a7f6" // required
        }
      },

      binancechainwallet: {
        package: true
      },

      //coinbasewallet: {
        //package: CoinbaseWalletSDK, // Required
        //options: {
          //appName: "My Awesome App", // Required
          //infuraId: "29d9250568614538a1e1e12acba6a7f6", // Required
          //rpc: "", // Optional if `infuraId` is provided; otherwise it's required
          //darkMode: false // Optional. Use dark theme, defaults to false
        //}
      //},

      opera: {
        package: true
      },
    };
  
    web3Modal = new Web3Modal({
      cacheProvider: false, // optional
      providerOptions, // required
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });
  
    console.log("Web3Modal instance is", web3Modal);
    console.log('amount is', amount);
    console.log("Address is", toaddress);
  };


  async function fetchAccountData() {

    // Get a Web3 instance for the wallet
    const web3 = new Web3(provider);
  
    console.log("Web3 instance is", web3);
    document.getElementById("transaction").innerHTML = `
    <div id="network">
      <p>
        <strong>Blockchain:</strong> <span id="network-name"></span>
      </p>

      <p>
        <strong>Account:</strong> <span id="selected-account"></span>
      </p>
      <p>
          <strong>Account Bal:</strong> <span id="account-bal"></span>
        </p>

    </div>
    `
    document.getElementById("pay").innerHTML = `
    <hr>
    <div <div class="connect-btn-div"> 
      <button id="pay" class="connect-button" onclick="transaction(amount);">
          Pay
      </button>
    </div>`

    // Get connected chain id from Ethereum node
    const chainId = await web3.eth.getChainId();
    console.log("chain-id is:",chainId)
    //checkChain(chainId)
    // Load chain information over an HTTP API
    const chainData = evmChains.getChain(chainId);
    document.querySelector("#network-name").textContent = chainData.name;

    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();

    // MetaMask does not give you all accounts, only the selected account
    console.log("Got accounts", accounts);
    selectedAccount = accounts[0];
    document.querySelector("#selected-account").textContent = selectedAccount;

    const balance = await web3.eth.getBalance(selectedAccount);
    // ethBalance is a BigNumber instance
    // https://github.com/indutny/bn.js/
    const ethBalance = web3.utils.fromWei(balance, "ether");
    humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
    document.querySelector("#account-bal").textContent = humanFriendlyBalance;

    // Display fully loaded UI for wallet data
    document.querySelector("#prepare").style.display = "none";
    document.querySelector("#connected").style.display = "block";
    document.querySelector("#qr-body").style.display = "none";    
  };

  const checkChain = async(chainId)=>{
      if (chainId==4) {
        if(window.location.href != "http://localhost:5000/gateway/278c023fe912e40f/eth"){
          window.location.href = `http://localhost:5000/gateway/278c023fe912e40f/eth`;
          alert("A different chainid detected. You have been redirected accordingly. connect wallet again");
        }
      }else if (chainId==97) {
        if(window.location.href != "http://localhost:5000/gateway/278c023fe912e40f/bnb"){
          window.location.href = `http://localhost:5000/gateway/278c023fe912e40f/bnb`;
          alert("A different chainid detected. You have been redirected accordingly. connect wallet again");
        }
      }else if (chainId==80001) {
        if(window.location.href != "http://localhost:5000/gateway/278c023fe912e40f/matic"){
          window.location.href = `http://localhost:5000/gateway/278c023fe912e40f/matic`;
          alert("A different chainid detected. You have been redirected accordingly. connect wallet again");
        }
      }else{
        alert("Chain not supported");
        window.location.href = `http://localhost:5000/gateway/278c023fe912e40f`;
      }
  }


  async function refreshAccountData() {

    // If any current data is displayed when
    // the user is switching acounts in the wallet
    // immediate hide this data
    document.querySelector("#connected").style.display = "none";
    document.querySelector("#prepare").style.display = "block";
  
    // Disable button while UI is loading.
    // fetchAccountData() will take a while as it communicates
    // with Ethereum node via JSON-RPC and loads chain data
    // over an API call.
    document.getElementById("btn-connect").setAttribute("disabled", "disabled")
    await fetchAccountData(provider);
    document.getElementById("btn-connect").removeAttribute("disabled")
  };


  async function onConnect() {

    console.log("Opening a dialog", web3Modal);
    try {
      provider = await web3Modal.connect();
      console.log("provider is ", provider)
    } catch(e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
  
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
      fetchAccountData();
    });
  
    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
      fetchAccountData();
    });
  
    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
      fetchAccountData();
    });
  
    await refreshAccountData();

  };
  
  /**
   * Disconnect wallet button pressed.
   */
  async function onDisconnect() {
  
    console.log("Killing the wallet connection", provider);
  
    // TODO: Which providers have close method?
    if(provider.close) {
      await provider.close();
  
      // If the cached provider is not cleared,
      // WalletConnect will default to the existing session
      // and does not allow to re-scan the QR code with a new wallet.
      // Depending on your use case you may want or want not his behavir.
      await web3Modal.clearCachedProvider();
      provider = null;
    }
  
    selectedAccount = null;
  
    // Set the UI back to the initial state
    document.querySelector("#prepare").style.display = "block";
    document.querySelector("#connected").style.display = "none";
    document.querySelector("#network").style.display = 'none';
    document.querySelector("#qr-body").style.display = "block";
  };


  async function transaction(ethValue){
    console.log("Pay clicked");
    const web3 = new Web3(window.ethereum);
    if (ethValue < humanFriendlyBalance) {
      const amounts = `${ethValue}`;
      const transactionParameters = {
        to: document.getElementById('address').value,
        from: ethereum.selectedAddress,
        //data: encodedFunction,// for smart contract functions
        value: web3.utils.toHex(web3.utils.toWei(amounts, 'ether'))//'100000000000000'
      };
      const txt = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      notify(txt)
      results(txt)
      return txt
    }else{
      alert("Balance in account is less amount to be paid")
    }
};


async function results(txhash){
  const web3 = new Web3(window.ethereum);
  web3.eth.getTransaction(txhash, function(err, result) {
    if (result.value) {
      console.log(result);
      const value = web3.utils.fromWei(result.value, 'ether');
      console.log(value);
      alert(`Successfully paid: ${value}. You will be redirected in 5secs`);
      //window.setTimeout(()=>{window.location.href =`http://localhost:5000?txid=${txhash}`}, 5000);
    }
  });
};

async function notify(_txt){
  console.log('transaction occured in', _txt)
  document.getElementById("resultSpace").innerHTML =  `
  <hr>
  <div class="amount">
    Your payment occured in transaction ${_txt}
  </div>`;
};

let headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json, text-plain, */*',
  'X-Requested-With': 'XMLHttpRequest',
  'Access-Control-Allow-Origin': '*'
};


async function fetchData(method, url, data) {
const response = await fetch(url, {
  method: method,
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: headers,
  body: JSON.stringify(data)
}).then(response => {
  console.log(response)
  if (!response.ok) {
      throw new Error("Failed with HTTP code " + response.status);
  }
  return response;
}).then(response => response.json())
  console.log(response)    
  return response
}
  
  /**
   * Main entry point.
   */
  window.addEventListener('load', async () => {
    init();
    //document.getElementById("copy").onclick = myFunction();
    //document.querySelector("#btn-connect").addEventListener("click", onConnect);
    //document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
  });


  //for a copy button or function
  async function myFunction() {
    /* Get the text field */
    console.log('Copying text')
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    /*copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  };
  

  
