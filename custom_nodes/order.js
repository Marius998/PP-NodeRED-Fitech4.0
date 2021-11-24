module.exports = function(RED) {
    function Order(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        var quality = config.quality;
        var color = config.color;
        node.on('input', function(msg) {
            msg.payload = {
                "workpiece": {
                    "type": color,
                    "state": quality
                },
                "ts": "",
                "code": 3
            }
            node.send(msg);
        });
    }
    RED.nodes.registerType("order",Order);
}
