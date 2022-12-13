const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')

const _initBaseURI='ipfs://QmY8j6RaBekRn7T536urybkACQwcqbqnQyPTNCp6JdQgZ9/'

async function main() {
  const nftFactory = await hre.ethers.getContractFactory('Test4')
  const nftContract = await nftFactory.attach(
    '0x1c109341F354755Cb8ac3a2436295cb3537A401e'
  )

    // Calculate merkle root from the whitelist array
    const leafNodes = whitelist.map((addr) => keccak256(addr))
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
    const root = merkleTree.getRoot().toString('hex')
    console.log(' Merkleroot is: 0x' + root)

    let arr = [
    '0xe45658822652AA4DCE376e084a3950BF272e2cAf',
    '0xD7a57782dFbEB34CB96590d32671984B517D4Ec2',
    '0xa93EEd127B40835Ed0B0C8A2108dEED05dC44fA8'
  ];
    for (let address of arr) {
      const leaf = keccak256(address)
      const proof = merkleTree.getHexProof(leaf).toString('hex')
      console.log (' ')
      
      console.log('proof for( ' + address + ' )is: ' + proof)
      console.log (' ')
      

    }
    
}
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
