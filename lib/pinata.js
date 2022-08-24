const axios = require("axios");
const FormData = require("form-data");
import isIPFS from 'is-ipfs';
import toast from 'react-hot-toast';

const pinataApiKey = process.env.NEXT_PUBLIC_PINATA_KEY;
const pinataSecretApiKey = process.env.NEXT_PUBLIC_PINATA_SECRET_KEY;
const baseUrl = process.env.NEXT_PUBLIC_PINATA_BASE_URL;


const authenticatePinata = () => {
    const endpoint = `${baseUrl}/data/testAuthentication`;
    const params =  {
        withCredentials: false,
        headers: {
            'pinata_api_key': pinataApiKey,
            'pinata_secret_api_key': pinataSecretApiKey
        }
    };
    return axios.get(endpoint,params).then((res) => {
            if (res.status !== 200) {
                toast.error(`unknown server response while authenticating: ${res}`);
                console.error("Error: server response unknown",res)
                return false;
            }
            console.log("Authentication Result: ", res.data.message)
            return true;
        }).catch((err) => {
           toast.error("Pinata Authentication failed: ", err)
           console.error("Pinata Authentication failed: ", err)
           return false;
        });
};


const pinFileToIPFS = (content, method_type, username) => {
    
    let formatted_content = new FormData();
    formatted_content.append("file", content);
    const metadata = JSON.stringify({
        name: `AERX-${method_type}-NFT for ${username}`,
        keyvalues: {
            owner : `${username}`,
        },
    });
    const option = JSON.stringify({
        cidVersion: 0,
        wrapWithDirectory: false //confirm this from project management
    })
    formatted_content.append("pinataMetadata", metadata);
    formatted_content.append("pinataOptions", option);

    const endpoint = `${baseUrl}/pinning/pinFileToIPFS`;
    const params = {
        withCredentials: false,// due to invalid url
        maxContentLength: 'Infinity',//confirm this project management or set default length
        maxBodyLength: 'Infinity',
        headers: {
            'Content-type': `multipart/form-data; boundary= ${formatted_content._boundary}`,
            'pinata_api_key': pinataApiKey,
            'pinata_secret_api_key': pinataSecretApiKey
        }
    }    
    return axios.post(endpoint, formatted_content, params).then((res) => {
                if (res.status !== 200) {
                    toast.error(`unknown server response while pining file to IPFS: ${res}`);
                    console.error("Error: server response unknown",res)
                }
                console.log("File pinned to ipfs from pinata successfully with details: ",res.data);
                toast.success("File pinned to ipfs from pinata successfully")
                return res.data;
            })
            .catch(function (error) {
                toast.error("Error while pinining file to ipfs from pinata")
                console.log(error);
            })
};

const unpinFromPinata = (hashToUnpin) => {
    if (!isIPFS.cid(hashToUnpin)) {
        toast.error(`${hashToUnpin} is an invalid IPFS CID`);
        console.error("Invalid ipfs hash")
    }
    const endpoint = `${baseUrl}/pinning/unpin/${hashToUnpin}`;
    const params = {
        withCredentials: false,
        headers: {
            'pinata_api_key': pinataApiKey,
            'pinata_secret_api_key': pinataSecretApiKey
        }
    };
     return axios.delete(endpoint,params).then((res) => {
            if (res.status !== 200) {
                toast.error(`unknown server response while removing pin from IPFS: ${res}`);
                console.error("Error: server response unknown",res)
            }
            return(result.data);
        }).catch((err) => {
            toast.error("Error while unpining file from ipfs from pinata")
        });
    
}

export {authenticatePinata, pinFileToIPFS, unpinFromPinata}