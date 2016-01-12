import TemplateEnum from "./template_enum";

interface ITemplatingStrategy {
    // template: name of template
    // parameters: raw parameter values from request. Templating engine should escape those values if neccessary
    get(template: TemplateEnum, parameters: {[key: string]: string}): Promise<string>;
}

export default ITemplatingStrategy;