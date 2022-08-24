const {  saveData } = require('./todo-app')
const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const util = require('node:util');
const question = util.promisify(rl.question).bind(rl);

const main = async () => {
    console.log('==================== Form Mahasiswa =================');
    try {
        const mahasiswa = {}  
        mahasiswa.name = await question('Nama : ');
        mahasiswa.nim = await question('Nim : ');
        mahasiswa.ttl = await question('Tempat Tanggal Lahir : ');
        mahasiswa.sex = await question('Jenis Kelamin : ');
        mahasiswa.noHP = await question('No Hp : ');
        mahasiswa.alamat = await question('Alamat : ');

        if (mahasiswa.name,mahasiswa.nim, mahasiswa.ttl, mahasiswa.sex, mahasiswa.noHP, mahasiswa.alamat.trim().length > 0) {
            saveData(mahasiswa)    
        }else{
            throw new Error(`empty`);
        }
    } catch (err) {
        console.error('Question rejected', err);
    } finally {
        rl.close()  
    }
}

main()
