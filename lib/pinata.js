require('dotenv').config();
const pinataSDK = require('@pinata/sdk');
const fs = require('fs');
var shajs = require('sha.js');
const pinata = pinataSDK(process.env.PinataApiKey, process.env.PinataSecretApiKey);

///Check if we can authenticate with pinata using provided keys
const authenticate = () => {
    pinata.testAuthentication().then((result) => {
        console.log("Pinata authentication state: ", result);
    }).catch((err) => {
        //Todo: Alert users letting them know authentication failed and take them back to previous page(if needed)
        console.log("Error from pinata authentication: ", err);
    });

}

///Pin files to IPFS through pinata and get the sha256 encryption of the url created from the file hash
const pinToIPFS = (content, content_name, method_type, username) => {
    const readableStreamForFile = fs.createReadStream(content);
    const options = {
        pinataMetadata: {
            name: `${content_name}`,
            keyvalues: {
                contentType: `AERX-${method_type}-NFT for ${username}`,
                owner: `${username}`
            }
        },
        pinataOptions: {
            cidVersion: 0
        }
    };
    pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
        console.log(result.IpfsHash);
        console.log(process.env.PinataBaseUrl);
        const fileUrl = `${process.env.PinataBaseUrl}/${result.IpfsHash}`;
        console.log("File url: ", fileUrl)
        const fileUrlHash = new shajs.sha256().update(fileUrl) .digest("base64");
        console.log("Encrypted url: ", fileUrlHash)
        return {
            url : fileUrl,
            urlHash: fileUrlHash,
            size: result.PinSize,
        }
        //Todo: Alert user
        console.log("File pinned to IPFS from pinata succesfully, details: ", result);
    }).catch((err) => {
        //Todo: Alert user and go to previous page(if needed)
        console.log("Unable to pin file to IPFS through pinata", err);
    });
}

///Unpin files from IPFS through pinata(to be used when user change profile picture or delete post)
const unpinFromIPFS = (hashToUnpin) => {
        pinata.unpin(hashToUnpin).then((result) => {
            //clear state(or move the whole state for pinata to another file)
            console.log("Unpin status: ", result);
        }).catch((err) => {
            //Alert users
            console.log(err);
        }); 
}

///Gets last profile picture hash of a user(for profile alone to get hash of file to unpin when user change profile picture)
const getFileHash = (name, username) => {
    const metadata = {
        name: `${name}`,
        keyvalues: {
            contentType: {
                value: `AERX-PROFILE-NFT for ${username}`,
                op: 'eq'
            }
        }
    };
    
    const filters = {
        status : 'pinned',
        pageLimit: 10,
        pageOffset: 0,
        metadata: metadata,
    };
    pinata.pinList(filters).then((result) => {
        if(result.count == 1){
            console.log(result.rows[0].ipfs_pin_hash)
            return result.rows[0].ipfs_pin_hash;
        }
        if(result.count < 1){
            console.log("User with username: " + " doesn't have a profile picture that has or contain the name: " + name )
            return "";
        }
        if(result.count > 1){
            console.log("Found more than one profile picture can't determine last profile picture hash")
            return "";
        }
        console.log();
    }).catch((err) => {
        console.log(err);
    });
}

// ///Might be needed for 3D profile picture if users decides to rename their profile pictures
// const renameFile = (hash_to_rename, new_name) => {
//     const newMetadata = {
//         name: `${new_name}`,
//     };
//     pinata.hashMetadata(hash_to_rename, newMetadata).then((result) => {
//         //handle results here
//         console.log(result);
//     }).catch((err) => {
//         //handle error here
//         console.log(err);
//     });
// }

export { pinToIPFS, getFileHash, unpinFromIPFS, authenticate}