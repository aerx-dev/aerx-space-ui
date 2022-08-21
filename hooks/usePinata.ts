// custom hook for IPFS
import { useEffect, useState } from "react";
import { pinToIPFS } from "../lib/pinata";
import { UseToastOptions } from "@chakra-ui/react";
import shajs from "sha.js";
import { AnyArray } from "immer/dist/internal";

export type usePinataProps = {
    file: File | undefined;
    toast: (
        status: UseToastOptions["status"],
        description: string,
        toastId: string,
    ) => void;
};

export type IPFSDataType = {
    fileUrl: string | null;
    fileSize: string | null;
    urlSha256: string | null;
};

// Change this for using crust or not. If you use crust we will unpin the file from pinata
const deployCrust = false;

// pass the file or state you want to upload. It will upload the file and retrun the response.
export default function usePinata(
    file: File | undefined,
    method_type: string,
    username: string,
    toast: (
        status: UseToastOptions["status"],
        description: string,
        toastId: string,
    ) => void,
) {
    const [ipfsData, setIpfsData] = useState<IPFSDataType>({
        fileUrl: null,
        fileSize: null,
        urlSha256: null,
    });

    useEffect(() => {
        async function fileUpload() {
            const filename = file!.name;
            var parts = filename.split(".");
            const fileType = parts[parts.length - 1];
            console.log("fileType to upload: ", fileType)
            const { url, urlHash, size }: any = pinToIPFS(file, filename, method_type, username);
            setIpfsData((prevIpfs) => ({
                ...prevIpfs,
                fileUrl: url,
                fileSize: size,
                urlSha256: urlHash,
            }));
            toast(
                "success",
                "File deployed to IPFS! CID: " + url,
                "ipfsSccss",
            );
            return [urlHash, size];
        }

        file && fileUpload();
    }, [file]);

    return ipfsData;
}
