// import { TranslateService } from '@iam/ngx-dynamic-forms/common';

export class HomePageTiles {
  _actions: { driverManagment: RoutelinkInterface[], schemaManagment: RoutelinkInterface[], configurationManagement: RoutelinkInterface[] };

  constructor() {
    this._actions = {
      schemaManagment: [
        new Routelink({
          title: 'Schema Management',
          description: 'Create, Delete classes and attributes and extend objects',
          icon: 'ias-icon ias-icon-dir_schema cardIcon',
          route: '#/schemamanagement',
          id: 'schemaManagementTile'
        }),
        new Routelink({
          title: 'User Management',
          description: 'Search, View, Create, Delete and Edit Users',
          icon: 'ias-icon ias-icon-user_thin ias-medium',
          route: '#/users',
          id: 'usersTile'
        }),
        new Routelink({
          title: 'Object Management',
          description: 'Create, Delete, Modify Objects in Datastore',
          icon: 'ias-icon ias-icon-resource_thick ias-medium',
          route: '#/objects',
          id: 'objectsTile'
        }),
        new Routelink({
          title: 'Group Management',
          description: 'Search, View, Create, Delete and Edit Groups',
          icon: 'ias-icon ias-icon-group_thin ias-medium',
          route: '#/groups',
          id: 'groupsTile'
        }),
        new Routelink({
          title: 'Role Management',
          description: 'Search, View, Create and Edit Roles',
          icon: 'ias-icon ias-icon-role_manage ias-medium',
          route: '#/roles',
          id: 'rolesTile'
        })
      ],
      driverManagment: [



        new Routelink({
          title: 'Driver Configuration Management',
          description: 'Search, View, and import Driverset Configurations',
          icon: 'ias-icon ias-icon-idm_driver ias-medium',
          route: '#/drivers',
          id: 'driverDashboardTile'
        }),
        new Routelink({
          title: 'ILM Configurations',
          description: 'Manage ILM configuration',
          icon: 'ias-icon ias-icon-idm_driverset ias-medium',
          route: '#/ilmconfiguration',
          id: 'ilmConfigurationTile'
        }),
        new Routelink({
          title: 'Object Inspector',
          description: 'Object Data Synchronization Inspector',
          icon: 'ias-icon ias-icon-object_inspect ias-medium',
          route: '#/objectInspector',
          id: 'objectInspectorTile'
        }),
        new Routelink({
          title: 'Driver Statistics',
          description: 'Driver Statistics',
          icon: 'ias-icon ias-icon-chart ias-medium',
          route: '#/statistics',
          id: 'statisticsTile'
        }),

        new Routelink({
          title: 'Data Flow',
          description: 'Data Flow (Table View)',
          icon: 'ias-icon ias-icon-data_flow ias-medium',
          route: '#/dataflow',
          id: 'dataflowTile',
        }),



      ],
      configurationManagement: [
        new Routelink({
          title: 'Email Notification Templates',
          description: 'Email Notification Templates',
          icon: 'ias-icon ias-icon-email_notify ias-medium',
          route: '#/emailNotificationTemplates',
          id: 'emailNotificationTemplateTile',
        }),
        new Routelink({
          title: 'Password Synchronization',
          description: 'Password Synchronization',
          icon: 'ias-icon ias-icon-password_sync cardIcon',
          route: '#/passwordSynchronization',
          id: 'passwordSynchronizationTemplateTile',
        }),
        new Routelink({
          title: 'Password Policies',
          description: 'Create, Modify and Delete Password Policies and Challenge Sets',
          icon: 'ias-icon ias-icon-dir_nspmPasswordPolicy cardIcon',
          route: '#/passwordPolicies',
          id: 'passwordPoliciesTemplateTile',
        }),
        new Routelink({
          title: 'Email Server Configuration',
          description: 'Email Server Configuration',
          icon: 'ias-icon ias-icon-email_configure ias-medium',
          route: '#/emailServerConfiguration',
          id: 'emailServerConfiguration',
        }),
        new Routelink({
          title: 'Localization',
          description: 'Localized attribute names',
          icon: 'ias-icon ias-icon-global_configure ias-medium',
          route: '#/localization',
          id: 'localizedTile',
        }),
      new Routelink({
        title: 'Live Log Events',
        description: 'Search, View, Create and Edit Roles',
        icon: 'ias-icon ias-icon-role_manage ias-medium',
        route: '#/logs',
        id: 'LogsTile'
      }),
        new Routelink({
          title: 'SCIM To NCP',
          description: 'SCIM to NCP mapping details',
          icon: 'ias-icon ias-icon-mapping ias-medium',
          route: '#/scimToNcp',
          id: 'scimToNcpTile',
        })],

    };
  }

  public get driverManagment(): RoutelinkInterface[] {
    return this._actions.driverManagment;
  }

  public get schemaMangment(): RoutelinkInterface[] {
    return this._actions.schemaManagment;
  }

  public get configurationManagement(): RoutelinkInterface[] {
    return this._actions.configurationManagement;
  }
}

export interface RoutelinkInterface {
  title: string;
  description: string;
  icon: string;
  route: string | string[] | null;
  id: string;
};

export class Routelink {
  public readonly title: string;
  public readonly description: string;
  public readonly icon: string;
  public readonly route: string | string[] | null;
  public readonly id: string;

  public constructor(d: RoutelinkInterface) {
    this.title = d.title;
    this.description = d.description;
    this.icon = d.icon;
    this.route = d.route;
    this.id = d.id;
  }
}
