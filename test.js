const test = require('tape')

const mux = require('./')

test('mux arguments', function (t) {
  t.plan(3)
  mux(function (obj) {
    t.equal(typeof obj, 'object')
    t.equal(obj[0], 'foo')
    t.equal(obj[1], 'bar')
  })('foo', 'bar')
})

test('demux objects', function (t) {
  t.plan(2)
  mux(function (arg1, arg2) {
    t.equal(arg1, 'foo')
    t.equal(arg2, 'bar')
  })({
    0: 'foo',
    1: 'bar'
  })
})
