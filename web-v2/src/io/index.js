import axios from 'axios';

const API = process.env.NODE_ENV === 'development' ? `http://localhost:3000/plans/` : '/plans/';
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

//　获取当前计划
export async function getPlan(){
  return null;
}

//　保存新计划
export async function setPlan(){
  return null;
}