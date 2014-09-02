Ext.define('bisIQ.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Search',
                iconCls: 'search',

                styleHtmlContent: true,
                scrollable: true,

                items:[
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Search'
                    },
                    {
                        docked:'top',
                        xtype: 'search'
                    }                
                ] 
            },
            {
                title: 'Map',
                iconCls: 'locate',
    
                items:[
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Spot Evaluator'
                    },
                    {
                        docked:'top',
                        xtype: 'bismap'
                    }
                ]
            
            },
            {
                title: 'Alerts',
                iconCls: 'time',
                
                items:[
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Alerts'
                    },
                    {
                        docked:'top',
                        xtype: 'alerts'
                    }
                ]
            
            }
        ]
    }
});