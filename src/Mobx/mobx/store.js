import {observable} from "mobx";

const store = observable({
    isLoading: true,
    list: ["北京", "上海", "广州"]
})

export default store