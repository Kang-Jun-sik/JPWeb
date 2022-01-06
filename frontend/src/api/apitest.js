import {instance} from '@/api/index'

//BackEnd API TEST
function TestA() {
    return instance.get("api/test"); //axios instance를 통해 단순화
}

export {
    TestA
}
