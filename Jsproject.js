// My First JavaScript Project 
// Submitted to Metacrafters
// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (n_id,n_type,n_key,n_address) {
    const data={
        "ID":n_id,
        "Type":n_type,
        "Key":n_key,
        "Address":n_address
}
    NFTs.push(data);
    console.log("Metadata Succesfully Minted");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log("\nID: " + NFTs[i].ID);
        console.log("Type: " + NFTs[i].Type);
        console.log("Key: " + NFTs[i].Key);
        console.log("Address: " + NFTs[i].Address);

    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Number of NFTs: " + NFTs.length);

}

// call your functions below this line
mintNFT("101","Text","0xyfhdyen9c","Cloud");
mintNFT("102","Document","0xfvnfdkc","Drive");
mintNFT("103","Video","0xgbtrbrbc","SSD");
mintNFT("104","Image","9xfvbfvfbn","Wallet");
listNFTs();
getTotalSupply();
