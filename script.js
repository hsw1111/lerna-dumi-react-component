/*
 * @Description:npm run create  新增包并添加基础配置
 * @Author: huangshiwen
 * @Date: 2022-08-09 15:55:05
 */
const fs = require('fs');
const exec = require('child_process').exec;
const inquirer = require('inquirer');
let packageName = ''; // 包名
let description = ''; // 描述
// 复制文件
const copyFile = name => {
  fs.readFile(`./${name}`, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    fs.writeFile(`./packages/${packageName}/${name}`, data, {}, err => {
      if (err) {
        throw err;
      }
    });
  });
};
// 写人默认内容
const writeFile = (name, content) => {
  fs.writeFile(`./packages/${packageName}/${name}`, content, err => {
    if (err) {
      throw err;
    }
  });
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'package name:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'description:',
    },
  ])
  .then(answers => {
    console.log('answers', answers.name);
    packageName = answers.name;
    description = answers.description;
    const defaultData = `import React from 'react';
export default () => {
    return <div></div>
}`;

    const packageJson = `
{
  "name": "@zxy/${packageName}",
  "version": "0.0.1",
  "description": "${description}",
  "author": "黄士文 <huangshiwen@boe.com.cn>",
  "homepage": "https://github.com/hsw1111/lerna-dumi-react-component#readme",
  "main": "lib/index.js",
  "module": "es/index.js",
  "typings": "lib/index.d.ts",
  "scripts": {
    "build": "father-build"
  },
  "peerDependencies": {
    "ppfish": "^1.7.6",
    "react": "^16.x"
  },
  "license": "ISC",
  "publishConfig": {
    "registry": "https://cnpm.boe.com.cn/registry/"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/hsw1111/lerna-dumi-react-component.git"
  },
  "devDependencies": {
  },
  "dependencies": {
  }
}
`;
    // 执行脚本
    let child = exec(`lerna create ${packageName}`, (error, stdout, stderr) => {
      if (error) {
        console.error(error);
      } else {
      }
    });
    child.stdout.on('data', () => {
      process.exit();
    });
    // 创建src文件夹,生成基础配置文件
    fs.mkdir(`./packages/${packageName}/src`, { recursive: true }, err => {
      writeFile(`./src/index.tsx`, defaultData);
      writeFile('package.json', packageJson);
      copyFile('tsconfig.json');
      copyFile('.fatherrc.ts');
    });
  });
