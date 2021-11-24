module.exports = function(RED) {
    function FromTo(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var from = config.from;
        var to = config.to;
        console.log(from,to);
        node.on('input', function(msg) {
            msg.payload = {"type":"","ts":"","from":from,"to":to}
            node.send(msg);
        });
    }
    RED.nodes.registerType("from-to",FromTo);
}
