import ipfsClient from 'ipfs-http-client';

export class IPFSHandler {

    static convertToBuffer = async(reader) => {
        console.log("Convirtiendo a Buffer");
        const buffer = await Buffer.from(reader.result);
        console.log("Buffer Respuesta",buffer);
        return buffer;
    };

    static saveFile = async(buffer) => {
        const ipfs = new ipfsClient({ host: 'ipfs.infura.io', port: 5001,protocol: 'https' });
        const hash = await ipfs.add(buffer);
        return hash;
    };

    static viewIPFSFile(hash) {
        const ruta = "https://ipfs.io/ipfs/"+hash;
        return ruta;
    };

}
export default IPFSHandler;