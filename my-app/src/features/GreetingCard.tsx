import React, {FC} from "react";
import './greeting-card.css'

interface Props {
    name: string;
    message: string;
}

const GreetingCard: FC<Props> = ({name, message}) => {
    return (
        <div className="card">
            Hello, {name}! {message}
        </div>
    );
}

export default GreetingCard;