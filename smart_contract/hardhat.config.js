require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/z2c-faYwAtvaTqn7jDy1T_tlzQna4u2s' ,
      accounts: [
    '09299ed10065aa07a6b9639831ca3d024451936b767731fa6f00cf2a936a4b50',
      ],
    },
  },
}