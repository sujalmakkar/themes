var status = false
export default function setstatus(e){
    if(e){
        if(e==1){
            status = true
        }else{
            status = false
        }
        return status
    }else{
        return status
    }

}