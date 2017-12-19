import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {

  public siderMenuArray;//主菜单
  public siderChildArray;//子菜单

  constructor(public router: Router) { }

  ngOnInit() {

    this.siderMenuArray = ["主页", "用户模块", "代理商模块", "资讯模块", "通道模块", "财务模块", "系统设置"];
    this.siderChildArray = [
      [],
      ["用户列表", "类型管理", "实名认证"],
      ["代理商管理", "代理商分润", "代理商等级管理", "激活码管理", "激活用户管理", "激活记录"],
      ["资讯管理", "资讯分类"],
      ["通道管理"],
      ["用户钱包", "钱包分支类型", "钱包分支管理", "钱包分支记录", "钱包历史记录", "充值/还款记录", "收款记录", "提现记录"],
      ["修改账号", "权限管理", "应用设置", "签到设置", "汇聚支付设置", "快捷支付设置", "个推账号设置", "微信账号设置", "支付宝账号设置"]
    ];
  }

  liClick(str: string) {
    switch (str) {
      case "代理商管理":
        this.router.navigateByUrl('/content');
        break;
      default:


    }
  }

}
