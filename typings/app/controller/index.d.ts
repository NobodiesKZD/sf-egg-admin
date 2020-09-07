// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase from '../../../app/controller/base';
import ExportWelcome from '../../../app/controller/welcome';
import ExportAdminComm from '../../../app/controller/admin/comm';
import ExportAdminSysDept from '../../../app/controller/admin/sys/dept';
import ExportAdminSysMenu from '../../../app/controller/admin/sys/menu';
import ExportAdminSysRole from '../../../app/controller/admin/sys/role';
import ExportAdminSysUser from '../../../app/controller/admin/sys/user';

declare module 'egg' {
  interface IController {
    base: ExportBase;
    welcome: ExportWelcome;
    admin: {
      comm: ExportAdminComm;
      sys: {
        dept: ExportAdminSysDept;
        menu: ExportAdminSysMenu;
        role: ExportAdminSysRole;
        user: ExportAdminSysUser;
      }
    }
  }
}
