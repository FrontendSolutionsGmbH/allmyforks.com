const toTest = require('../src/pathfinder');
const assert = require('assert');

describe('Pathfinder: find the path in different scenario', () => {

  it(`only one choise`, () => {
    //given
    const pairs = [{
     in: { name: 'BTC', type: 'crypto'},
     out: { name: 'EUR', type: 'fiat'},
     source: "bitcoin.de",
    }]
    const src = { name: 'BTC', type: 'crypto'}
    const dest = { name: 'EUR', type: 'fiat'}

    //when
    const result = toTest(pairs, src, dest)

    //then
    assert(result)
    assert.equal(result.length, 1)
    assert.equal(result[0][0], pairs[0])
  })

  it(`multiple choise`, () => {
    //given
    const pairs = [{
      in: { name: 'ETH', type: 'crypto'},
      out: { name: 'EUR', type: 'fiat'},
      source: "bitcoin.de",
    },{
     in: { name: 'BTC', type: 'crypto'},
     out: { name: 'EUR', type: 'fiat'},
     source: "bitcoin.de",
    }]
    const src = { name: 'BTC', type: 'crypto'}
    const dest = { name: 'EUR', type: 'fiat'}

    //when
    const result = toTest(pairs, src, dest)

    //then
    assert(result)
    assert.equal(result.length, 1)
    assert.equal(result[0][0], pairs[1])
  })

  it(`multiple hits`, () => {
    //given
    const pairs = [{
      in: { name: 'BTC', type: 'crypto'},
      out: { name: 'EUR', type: 'fiat'},
      source: "kraken.com",
    },{
      in: { name: 'ETH', type: 'crypto'},
      out: { name: 'EUR', type: 'fiat'},
      source: "bitcoin.de",
    },{
     in: { name: 'BTC', type: 'crypto'},
     out: { name: 'EUR', type: 'fiat'},
     source: "bitcoin.de",
    }]
    const src = { name: 'BTC', type: 'crypto'}
    const dest = { name: 'EUR', type: 'fiat'}

    //when
    const result = toTest(pairs, src, dest)

    //then
    assert(result)
    assert.equal(result.length, 2)
    assert.equal(result[0][0], pairs[0])
    assert.equal(result[1][0], pairs[2])
  })

  it(`one hop`, () => {
    //given
    const pairs = [{
      in: { name: 'ETH', type: 'crypto'},
      out: { name: 'EUR', type: 'fiat'},
      source: "bitcoin.de",
    },{
      in: { name: 'BTC', type: 'crypto'},
      out: { name: 'ETH', type: 'crypto'},
      source: "coinbase.com",
    }]
    const src = { name: 'BTC', type: 'crypto'}
    const dest = { name: 'EUR', type: 'fiat'}

    //when
    const result = toTest(pairs, src, dest)

    //then
    assert(result)
    assert.equal(result.length, 1)

    //(BTC)coinbase.com => (ETH)bitcoin.de
    assert.equal(result[0][0], pairs[1])
    assert.equal(result[0][1], pairs[0])
  })

  it(`two hops`, () => {
    //given
    const pairs = [{
      in: { name: 'PAY', type: 'crypto'},
      out: { name: 'ETH', type: 'crypto'},
      source: "etherdelta.com",
    },{
      in: { name: 'BTC', type: 'crypto'},
      out: { name: 'EUR', type: 'fiat'},
      source: "bitcoin.de",
    },{
      in: { name: 'ETH', type: 'crypto'},
      out: { name: 'BTC', type: 'crypto'},
      source: "coinbase.com",
    }]
    const src = { name: 'PAY', type: 'crypto'}
    const dest = { name: 'EUR', type: 'fiat'}

    //when
    const result = toTest(pairs, src, dest)

    //then
    assert(result)
    assert.equal(result.length, 1)

    // (PAY)etherdelta.com => (ETH)coinbase.com => (BTC)bitcoin.de
    assert.equal(result[0][0], pairs[0])
    assert.equal(result[0][1], pairs[2])
    assert.equal(result[0][2], pairs[1])
  })

  it(`one hop and one direct`, () => {
    //given
    const pairs = [{
      in: { name: 'BTC', type: 'crypto'},
      out: { name: 'EUR', type: 'fiat'},
      source: "bitcoin.de",
    },{
      in: { name: 'ETH', type: 'crypto'},
      out: { name: 'EUR', type: 'fiat'},
      source: "bitcoin.de",
    },{
      in: { name: 'BTC', type: 'crypto'},
      out: { name: 'ETH', type: 'crypto'},
      source: "coinbase.com",
    }]
    const src = { name: 'BTC', type: 'crypto'}
    const dest = { name: 'EUR', type: 'fiat'}

    //when
    const result = toTest(pairs, src, dest)

    //then
    assert(result)
    assert.equal(result.length, 2)

    //bitcoin.de
    //(BTC)coinbase.com => (ETH)bitcoin.de
    assert.equal(result[0][0], pairs[0])
    assert.equal(result[1][0], pairs[2])
    assert.equal(result[1][1], pairs[1])
  })

  it(`two hops and one direct`, () => {
    //given
    const pairs = [{
      in: { name: 'PAY', type: 'crypto'},
      out: { name: 'EUR', type: 'fiat'},
      source: "someExchange",
    },{
      in: { name: 'PAY', type: 'crypto'},
      out: { name: 'ETH', type: 'crypto'},
      source: "etherdelta.com",
    },{
      in: { name: 'BTC', type: 'crypto'},
      out: { name: 'EUR', type: 'fiat'},
      source: "bitcoin.de",
    },{
      in: { name: 'ETH', type: 'crypto'},
      out: { name: 'BTC', type: 'crypto'},
      source: "coinbase.com",
    }]
    const src = { name: 'PAY', type: 'crypto'}
    const dest = { name: 'EUR', type: 'fiat'}

    //when
    const result = toTest(pairs, src, dest)

    //then
    assert(result)
    assert.equal(result.length, 2)

    // (PAY)someExchange
    // (PAY)etherdelta.com => (ETH)coinbase.com => (BTC)bitcoin.de
    assert.equal(result[0][0], pairs[0])
    assert.equal(result[1][0], pairs[1])
    assert.equal(result[1][1], pairs[3])
    assert.equal(result[1][2], pairs[2])
  })
})