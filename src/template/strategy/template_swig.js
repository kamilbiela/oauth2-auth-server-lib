import TemplateEnum from "../template_enum";
export default class TemplatingSwig {
    constructor(swig) {
        this.swig = swig;
    }
    get(template, parameters) {
        switch (template) {
            case TemplateEnum.AUTHORIZATION_REQUEST_FORM:
                return new Promise((resolve, reject) => {
                    this.swig.renderFile('authorization_request_form.html', {}, function (err, output) {
                        if (err) {
                            reject(err);
                        }
                        resolve(output);
                    });
                });
                break;
        }
    }
}
