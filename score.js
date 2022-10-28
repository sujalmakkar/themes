function calculate_score(time){
    console.log(time)
    var time = time?time:0

    var total_seconds = time.toString().slice(0,-3)

    var score2 = 2
    var score3 = 3
    var score4 = 4
    var score5 = 5
    
    var minutes = (total_seconds/60)
    var score = 0
    if(minutes>(60*9)){
        var minutes_for_score_5 = minutes - 540
        var minutes_for_score_3 = 180
        var minutes_for_score_4 = 180
        var minutes_for_score_2 = 180
        score = (minutes_for_score_3*(score3/60)) + (minutes_for_score_2*(score2/60)) + (minutes_for_score_4*(score4/60))  + (minutes_for_score_5*(score5/60)) 
    }else if(minutes>(60*6)){
        var minutes_for_score_4 = minutes - 360
        var minutes_for_score_3 = 180
        var minutes_for_score_2 = 180
        score = (minutes_for_score_3*(score3/60)) + (minutes_for_score_2*(score2/60)) + (minutes_for_score_4*(score4/60)) 
    }else if(minutes>(60*3)){
        var minutes_for_score_3 = minutes - 180
        var minutes_for_score_2 = 180
        score = (minutes_for_score_3*(score3/60)) + (minutes_for_score_2*(score2/60))
    }else{
        score = minutes*(score2/60)
    }
    console.log(score,minutes)
    return score
}

calculate_score(16740052)