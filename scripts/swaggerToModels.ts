import * as got from 'got';
import * as fs from 'fs';
import * as path from 'path';

interface Model {
    name: string;
    description: string;
    fields?: {
        type: string,
        description: string,
        name: string
    }[]
}

(async () => {
    try {
        const response = await got('https://api-v3.mbta.com/docs/swagger/swagger.json');
        const raw = JSON.parse(response.body);
        const definitions = raw.definitions;

        const models: Model[] = [];

        for(let definitionName in definitions) {
            const definition = definitions[definitionName];
            const model: Model = {
                name: definitionName,
                description: definition.description.replace(/`/g,"'").replace(/\*\//g,).split('./').join('\n * '),
                fields: []
            };
            if(definition.properties) {
                for(const propertyName in definition.properties) {
                    if(propertyName === 'links' || propertyName === 'data' || propertyName === 'relationships') {
                        break;
                    }
                    const property = definition.properties[propertyName];
                    let type = '';
                    if(property.type !== 'array') {
                        if(property.type.length) {
                            type = 'string';
                        } else if(property.type === 'integer') {
                            type = 'number';
                        } else {
                            type = property.type
                        }
                        model.fields.push({
                            type,
                            description: property.description.split('\n').join('\n   * '),
                            name: propertyName
                        });
                    }
                }
            }
            models.push(model)
        }
        for(const model of models) {
            const file = [];
            file.push('/**');
            file.push(` * ${model.description}`);
            file.push(' */');
            file.push(`export class ${model.name} {`);
            for(let field of model.fields) {
                file.push('  /**');
                file.push(`   * ${field.description}`);
                file.push('   */');
                file.push(`  ${field.name}: ${field.type};`);
                file.push('');
            }
            file.push('}');
            const text = file.join('\n');
            const filepath = path.join(__dirname, `../../src/types/${model.name}.ts`);
            fs.writeFileSync(filepath,text);
        }
    } catch (error) {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    }
})();


