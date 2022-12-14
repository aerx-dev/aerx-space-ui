import React, { useState } from 'react'
import InitializeDeal from './InitializeDeal';
import InitializeDealNFT from './Nft';
import InitializeDealService from './Service';

interface IProps {
    onClose: () => void
}
const DealFlow: React.FC<IProps> = ({onClose}) => {
    const [flow, setFlow] = useState<number>(0);
    return (
        <div>
            {flow === 0 && <InitializeDeal setFlow={setFlow} />}
            {flow === 1 && <InitializeDealNFT />}
            {flow === 3 && <InitializeDealService />}
        </div>
    )
}

export default DealFlow;