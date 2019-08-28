import Vue from 'vue'
import Router from 'vue-router'
import AddDataPage from '../pages/AddData';
import DataPage from '../pages/Data';
import LogsPage from '../pages/Logs';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/addData',
            name: 'addData',
            component: AddDataPage
        },
        {
            path: '/data',
            name: 'data',
            component: DataPage
        },
        {
            path: '/logs',
            name: 'logs',
            component: LogsPage
        },
        {
            path: '/',
            redirect: '/addData'
        }
    ]
})