import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {

  siderData;//sider数据

  constructor(public router: Router) { }

  ngOnInit() {

    this.siderData = [
      {
        name: "主页",
        child: [

        ]
      },
      {
        name: "用户模块",
        child: [
          {
            name: "用户列表",
            route: 'content'
          },
          {
            name: "类型管理"
          },
          {
            name: "实名认证"
          }
        ]
      },
      {
        name: "代理商模块",
        child: [
          {
            name: "代理商管理"
          },
          {
            name: "代理商等级管理"
          },
          {
            name: "激活码管理"
          },
          {
            name: "激活用户管理"
          },
          {
            name: "激活记录"
          }
        ]
      },
      {
        name: "资讯模块",
        child: [
          {
            name: "资讯管理"
          },
          {
            name: "资讯分类"
          }
        ]
      },
      {
        name: "通道模块",
        child: [
          {
            name: "通道管理"
          }
        ]
      },
      {
        name: "财务模块",
        child: [
          {
            name: "用户钱包",
          },
          {
            name: "钱包分支管理"
          },
          {
            name: "钱包分支记录"
          },
          {
            name: "钱包历史记录"
          },
          {
            name: "充值/还款记录"
          },
          {
            name: "收款记录"
          },
          {
            name: "提现记录"
          }
        ]
      },
      {
        name: "系统设置",
        child: [
          {
            name: "修改账号"
          },
          {
            name: "权限管理"
          },
          {
            name: "应用设置"
          },
          {
            name: "签到设置"
          },
          {
            name: "汇聚支付设置"
          },
          {
            name: "快捷支付设置"
          },
          {
            name: "个推账号设置"
          },
          {
            name: "微信账号设置"
          },
          {
            name: "支付宝账号设置"
          }
        ]
      }
    ];


  }

  liClick(str: string) {
        console.log(str);
        this.router.navigateByUrl('/' + str);
  }

}
