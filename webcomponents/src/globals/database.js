import Dexie from 'dexie';

var db = new Dexie("flicktrip")


db.version(0.1).stores({
    programs: 'id'
});

export const loadPrograms = () => {
    window['db'] = db
    db.programs.add({
        id: 'JLWP',
        name: 'Jurassic Lake weekly',
        summary: 'Jurassic Lake Lodge is the original world-class Fly fishing Lodge located in one of the most remote and wild places of Argentine Patagonia',
        photoCover: 'https://static.wixstatic.com/media/e71d9d_f8a8dfee06134821826ccca6cdee52bb~mv2.jpg/v1/fill/w_594,h_447,al_c,lg_1,q_80/strobel.webp'
    })
}

export const cleanDatabase = () => {
    // TODO
}

export const fetchPrograms = () => {
    return db.programs
}