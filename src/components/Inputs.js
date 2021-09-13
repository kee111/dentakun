export default function Inputs({ num, setQuestion ,question}) {

    function hantei(){
        setQuestion(question + num);
    }

    return <button onClick={hantei}>{num}</button>;
}
