import RxDB from 'rxdb';
RxDB.QueryChangeDetector.enableDebugging();
RxDB.plugin(require('pouchdb-adapter-idb'));


let db = null


const collections = [
    {
        name: 'heroes',
        schema: require('./schema.js').heroSchema,
        methods: {
            hpPercent() {
                return this.hp / this.maxHP * 100;
            }
        },
        sync: true
    },
    {
        name: 'destinations',
        schema: require('./schema.js').destinationSchema,
        methods: {
            hpPercent() {
                return this.hp / this.maxHP * 100;
            }
        },
        sync: true
    }
];



const createDB = async () => {
    db = await RxDB.create({
        name: 'heroesdb',           // <- name
        adapter: 'idb',          // <- storage-adapter
        password: 'myPassword',     // <- password (optional)
        multiInstance: true,         // <- multiInstance (optional, default: true)
        queryChangeDetection: false // <- queryChangeDetection (optional, default: false)
    });

    // For debug 
    window['db'] = db; 
    await Promise.all(collections.map(colData => db.collection(colData)));

    console.log('database was created')
    return db
}

export const getDB = () => {

    if (!db) {
        db = createDB()
        return db
    }

    return db
}

