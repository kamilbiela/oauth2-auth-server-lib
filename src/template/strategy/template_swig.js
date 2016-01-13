var template_enum_1 = require("../template_enum");
class TemplatingSwig {
    constructor(swig) {
        this.swig = swig;
    }
    get(template, parameters) {
        switch (template) {
            case template_enum_1.default.AUTHORIZATION_REQUEST_FORM:
                return new Promise((resolve, reject) => {
                    this.swig.renderFile('authorization_request_form.html', parameters, function (err, output) {
                        if (err) {
                            return reject(err);
                        }
                        return resolve(output);
                    });
                });
            default:
                throw new Error(`Unrecognized template name value: ${template}`);
                break;
        }
    }
}
exports.TemplatingSwig = TemplatingSwig;
//# sourceMappingURL=template_swig.js.map