import request from '@/utils/request'

export function getGenerateCode (req) { // 生成推广码
    return request({
        url: 'extends/QRCode',
        method: 'get',
        params: req
    })
}
export function getOneScoreByCity (req) { // 通过地区 年份 科目 分页查询一份一段表
    return request({
        url: 'sectionscore/getList',
        method: 'get',
        params: req
    })
}
export function getOneScoreById (req) { // 通过id查询一份一段表信息
    return request({
        url: 'sectionscore/getSectionscoreById',
        method: 'get',
        params: req
    })
}
export function updateOneScore (req) { // 修改新增一份一段表信息
    return request({
        url: 'sectionscore/updateSectionscore',
        method: 'get',
        params: req
    })
}
export function getOneScoreProvince () { // 一分一段表获取城市
    return request({
        url: 'sectionscore/sectioncity',
        method: 'get'
        // params: req
    })
}
export function getOneScoreYear (req) { // 一分一段表根据城市获取年份
    return request({
        url: 'sectionscore/sectionyear',
        method: 'get',
        params: req
    })
}
export function getOneScoreCategory (req) { // 一分一段表根据城市年份获取文理科
    return request({
        url: 'sectionscore/sectionsubject',
        method: 'get',
        params: req
    })
}
export function getzyBatchInfo (req) { // 志愿批次信息表根据城市获取
    return request({
        url: 'batch/findAllBatchByCity',
        method: 'get',
        params: req
    })
}
export function updateBatchInfo (req) { // 志愿批次信息表修改
    return request({
        url: 'batch/updateBatchInfo',
        method: 'get',
        params: req
    })
}
