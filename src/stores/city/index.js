
const state = {
    nm: window.localStorage.getItem('citynm') || '北京',
    id: window.localStorage.getItem('cityid') || 1
};

const mutations = {
    CHANGE_CITY(state,payload){
        state.nm = payload.nm;
        state.id = payload.id;
    }

};

const actions = {

};            // 用 ;

export default {  // ********** 必须加空格 *************
    namespace : true,
    state,
    mutations,
    actions,
}