import './Buttons.css';

export default function Buttons({name,className ,handleClick}){

    return <button className={className} onClick={handleClick}>{name}</button>
}