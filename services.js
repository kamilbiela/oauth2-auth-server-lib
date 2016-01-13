var swig = require("swig");
var server_config_1 = require("./src/oauth/server_config");
var request_handler_1 = require("./src/oauth/request_handler");
let oAuthServerConfig = new server_config_1.default();
swig.setDefaults({ loader: swig.loaders.fs(__dirname + '/data/template/swig') });
var template_swig_1 = require("./src/template/strategy/template_swig");
var template_manager_1 = require("./src/template/template_manager");
exports.templatingStrategy = new template_swig_1.default(swig);
exports.templateManager = new template_manager_1.default(exports.templatingStrategy);
exports.oAuthRequestHandler = new request_handler_1.default(oAuthServerConfig);
//# sourceMappingURL=services.js.map