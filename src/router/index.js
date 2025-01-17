import { createRouter, createWebHistory } from 'vue-router'
import UnderMaintenancePage from '@/views/pages/UnderMaintenance.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/setup',
      name: 'Setup',
      component: () => import('@/views/pages/SetupSwiftwave.vue')
    },
    {
      path: '/maintenance',
      name: 'Maintenance',
      component: UnderMaintenancePage
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/pages/LoginView.vue')
    },
    {
      path: '',
      redirect: '/applications'
    },

    {
      path: '/deploy',
      children: [
        {
          path: 'application',
          name: 'Deploy Application',
          component: () => import('@/views/pages/DeployApplication.vue')
        },
        {
          path: 'stack',
          name: 'Deploy Stack',
          component: () => import('@/views/pages/DeployStack.vue')
        },
        {
          path: 'app-store',
          name: 'App Store',
          component: () => import('@/views/pages/AppStore.vue')
        },
        {
          path: 'app-store/install',
          name: 'Install from App Store',
          component: () => import('@/views/pages/AppInstall.vue')
        }
      ]
    },
    {
      path: '/applications',
      name: 'Applications',
      component: () => import('@/views/pages/ApplicationManagement.vue')
    },
    {
      path: '/application/:id',
      name: 'Application Details',
      component: () => import('@/views/pages/ApplicationDetails.vue'),
      children: [
        {
          path: 'deployments',
          name: 'Application Details Deployments',
          component: () => import('@/views/pages/ApplicationDetails/DeploymentList.vue')
        },
        {
          path: 'deployment/:deployment_id',
          name: 'Application Deployment Details',
          component: () => import('@/views/pages/ApplicationDetails/DeploymentDetails.vue')
        },
        {
          path: 'runtime_logs',
          name: 'Application Details Runtime Logs',
          component: () => import('@/views/pages/ApplicationDetails/RuntimeLogs.vue')
        },
        {
          path: 'ingress_rules',
          name: 'Application Details Ingress Rules',
          component: () => import('@/views/pages/ApplicationDetails/IngressRules.vue')
        },
        {
          path: 'update_source',
          name: 'Application Details Update Source',
          component: () => import('@/views/pages/ApplicationDetails/UpdateSourceCode.vue')
        },
        {
          path: 'environment_variables',
          name: 'Application Details Environment Variables',
          component: () => import('@/views/pages/ApplicationDetails/EnvironmentVariables.vue')
        },
        {
          path: 'persistent_volumes',
          name: 'Application Details Persistent Volumes',
          component: () => import('@/views/pages/ApplicationDetails/PersistentVolumes.vue')
        },
        {
          path: 'deployment_config',
          name: 'Application Details Deployment Config',
          component: () => import('@/views/pages/ApplicationDetails/DeploymentConfig.vue')
        },
        {
          path: 'danger_zone',
          name: 'Application Details Danger Zone',
          component: () => import('@/views/pages/ApplicationDetails/Destroy.vue')
        },
        {
          path: 'manage',
          name: 'Application Details Manage',
          component: () => import('@/views/pages/ApplicationDetails/Manage.vue')
        },
        {
          path: 'webhook_ci',
          name: 'Application Details Webhook CI',
          component: () => import('@/views/pages/ApplicationDetails/WebhookCI.vue')
        },
        {
          path: 'resource_stats',
          name: 'Application Details Resource Stats',
          component: () => import('@/views/pages/ApplicationDetails/ResourceStats.vue')
        }
      ]
    },
    {
      path: '/persistent-volumes',
      name: 'Persistent Volumes',
      component: () => import('@/views/pages/PersistentVolumeManagement.vue')
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('@/views/pages/UsersManagement.vue')
    },
    {
      path: '/git-credentials',
      name: 'Git Credentials',
      component: () => import('@/views/pages/GitCredentialManagement.vue')
    },
    {
      path: '/image-registry-credentials',
      name: 'Image Registry Credentials',
      component: () => import('@/views/pages/ImageRegistryCredentialManagement.vue')
    },
    {
      path: '/domains',
      name: 'Domains',
      component: () => import('@/views/pages/DomainManagement.vue')
    },
    {
      path: '/redirect-rules',
      name: 'Redirect Rules',
      component: () => import('@/views/pages/RedirectRuleManagement.vue')
    },
    {
      path: '/ingress-rules',
      name: 'Ingress Rules',
      component: () => import('@/views/pages/IngressRuleManagement.vue')
    },
    {
      path: '/pv-backup-download/:backup_id',
      name: 'Download Persistent Volume Backup',
      component: () => import('@/views/pages/DownloadPVBackup.vue')
    },
    {
      path: '/servers',
      name: 'Servers',
      component: () => import('@/views/pages/ServerManagement.vue')
    },
    {
      path: '/server/logs',
      name: 'Server Logs',
      component: () => import('@/views/pages/ServerLogs.vue')
    },
    {
      path: '/server/analytics',
      name: 'Server Analytics',
      component: () => import('@/views/pages/ServerAnalytics.vue')
    },
    {
      path: '/logs',
      name: 'System Logs',
      component: () => import('@/views/pages/SystemLogs.vue')
    }
  ]
})

export default router
