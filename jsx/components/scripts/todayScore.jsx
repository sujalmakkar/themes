import calculate_score from "./calculateScore";

var score = 0

export default function today_score(e){
    if(e>0){
        score = parseFloat((calculate_score(parseInt(e))).toString().slice(0,6))
        return score
    }else{
        return score
    }
}