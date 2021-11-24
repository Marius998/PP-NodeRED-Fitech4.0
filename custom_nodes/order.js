module.exports = function(RED) {
    function Order(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = {
                "workpiece": {
                    "type": "RED",
                    "state": "RAW"
                },
                "ts": "",
                "code": 3
            }
            node.send(msg);
        });
    }
    RED.nodes.registerType("order",Order);
}
