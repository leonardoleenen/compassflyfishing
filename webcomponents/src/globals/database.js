import Dexie from 'dexie';

var db = new Dexie("flicktrip")


db.version(0.1).stores({
    programs: 'id',
    userSettings: 'userId',
    seasons: 'id',
    availability: 'programId'
});

window['db'] = db

export const loadPrograms = async() => {
    
    await db.programs.bulkPut([
        {
            id: 'JLWP',
            name: 'Strobel Lake Weekly Program',
            startingPrice: 6800,
            summary: 'Jurassic Lake Lodge is the original world-class Fly fishing Lodge located in one of the most remote and wild places of Argentine Patagonia',
            photoCover: 'https://res.cloudinary.com/dtyymz4nn/image/upload/v1556131459/compass-app/jurassic/AK8Z0939_2.jpg'
        },
        {
            id: 'JLHW',
            name: 'Strobel Lake half week',
            startingPrice: 3800,
            summary: 'Jurassic Lake Lodge is the original world-class Fly fishing Lodge located in one of the most remote and wild places of Argentine Patagonia',
            photoCover: 'https://static.wixstatic.com/media/e71d9d_f8a8dfee06134821826ccca6cdee52bb~mv2.jpg/v1/fill/w_594,h_447,al_c,lg_1,q_80/strobel.webp'
        }
    ])

    await db.availability.bulkPut([
        {
            programId: 'JLWP',
            datesAvailable: [{
                date: '20191015',
                qty: 2
            },
            {
                date: '20191022',
                qty: 1
            },
            {
                date: '20191030',
                qty: 6
            }]

        },
        {
            programId: 'JLHW',
            datesAvailable: [{
                date: '20191015',
                qty: 1
            },
            {
                date: '20191022',
                qty: 1
            }]

        }
    ])
}

export const cleanDatabase = () => {
    // TODO
}

export  const fetchPrograms = async() => {
    await db.programs.count().then(qty => {
        if (qty===0){
            loadPrograms()
        }
    })
    return db.programs
}

export const fetchAvailability = (programId) => {
    // return  db.availability.where('programId').equals(programId)
    return db.availability.get(programId)
}

export const favProgram = async(programId,componentId) => {
    if (await db.userSettings.where({userId: 'anonymous'}).count() === 0){
        db.userSettings.add({userId:'anonymous', favProgram:[{
            programId,
            componentId
        }]})
        return true
    }


    const favs = await db.userSettings.where({userId: 'anonymous'}).toArray()

    debugger
    const result = favs[0]['favProgram'].filter(p => p.componentId===componentId).length === 0 

    if (result)
        favs[0]['favProgram'].push({
            programId,
            componentId
        })
    else 
        favs[0]['favProgram'] = favs[0]['favProgram'].filter(p => p.componentId!=componentId)
    
    db.userSettings.where({userId: 'anonymous'}).modify({favProgram:favs})

    return result
    
}