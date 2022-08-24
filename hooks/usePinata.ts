import { useEffect, useState } from "react";

export type IPFSDataType = {
    fileUrl: string | null;
    fileSize: string | null;
    urlSha256: string | null;
};

// // pin file to ipfs through pinata
// export default function usePinata(
//     file_url: string | undefined,
//     file_name: string | undefined,
//     method_type: string,
//     username: string,
//     // toast: (
//     //     status: UseToastOptions["status"],
//     //     description: string,
//     //     toastId: string,
//     // ) => void,
// ) {
//     useEffect(() => {
//         async function fileUpload() {
//             if (file_name != undefined) {
//                 var parts = file_name.split(".");
//                 const fileType = parts[parts.length - 1];
//                 console.log("fileType to upload: ", fileType)
//             }
//             pinToIPFS(file_url, file_name, method_type, username).then((
//                 { url, size, urlHash }
//             ) => {
//                 setIpfsData((prevIpfs) => ({
//                     ...prevIpfs,
//                     fileUrl: url,
//                     fileSize: size,
//                     urlSha256: urlHash,
//                 }));
//                 return [urlHash, size];

//             });
//             // toast(
//             //     "success",
//             //     "File deployed to IPFS! CID: " + url,
//             //     "ipfsSccss",
//             // );
//         }

//         file_url && fileUpload();
//     }, [file_url]);

//     return ipfsData;
// }
