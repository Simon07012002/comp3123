exports.add = function(a, b){
    return a + b;
}
exports.subtract = function(a, b){
    return a - b;
}
exports.mutiply = function(a, b){
    return a * b;
}
function devide(a, b){
    return a / b;
}
module.exports = {
    ...exports
}