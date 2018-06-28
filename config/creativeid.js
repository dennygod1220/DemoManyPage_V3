var modifyhtml = require('./modifyhtml');

function creativeid(io, socket, path, funcname) {

    socket.once('creative id', function (CreateID) {
        console.log("收到素材ID :" + CreateID);

        modifyhtml.modifyhtml(socket.id, path, funcname);

        setTimeout(() => {
            io.sockets.connected[socket.id].emit('modifyOK', CreateID);
        }, 4000);
    });
}

module.exports = creativeid;