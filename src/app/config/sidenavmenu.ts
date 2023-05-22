import { menu } from './image'

export const sideMenu = [
    {
        id: 'dashboard',
        path: 'dashboard',
        normal: menu?.dashboard?.normal,
        active: menu?.dashboard?.active,
        name: 'Dashboard',
        title: 'Dashboard'
    },
    {
        id: 'appointment',
        path: 'appointment',
        normal: menu?.appointment.normal,
        active: menu?.appointment?.active,
        name: 'Appointment',
        children: [
            {
                id: 'allappointments',
                path: '/appointments/allappointments',
                normal: menu?.allappointment.normal,
                active: menu?.allappointment?.active,
                name: 'All Appointment'
            },
            {
                id: 'history',
                path: 'history',
                normal: menu?.history.normal,
                active: menu?.history?.active,
                name: 'History'
            },
            {
                id: 'transferbeautician',
                path: 'transferbeautician',
                normal: menu?.transferbeautician.normal,
                active: menu?.transferbeautician?.active,
                name: 'Transfer Beautician'
            }
        ]
    },
    {
        id: 'sales',
        path: 'sales',
        normal: menu?.sales.normal,
        active: menu?.sales?.active,
        name: 'Sales',
        children: [
            {
                id: 'allsales',
                path: 'allsales',
                normal: menu?.allsales.normal,
                active: menu?.allsales?.active,
                name: 'All Sales'
            },
            {
                id: 'allarchived',
                path: 'allarchived',
                normal: menu?.archived.normal,
                active: menu?.archived?.active,
                name: 'Archived Sales'
            }
        ]
    },
    {
        id: 'members',
        path: 'members',
        normal: menu?.member.normal,
        active: menu?.member?.active,
        name: 'Members',
        children: [
            {
                id: 'allmembers',
                path: 'allmembers',
                normal: menu?.allmember.normal,
                active: menu?.allmember?.active,
                name: 'All Members'
            },
            {
                id: 'members_archived',
                path: 'archived',
                normal: menu?.archived.normal,
                active: menu?.archived?.active,
                name: 'Archived'
            }
        ]
    },
    {
        id: 'vouchersandpromotions',
        path: 'vouchersandpromotions',
        normal: menu?.voucherandpromotion.normal,
        active: menu?.voucherandpromotion?.active,
        name: 'Vouchers & Promotions',
        children: [
            {
                id: 'vouchers',
                path: 'vouchers',
                normal: menu?.voucher.normal,
                active: menu?.voucher?.active,
                name: 'Vouchers',
                children: [
                    {
                        id: 'allvouchers',
                        path: 'allvouchers',
                        normal: menu?.voucher.normal,
                        active: menu?.voucher?.active,
                        name: 'All Vouchers'
                    },
                    {
                        id: 'vouchers_archived',
                        path: 'archived',
                        normal: menu?.archived.normal,
                        active: menu?.archived?.active,
                        name: 'Archived'
                    }
                ]
            },
            {
                id: 'promotions',
                path: 'promotions',
                normal: menu?.promotions.normal,
                active: menu?.promotions?.active,
                name: 'Promotions',
                children: [
                    {
                        id: 'allpromotions',
                        path: 'allpromotions',
                        normal: menu?.promotions.normal,
                        active: menu?.promotions?.active,
                        name: 'All Vouchers'
                    },
                    {
                        id: 'promotions_archived',
                        path: 'archived',
                        normal: menu?.archived.normal,
                        active: menu?.archived?.active,
                        name: 'Archived'
                    }
                ]
            },
        ]
    },
    {
        id: 'pointsmanagement',
        path: 'pointsmanagement',
        normal: menu?.pointsmanagement.normal,
        active: menu?.pointsmanagement?.active,
        name: 'Points Management',
        children: [
            {
                id: 'pointsconsumption',
                path: 'pointsconsumption',
                normal: menu?.pointsmanagement.normal,
                active: menu?.pointsmanagement?.active,
                name: 'Points Consumption'
            },
            {
                id: 'pointtransfer',
                path: 'pointtransfer',
                normal: menu?.pointtransfer.normal,
                active: menu?.pointtransfer?.active,
                name: 'Point Transfer',
                children: [
                    {
                        id: 'createtransfer',
                        path: 'createtransfer',
                        normal: menu?.pointtransfer.normal,
                        active: menu?.pointtransfer?.active,
                        name: 'Create transfer'
                    },
                    {
                        id: 'pointtransfer_archived',
                        path: 'archived',
                        normal: menu?.archived.normal,
                        active: menu?.archived?.active,
                        name: 'Archived'
                    },
                    {
                        id: 'transferhistory',
                        path: 'transferhistory',
                        normal: menu?.history.normal,
                        active: menu?.history?.active,
                        name: 'Transfer History'
                    }
                ]
            }
        ]
    },
    {
        id: 'leavemanagement',
        path: 'leavemanagement',
        normal: menu?.leavemanagement.normal,
        active: menu?.leavemanagement?.active,
        name: 'Leave Management',
        children: [
            {
                id: 'leaveoverview',
                path: 'leaveoverview',
                normal: menu?.leavemanagement.normal,
                active: menu?.leavemanagement?.active,
                name: 'Leave Overview'
            },
            {
                id: 'leaveapplication',
                path: 'leaveapplication',
                normal: menu?.leaveapplication.normal,
                active: menu?.leaveapplication?.active,
                name: 'Leave Application'
            },
            {
                id: 'leaveapproval',
                path: 'leaveapproval',
                normal: menu?.leaveapproval.normal,
                active: menu?.leaveapproval?.active,
                name: 'Leave Approval'
            },
            {
                id: 'leavetype',
                path: 'leavetype',
                normal: menu?.leavemanagement.normal,
                active: menu?.leavemanagement?.active,
                name: 'Leave Type',
                children: [
                    {
                        id: 'allleavetype',
                        path: 'allleavetype',
                        normal: menu?.leavemanagement.normal,
                        active: menu?.leavemanagement?.active,
                        name: 'All leave types'
                    },
                    {
                        id: 'leavetype_archived',
                        path: 'archived',
                        normal: menu?.archived.normal,
                        active: menu?.archived?.active,
                        name: 'Archived'
                    },
                    {
                        id: 'leaveallocation',
                        path: 'leaveallocation',
                        normal: menu?.leavemanagement.normal,
                        active: menu?.leavemanagement?.active,
                        name: 'Leave Allocation',
                        children: [
                            {
                                id: 'viewall',
                                path: 'viewall',
                                normal: menu?.leavemanagement.normal,
                                active: menu?.leavemanagement?.active,
                                name: 'View All'
                            },
                            {
                                id: 'leaveallocation_archived',
                                path: 'archived',
                                normal: menu?.archived.normal,
                                active: menu?.archived?.active,
                                name: 'Archived'
                            }
                        ]
                    },
                ]
            },
        ]
    },
    {
        id: 'reports',
        path: 'reports',
        normal: menu?.folderfilled.normal,
        active: menu?.folderfilled?.active,
        name: 'Reports',
        children: [
            {
                id: 'enddayreport',
                path: 'enddayreport',
                normal: menu?.folderfilled.normal,
                active: menu?.folderfilled?.active,
                name: 'End Day Report'
            },
            {
                id: 'salesreport',
                path: 'salesreport',
                normal: menu?.folderfilled.normal,
                active: menu?.folderfilled?.active,
                name: 'Sales Report'
            },
            {
                id: 'servicereport',
                path: 'servicereport',
                normal: menu?.folderfilled.normal,
                active: menu?.folderfilled?.active,
                name: 'Service Report'
            },
            {
                id: 'appoinmentreport',
                path: 'appoinmentreport',
                normal: menu?.folderfilled.normal,
                active: menu?.folderfilled?.active,
                name: 'Appointment Report'
            },
            {
                id: 'pointconsumptionreport',
                path: 'pointconsumptionreport',
                normal: menu?.folderfilled.normal,
                active: menu?.folderfilled?.active,
                name: 'Point Consumption Report'
            }
        ]
    },
    {
        id: 'productandservices',
        path: 'productandservices',
        normal: menu?.settingfilled.normal,
        active: menu?.settingfilled?.active,
        name: 'Product & Services',
        children: [
            {
                id: 'skintypes',
                path: 'skintypes',
                normal: menu?.menufilled.normal,
                active: menu?.menufilled?.active,
                name: 'Skin Types',
                children: [
                    {
                        id: 'allskintypes',
                        path: 'allskintypes',
                        normal: menu?.menufilled.normal,
                        active: menu?.menufilled?.active,
                        name: 'All Skin Types'
                    },
                    {
                        id: 'skintypes_archived',
                        path: 'archived',
                        normal: menu?.archived.normal,
                        active: menu?.archived?.active,
                        name: 'Archived'
                    }
                ]
            },
            {
                id: 'benefits',
                path: 'benefits',
                normal: menu?.bookmarkaddedfilled.normal,
                active: menu?.bookmarkaddedfilled?.active,
                name: 'Benefits',
                children: [
                    {
                        id: 'allbenefits',
                        path: 'allbenefits',
                        normal: menu?.bookmarkaddedfilled.normal,
                        active: menu?.bookmarkaddedfilled?.active,
                        name: 'All Benefits'
                    },
                    {
                        id: 'benefits_archived',
                        path: 'archived',
                        normal: menu?.archived.normal,
                        active: menu?.archived?.active,
                        name: 'Archived'
                    }
                ]
            },
            {
                id: 'services',
                path: 'services',
                normal: menu?.spaoutlined.normal,
                active: menu?.spaoutlined?.active,
                name: 'Benefits',
                children: [
                    {
                        id: 'allservices',
                        path: 'allservices',
                        normal: menu?.spaoutlined.normal,
                        active: menu?.spaoutlined?.active,
                        name: 'All Services'
                    },
                    {
                        id: 'services_archived',
                        path: 'archived',
                        normal: menu?.archived.normal,
                        active: menu?.archived?.active,
                        name: 'Archived'
                    }
                ]
            },
            {
                id: 'subservices',
                path: 'subservices',
                normal: menu?.bloodtypefilled.normal,
                active: menu?.bloodtypefilled?.active,
                name: 'Sub-Services',
                children: [
                    {
                        id: 'allservices',
                        path: 'allservices',
                        normal: menu?.bloodtypefilled.normal,
                        active: menu?.bloodtypefilled?.active,
                        name: 'All Sub-Services'
                    },
                    {
                        id: 'subservices_archived',
                        path: 'archived',
                        normal: menu?.archived.normal,
                        active: menu?.archived?.active,
                        name: 'Archived'
                    }
                ]
            },
            {
                id: 'addons',
                path: 'addons',
                normal: menu?.addcircleoutlinefilled.normal,
                active: menu?.addcircleoutlinefilled?.active,
                name: 'Add-Ons',
                children: [
                    {
                        id: 'alladdons',
                        path: 'alladdons',
                        normal: menu?.addcircleoutlinefilled.normal,
                        active: menu?.addcircleoutlinefilled?.active,
                        name: 'All Add-Ons'
                    },
                    {
                        id: 'addons_archived',
                        path: 'archived',
                        normal: menu?.archived.normal,
                        active: menu?.archived?.active,
                        name: 'Archived'
                    }
                ]
            },
            {
                id: 'machine',
                path: 'machine',
                normal: menu?.equipmentoutlined.normal,
                active: menu?.equipmentoutlined?.active,
                name: 'Machine',
                children: [
                    {
                        id: 'allmachine',
                        path: 'allmachine',
                        normal: menu?.equipmentoutlined.normal,
                        active: menu?.equipmentoutlined?.active,
                        name: 'All Machine'
                    },
                    {
                        id: 'machine_archived',
                        path: 'archived',
                        normal: menu?.archived.normal,
                        active: menu?.archived?.active,
                        name: 'Archived'
                    }
                ]
            },
            {
                id: 'outlet',
                path: 'outlet',
                normal: menu?.outletoutlined.normal,
                active: menu?.outletoutlined?.active,
                name: 'Outlet',
                children: [
                    {
                        id: 'alloutlet',
                        path: 'alloutlet',
                        normal: menu?.outletaddoutlined.normal,
                        active: menu?.outletaddoutlined?.active,
                        name: 'All Outlet'
                    },
                    {
                        id: 'outlet_archived',
                        path: 'archived',
                        normal: menu?.archived.normal,
                        active: menu?.archived?.active,
                        name: 'Archived'
                    }
                ]
            },
        ]
    },
    {
        id: 'membership',
        path: 'membership',
        normal: menu?.cardmembershipfilled.normal,
        active: menu?.cardmembershipfilled?.active,
        name: 'Membership',
        children: [
            {
                id: 'allmembership',
                path: 'allmembership',
                normal: menu?.cardmembershipfilled.normal,
                active: menu?.cardmembershipfilled?.active,
                name: 'All Membership'
            },
            {
                id: 'membership_archived',
                path: 'archived',
                normal: menu?.archived.normal,
                active: menu?.archived?.active,
                name: 'Archived'
            }
        ]
    },
    {
        id: 'staffaccount',
        path: 'staffaccount',
        normal: menu?.supervisoroutlined.normal,
        active: menu?.supervisoroutlined?.active,
        name: 'Staff Account',
        children: [
            {
                id: 'beauticianaccount',
                path: 'beauticianaccount',
                normal: menu?.supervisoroutlined.normal,
                active: menu?.supervisoroutlined?.active,
                name: 'Beautician Account'
            },
            {
                id: 'supervisoraccount',
                path: 'supervisoraccount',
                normal: menu?.supervisoroutlined.normal,
                active: menu?.supervisoroutlined?.active,
                name: 'Supervisor Account'
            },
            {
                id: 'staffaccount_archived',
                path: 'archived',
                normal: menu?.archived.normal,
                active: menu?.archived?.active,
                name: 'Archived'
            }
        ]
    }
];