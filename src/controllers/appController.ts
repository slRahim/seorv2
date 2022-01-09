import { S7Client, S7DbVarAreaDbRead } from 's7client-ts';

// PLC Connection Settings
const plcSettings = {
    host: '192.168.2.10',
    port: 102,
    rack: 0,
    slot: 1
};

// DBA to read
const dbNr = 1;
const dbVars: S7DbVarAreaDbRead[] = [
    { type: "BOOL", start: 0, bit: 0 },
    { type: "BOOL", start: 0, bit: 1 },
    { type: 'DINT', start: 10 },
    { type: 'DINT', start: 14 },
    { type: 'INT', start: 18 }
];
let client : S7Client ;

export let result : S7DbVarAreaDbRead[] ;

export function init(){
    console.log('start web app');
    client = new S7Client(plcSettings);
    index() ;
}

const index= async ()=>{
    setInterval(async ()=>{
        await client.connect().catch((e) => console.log(e));
        console.log("connected", client.isConnected());

        result = await client.readDB(dbNr, dbVars);

        console.log(result);

        await client.disconnect()

    },500)
}


