/*
 * @Description:
 * @Author: huangshiwen
 * @Date: 2022-08-10 11:36:07
 */
import React from 'react';
import './index.less';
import logo from './imgs/sys-logo.svg';
import icon from './imgs/icon-menu-sys-h.png';
const Module = () => {
  return (
    <div className="test">
      <div>测试</div>
      <div>
        <img src={icon} alt="" />
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};
export default Module;
