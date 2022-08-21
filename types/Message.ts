import { EMessageType } from "../enums/EMessageType"

export type Message = {
    id: string,
    sender: {
        id: string,
        name: string,
        avatar: string,
    },
    recipient: {
        id: string,
        name: string,
        avatar: string,
    }
    content: string,
    createdAt?: string,
    type: EMessageType,
    status?: {
        isRead: boolean,
        isDelivered: boolean,
        isSelected: boolean,
        isSending: boolean,
        isSendingFailed: boolean,
        isSendingFailedWithError: boolean,
        isSendingFailedWithErrorMessage: string
    }
}