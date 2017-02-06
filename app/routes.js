// Requires ---------------------------------------------------------------------
var config = require('../config/config.js');
// Functions ---------------------------------------------------------------------
function samsungRemoteCommand(res, command) {

    var SamsungRemote = require('samsung-remote');
    var remote = new SamsungRemote({
        ip: config.ip_address  // required: IP address of your Samsung Smart TV
    });

    var key = "KEY_"+command.toUpperCase();
    console.log(key)
    remote.send(key, function callback(err) {
        if (err) {
            throw new Error(err);
        } else {
            res.json("Command has been successfully transmitted to your tv");
            // command has been successfully transmitted to your tv
        }
    });

    // check if TV is alive (ping)
    remote.isAlive(function(err) {
        if (err) {
            throw new Error('TV is offline');
        } else {
            console.log('TV is ALIVE!');
        }
    });
};

// api ---------------------------------------------------------------------
module.exports = function (app) {
    app.put('/api/stv/:command', function (req, res) {
        var command = req.params.command;
        samsungRemoteCommand(res, command);
    });
    app.put('/api/stv/number/:mynumber', function (req, res) {
        var command = req.params.mynumber;
        samsungRemoteCommand(res, command);
    });
    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
