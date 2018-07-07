"use strict";

const envParser = require('rainu-env-parser');

const defaults = {
  request: {
    timeout: 60000,
    cooldown: 60000,
    batch: 500,
    maxretry: 10
  },
  mongo: {
    host: "localhost",
    port: 27017,
    db: "coinmarketcap"
  },
  mapping: [{
    slug: "lightning-bitcoin",
    symbol: "LBTCX"
  },{
    slug: "accelerator-network",
    symbol: "ACC0"
  },{
    slug: "acchain",
    symbol: "ACC1"
  },{
    slug: "aston",
    symbol: "ATX0"
  },{
    slug: "dao-casino",
    symbol: "BET0"
  },{
    slug: "bitswift",
    symbol: "BITS0"
  },{
    slug: "bluzelle",
    symbol: "BLZ0"
  },{
    slug: "bitgem",
    symbol: "BTG0"
  },{
    slug: "bytom",
    symbol: "BTM0"
  },{
    slug: "CAN0",
    symbol: "content-and-ad-network"
  },{
    slug: "CAT0",
    symbol: "blockcat"
  },{
    slug: "CAT1",
    symbol: "bitclave"
  },{
    slug: "comsa-xem",
    symbol: "CMS0"
  },{
    slug: "CMT0",
    symbol: "cybermiles"
  },{
    slug: "CPC0",
    symbol: "cpchain"
  },{
    slug: "CRC0",
    symbol: "crycash"
  },{
    slug: "DFT0",
    symbol: "digifinextoken"
  },{
    slug: "EDR0",
    symbol: "endor-protocol"
  },{
    slug: "ENT",
    symbol: "entcash"
  },{
    slug: "ETT0",
    symbol: "encryptotel-eth"
  },{
    slug: "FAIR0",
    symbol: "fairgame"
  },{
    slug: "GCC0",
    symbol: "global-cryptocurrency"
  },{
    slug: "HERO0",
    symbol: "sovereign-hero"
  },{
    slug: "HMC0",
    symbol: "hi-mutual-society"
  },{
    slug: "HNC0",
    symbol: "huncoin"
  },{
    slug: "HOT0",
    symbol: "holo"
  },{
    slug: "ICN0",
    symbol: "iconomi"
  },{
    slug: "KEY0",
    symbol: "selfkey"
  },{
    slug: "KNC0",
    symbol: "kyber-network"
  },{
    slug: "LNC0",
    symbol: "linker-coin"
  },{
    slug: "MAG0",
    symbol: "maggie"
  },{
    slug: "NET0",
    symbol: "nimiq"
  },{
    slug: "PAI0",
    symbol: "pchain"
  },{
    slug: "PUT0",
    symbol: "profile-utility-token"
  },{
    slug: "PXC0",
    symbol: "pixie-coin"
  },{
    slug: "QBT0",
    symbol: "qbao"
  },{
    slug: "RCN0",
    symbol: "ripio-credit-network"
  },{
    slug: "RED0",
    symbol: "redcoin"
  },{
    slug: "SPD0",
    symbol: "spindle"
  }],
  cron: '0 0 */12 * * *'
};

module.exports = {
  ...envParser.parse("CFG_", defaults)
};