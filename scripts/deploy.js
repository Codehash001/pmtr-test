const hre = require('hardhat')

const _initBaseURI='ipfs://QmY8j6RaBekRn7T536urybkACQwcqbqnQyPTNCp6JdQgZ9/'

async function main() {

  // Deploy the contract
  const pmtr = await hre.ethers.getContractFactory('PMTR')
  const PMTR = await pmtr.deploy(
    _initBaseURI)
  await PMTR.deployed()

  console.log('Contract deployed to:', PMTR.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
