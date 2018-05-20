'use strict';

const { LuaScope, LuaTable, LuaSymbol } = require('./typedef');

let _G = null;

function initEnv() {
    _G = new LuaScope([0, Infinity]);
    let _package = new LuaSymbol(new LuaTable(), 'package', false);
    _G.set('package', _package);
    _package.type.set('loaded', new LuaSymbol(new LuaTable(), 'loaded', false));
}

exports.globalEnv = globalEnv;

function globalEnv() {
    if (!_G) {
        initEnv();
    }

    return _G;
}
