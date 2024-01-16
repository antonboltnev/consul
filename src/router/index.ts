import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EmployeesView from "@/views/EmployeesView.vue";
import TripsView from "@/views/TripsView.vue";
import EUComplianceView from "@/views/EUComplianceView.vue";
import HistoryAndReportingView from "@/views/HistoryAndReportingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: HomeView
    },
    {
      path: '/employees',
      name: 'Employees',
      component: EmployeesView
    },
    {
      path: '/trips',
      name: 'Trips',
      component: TripsView
    },
    {
      path: '/eu-compliance',
      name: 'EU Compliance',
      component: EUComplianceView
    },
    {
      path: '/history-and-reposting',
      name: 'History And Reporting',
      component: HistoryAndReportingView
    },
  ]
})

export default router
