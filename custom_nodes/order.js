const mqtt = require('mqtt');
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

        /*Custom MQTT CLient*/
        let options = {
            username: config.username,
            password: config.password,
            connectTimeout: 7 * 1000
        };

        let client = mqtt.connect(`mqtt://${config.host}:${config.port}`, options);
        console.log("mqtt client connecting ... ")
        console.log(options);
        client.on('connect', function () {
            console.log("Client Connected")
            client.subscribe('f/i/state/hbw', function (err) {
                if (!err) {
                    client.publish('presence', 'Hello mqtt')
                }
            })
        })
        client.on('message', function (topic, message) {
            // message is Buffer
            console.log(message.toString())
            client.end()
        })
        /*Custom MQTT Client net*/
    }
    RED.nodes.registerType("order",Order);
}
