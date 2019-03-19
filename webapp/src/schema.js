export const heroSchema = {
    'title': 'hero schema',
    'description': 'describes a simple hero',
    'version': 0,
    'type': 'object',
    'properties': {
        'name': {
            'type': 'string',
            'primary': true
        },
        'color': {
            'type': 'string'
        }
    },
    'required': ['color']
};



export const destinationSchema ={
    'title': 'Jurassic Lake',
    description: 'Jurassic lake Strobel',
    version: 0,
    type: 'object',
    properties: {
        name: {
            type: 'string'
        }

    }
}


const programSchema = {} 
/*
export default {heroSchema,destinationSchema,programSchema};
*/
//export default heroSchema