import {FormControl} from '@angular/forms';
export class CustomValidator {
    static eq5(control:FormControl){
        var result=null;
        if(control.value!=5){ //5와 다르면
            result={re:true} //result에 true값을 설정함. = 유효성 검증에 문제 있음
        }
        return result //null이면(5인 경우) 유효성 검사 문제 없음을 의미
    }
} 
