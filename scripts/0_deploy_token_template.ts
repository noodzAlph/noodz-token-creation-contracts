import { Deployer, DeployFunction } from '@alephium/cli'
import { SimpleToken } from '../artifacts/ts'

const deployTokenTemplate: DeployFunction = async (
    deployer: Deployer
): Promise<void> => {
    const result = await deployer.deployContract(SimpleToken, {
        issueTokenAmount: BigInt(0),
        initialFields: {
            symbol: Buffer.from('FT', 'utf8').toString('hex'),
            name: Buffer.from('Fake Token', 'utf8').toString('hex'),
            decimals: BigInt(18),
            supply: BigInt(0),
        },
    })
    console.log(
        'Token template contract id: ' + result.contractInstance.contractId
    )
    console.log(
        'Token template contract address: ' + result.contractInstance.address
    )
}

export default deployTokenTemplate