import axios from 'axios';

const API = process.env.NODE_ENV === 'development' ? `http://10.234.195.43:3000/plans/` : '/plans/';
// 接口1 获取页面初始化数据
export async function getInitData(data){
  return (await axios.post(`${API}getInitData`, data)).data;
}
// 接口2 新建计划
export async function createPlan(data){
  return (await axios.post(`${API}createPlan`, data)).data;
}
// 接口3 保存一次投资记录
export async function saveInvest(data){
  return (await axios.post(`${API}saveInvest`, data)).data;
}

// 获取当前表格数据
export async function listInvest(){
  return (await axios.post(`${API}listInvest`)).data;
}

// 获取当前计划
export async function getPlan(){
  return (await axios.post(`${API}getPlan`)).data;
}

// 保存新计划
export async function setPlan(data){
  return (await axios.post(`${API}setPlan`, data)).data;
}