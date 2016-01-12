import TemplateEnum from "../template_enum";
import ITemplatingStrategy from "../itemplating_strategy";
import * as swig from "swig";

export default class TemplatingSwig implements ITemplatingStrategy {
    constructor(
        protected swig: swig.Swig
    ) {
    }

    get(template: TemplateEnum, parameters: {[key: string]: string}): Promise<string> {
        switch(template) {
            case TemplateEnum.AUTHORIZATION_REQUEST_FORM:
                return new Promise((resolve, reject) => {
                    this.swig.renderFile('authorization_request_form.html', {}, function (err, output) {
                        if (err) {
                            reject (err);
                        }

                        resolve(output);
                    });
                });
            break;
        }
    }
}