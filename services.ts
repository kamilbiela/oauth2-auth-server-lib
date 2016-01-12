import * as swig from "swig";
import OAuthServerConfig from "./src/oauth/server_config";
import OAuthRedirectResponse from "./src/oauth/redirect_response";
import OAuthRequestHandler from "./src/oauth/request_handler";

// load some config here
let oAuthServerConfig = new OAuthServerConfig();

swig.setDefaults({ loader: swig.loaders.fs(__dirname + '/data/template/swig' )});
// end loading

import TemplatingStrategy from "./src/template/strategy/template_swig";
import TemplateManager from "./src/template/template_manager";

export let templatingStrategy = new TemplatingStrategy(swig);
export let templateManager = new TemplateManager(templatingStrategy);

// Create a server with a host and port
export let oAuthRequestHandler = new OAuthRequestHandler(oAuthServerConfig);