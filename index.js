mux.demux = demux
mux.mux = mux
module.exports = mux

// Multiplex function arguments into an object
// and pass the object into a function.
// fn(obj) -> (any...) -> null
function mux (fn) {
  return function () {
    const ln = arguments.length
    const first = arguments[0]
    if (typeof first === 'object' && ln === 1) return demux(fn)(first)

    const obj = {}
    const n = arguments.length
    var i = 0
    for (; i < n; i++) {
      obj[i] = arguments[i]
    }
    fn(obj)
  }
}

// Demultiplex a multiplexed object
// and pass the arguments into a function.
// fn(any...) -> obj -> null
function demux (fn) {
  return function (obj) {
    const args = []
    const n = Object.keys(obj).length
    var i = 0
    for (; i < n; i++) {
      args.push(obj[i])
    }
    fn.apply(fn, args)
  }
}
