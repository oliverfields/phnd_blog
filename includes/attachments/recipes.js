 /*
 * Some example recipes for Collectd RRD data - you *will* need to modify this
 * based on the RRD data available on your system.
 */

if(typeof(jarmon) === 'undefined') {
    var jarmon = {};
}

jarmon.TAB_RECIPES_STANDARD = [

    ['General',
      ['users','contextswitch']
    ],
    ['Disk',
      ['diskfree','xvda1']
    ],
    ['CPU',
      ['load','processes','cpu-0','cpu-1','cpu-2','cpu-3']
    ],
    ['Memory',
      ['memory','swap','vmem']
    ],
    ['Network',
      ['interface','conntrack','tcpconns-22-local','tcpconns-80-local']
    ],
];

jarmon.CHART_RECIPES_COLLECTD = {
    'cpu-0': {
        title: 'CPU-0 usage',
        data: [
            ['data/cpu-0/cpu-wait.rrd', 0, 'CPU-0 Wait', '%'],
            ['data/cpu-0/cpu-system.rrd', 0, 'CPU-0 System', '%'],
            ['data/cpu-0/cpu-user.rrd', 0, 'CPU-0 User', '%'],
            ['data/cpu-0/cpu-interrupt.rrd', 0, 'CPU-0 Interrupt', '%'],
            ['data/cpu-0/cpu-nice.rrd', 0, 'CPU-0 Nice', '%'],
            ['data/cpu-0/cpu-steal.rrd', 0, 'CPU-0 Steal', '%'],
            ['data/cpu-0/cpu-softirq.rrd', 0, 'CPU-0 Soft IRQ', '%'],
       ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'cpu-1': {
        title: 'CPU-1 usage',
        data: [
            ['data/cpu-1/cpu-wait.rrd', 0, 'CPU-1 Wait', '%'],
            ['data/cpu-1/cpu-system.rrd', 0, 'CPU-1 System', '%'],
            ['data/cpu-1/cpu-user.rrd', 0, 'CPU-1 User', '%'],
            ['data/cpu-1/cpu-interrupt.rrd', 0, 'CPU-1 Interrupt', '%'],
            ['data/cpu-1/cpu-nice.rrd', 0, 'CPU-1 Nice', '%'],
            ['data/cpu-1/cpu-steal.rrd', 0, 'CPU-1 Steal', '%'],
            ['data/cpu-1/cpu-softirq.rrd', 0, 'CPU-1 Soft IRQ', '%'],
       ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'cpu-2': {
        title: 'CPU-2 usage',
        data: [
            ['data/cpu-2/cpu-wait.rrd', 0, 'CPU-2 Wait', '%'],
            ['data/cpu-2/cpu-system.rrd', 0, 'CPU-2 System', '%'],
            ['data/cpu-2/cpu-user.rrd', 0, 'CPU-2 User', '%'],
            ['data/cpu-2/cpu-interrupt.rrd', 0, 'CPU-2 Interrupt', '%'],
            ['data/cpu-2/cpu-nice.rrd', 0, 'CPU-2 Nice', '%'],
            ['data/cpu-2/cpu-steal.rrd', 0, 'CPU-2 Steal', '%'],
            ['data/cpu-2/cpu-softirq.rrd', 0, 'CPU-2 Soft IRQ', '%'],
       ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'cpu-3': {
        title: 'CPU-3 usage',
        data: [
            ['data/cpu-3/cpu-wait.rrd', 0, 'CPU-3 Wait', '%'],
            ['data/cpu-3/cpu-system.rrd', 0, 'CPU-3 System', '%'],
            ['data/cpu-3/cpu-user.rrd', 0, 'CPU-3 User', '%'],
            ['data/cpu-3/cpu-interrupt.rrd', 0, 'CPU-3 Interrupt', '%'],
            ['data/cpu-3/cpu-nice.rrd', 0, 'CPU-3 Nice', '%'],
            ['data/cpu-3/cpu-steal.rrd', 0, 'CPU-3 Steal', '%'],
            ['data/cpu-3/cpu-softirq.rrd', 0, 'CPU-3 Soft IRQ', '%'],
       ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'load': {
        title: 'Load Average',
        data: [
            ['data/load/load.rrd', 'shortterm', 'Short Term', ''],
            ['data/load/load.rrd', 'midterm', 'Medium Term', ''],
            ['data/load/load.rrd', 'longterm', 'Long Term', '']
        ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS)
    },

    'processes': {
        title: 'Processes state',
        data: [
            ['data/processes/fork_rate.rrd', 0, 'Fork rate', '#'],
            ['data/processes/ps_state-blocked.rrd', 0, 'Blocked', '#'],
            ['data/processes/ps_state-paging.rrd', 0, 'Paging', '#'],
            ['data/processes/ps_state-running.rrd', 0, 'Running', '#'],
            ['data/processes/ps_state-zombies.rrd', 0, 'Zombie', '#'],
            ['data/processes/ps_state-stopped.rrd', 0, 'Stopped', '#'],
            ['data/processes/ps_state-sleeping.rrd', 0, 'Sleeping', '#'],
        ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'memory': {
        title: 'Memory',
        data: [
            ['data/memory/memory-buffered.rrd', 0, 'Buffered', 'B'],
            ['data/memory/memory-used.rrd', 0, 'Used', 'B'],
            ['data/memory/memory-cached.rrd', 0, 'Cached', 'B'],
            ['data/memory/memory-free.rrd', 0, 'Free', 'B']
        ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'swap': {
        title: 'Swap',
        data: [
            ['data/swap/swap-cached.rrd', 0, 'swap-cached', ''],
            ['data/swap/swap_io-in.rrd', 0, 'swap_io-in', ''],
            ['data/swap/swap-free.rrd', 0, 'swap-free', ''],
            ['data/swap/swap-used.rrd', 0, 'swap-used', ''],
            ['data/swap/swap_io-out.rrd', 0, 'swap_io-out', ''],
        ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'vmem': {
        title: 'Vmem',
        data: [
            ['data/vmem/vmpage_faults.rrd', 0, 'Faults', ''],
            ['data/vmem/vmpage_io-memory.rrd', 0, 'IO memory', ''],
            ['data/vmem/vmpage_io-swap.rrd', 0, 'Swap', ''],
            ['data/vmem/vmpage_number-active_anon.rrd', 0, 'Active anon', ''],
            ['data/vmem/vmpage_number-active_file.rrd', 0, 'Active file', ''],
            ['data/vmem/vmpage_number-anon_pages.rrd', 0, 'Anon_pages', ''],
            ['data/vmem/vmpage_number-bounce.rrd', 0, 'Bounce', ''],
            ['data/vmem/vmpage_number-dirty.rrd', 0, 'Dirty', ''],
            ['data/vmem/vmpage_number-file_pages.rrd', 0, 'File pages', ''],
            ['data/vmem/vmpage_number-free_pages.rrd', 0, 'Free pages', ''],
            ['data/vmem/vmpage_number-inactive_anon.rrd', 0, 'Inactive anon', ''],
            ['data/vmem/vmpage_number-inactive_file.rrd', 0, 'Inactive file', ''],
            ['data/vmem/vmpage_number-isolated_anon.rrd', 0, 'Isolated anon', ''],
            ['data/vmem/vmpage_number-isolated_file.rrd', 0, 'Isolated file', ''],
            ['data/vmem/vmpage_number-kernel_stack.rrd', 0, 'Kernel stack', ''],
            ['data/vmem/vmpage_number-mapped.rrd', 0, 'Mapped', ''],
            ['data/vmem/vmpage_number-mlock.rrd', 0, 'Mlock', ''],
            ['data/vmem/vmpage_number-page_table_pages.rrd', 0, 'Page table pages', ''],
            ['data/vmem/vmpage_number-shmem.rrd', 0, 'Shmem', ''],
            ['data/vmem/vmpage_number-slab_reclaimable.rrd', 0, 'Slab reclaimable', ''],
            ['data/vmem/vmpage_number-slab_unreclaimable.rrd', 0, 'Slab unreclaimable', ''],
            ['data/vmem/vmpage_number-unevictable.rrd', 0, 'Unevictable', ''],
            ['data/vmem/vmpage_number-unstable.rrd', 0, 'Unstable', ''],
            ['data/vmem/vmpage_number-vmscan_write.rrd', 0, 'Vmscan write', ''],
            ['data/vmem/vmpage_number-writeback.rrd', 0, 'Writeback', ''],
            ['data/vmem/vmpage_number-writeback_temp.rrd', 0, 'Writeback temp', ''],
        ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'users': {
        title: 'Users',
        data: [
            ['data/users/users.rrd', 0, 'users', ''],
        ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'contextswitch': {
        title: 'Context switches',
        data: [
            ['data/contextswitch/contextswitch.rrd', 0, 'contextswitch', ''],
        ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'tcpconns-22-local': {
        title: 'Port 22 (ssh)',
        data: [
            ['data/tcpconns-22-local/tcp_connections-CLOSING.rrd', 0, 'tcp_connections-CLOSING', ''],
            ['data/tcpconns-22-local/tcp_connections-SYN_SENT.rrd', 0, 'tcp_connections-SYN_SENT', ''],
            ['data/tcpconns-22-local/tcp_connections-LISTEN.rrd', 0, 'tcp_connections-LISTEN', ''],
            ['data/tcpconns-22-local/tcp_connections-TIME_WAIT.rrd', 0, 'tcp_connections-TIME_WAIT', ''],
            ['data/tcpconns-22-local/tcp_connections-SYN_RECV.rrd', 0, 'tcp_connections-SYN_RECV', ''],
            ['data/tcpconns-22-local/tcp_connections-CLOSE_WAIT.rrd', 0, 'tcp_connections-CLOSE_WAIT', ''],
            ['data/tcpconns-22-local/tcp_connections-CLOSED.rrd', 0, 'tcp_connections-CLOSED', ''],
            ['data/tcpconns-22-local/tcp_connections-LAST_ACK.rrd', 0, 'tcp_connections-LAST_ACK', ''],
            ['data/tcpconns-22-local/tcp_connections-FIN_WAIT1.rrd', 0, 'tcp_connections-FIN_WAIT1', ''],
            ['data/tcpconns-22-local/tcp_connections-FIN_WAIT2.rrd', 0, 'tcp_connections-FIN_WAIT2', ''],
            ['data/tcpconns-22-local/tcp_connections-ESTABLISHED.rrd', 0, 'tcp_connections-ESTABLISHED', ''], 
        ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'tcpconns-80-local': {
        title: 'Port 80 (http)',
        data: [
            ['data/tcpconns-80-local/tcp_connections-CLOSING.rrd', 0, 'tcp_connections-CLOSING', ''],
            ['data/tcpconns-80-local/tcp_connections-SYN_SENT.rrd', 0, 'tcp_connections-SYN_SENT', ''],
            ['data/tcpconns-80-local/tcp_connections-LISTEN.rrd', 0, 'tcp_connections-LISTEN', ''],
            ['data/tcpconns-80-local/tcp_connections-TIME_WAIT.rrd', 0, 'tcp_connections-TIME_WAIT', ''],
            ['data/tcpconns-80-local/tcp_connections-SYN_RECV.rrd', 0, 'tcp_connections-SYN_RECV', ''],
            ['data/tcpconns-80-local/tcp_connections-CLOSE_WAIT.rrd', 0, 'tcp_connections-CLOSE_WAIT', ''],
            ['data/tcpconns-80-local/tcp_connections-CLOSED.rrd', 0, 'tcp_connections-CLOSED', ''],
            ['data/tcpconns-80-local/tcp_connections-LAST_ACK.rrd', 0, 'tcp_connections-LAST_ACK', ''],
            ['data/tcpconns-80-local/tcp_connections-FIN_WAIT1.rrd', 0, 'tcp_connections-FIN_WAIT1', ''],
            ['data/tcpconns-80-local/tcp_connections-FIN_WAIT2.rrd', 0, 'tcp_connections-FIN_WAIT2', ''],
            ['data/tcpconns-80-local/tcp_connections-ESTABLISHED.rrd', 0, 'tcp_connections-ESTABLISHED', ''], 
        ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'conntrack': {
        title: 'Connection tracking',
        data: [
            ['data/conntrack/conntrack.rrd', 0, 'conntrack', ''],
        ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'interface': {
        title: 'Interface',
        data: [
            ['data/interface/if_octets-lo.rrd', 0, 'if_octets-lo', ''],
            ['data/interface/if_packets-lo.rrd', 0, 'if_packets-lo', ''],
            ['data/interface/if_errors-eth1.rrd', 0, 'if_errors-eth1', ''],
            ['data/interface/if_errors-lo.rrd', 0, 'if_errors-lo', ''],
            ['data/interface/if_octets-eth1.rrd', 0, 'if_octets-eth1', ''],
            ['data/interface/if_packets-eth1.rrd', 0, 'if_packets-eth1', ''],
            ['data/interface/if_packets-eth0.rrd', 0, 'if_packets-eth0', ''],
            ['data/interface/if_errors-eth0.rrd', 0, 'if_errors-eth0', ''],
            ['data/interface/if_octets-eth0.rrd', 0, 'if_octets-eth0', ''],
        ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },
    
    'diskfree': {
        title: 'Disk free space',
        data: [
            ['data/df/df-dev.rrd', 0, 'df-dev', ''],
            ['data/df/df-root.rrd', 0, 'df-root', ''],
            ['data/df/df-dev-shm.rrd', 0, 'df-dev-shm', ''],
            ['data/df/df-lib-init-rw.rrd', 0, 'df-lib-init-rw', ''],
        ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },

    'xvda1': {
        title: '/dev/xdva1',
        data: [
            ['data/disk-xvda1/disk_time.rrd', 0, 'disk_time', ''],
            ['data/disk-xvda1/disk_octets.rrd', 0, 'disk_octets', ''],
            ['data/disk-xvda1/disk_merged.rrd', 0, 'disk_merged', ''],
            ['data/disk-xvda1/disk_ops.rrd', 0, 'disk_ops', ''],
        ],
        options: jQuery.extend(true, {}, jarmon.Chart.BASE_OPTIONS,
                                         jarmon.Chart.STACKED_OPTIONS)
    },
};
