Ext.define('bisIQ.view.Alerts', {
    extend: 'Ext.Container',
        xtype: 'alerts',
        config: {
            defaults: {
                margin: 10
            },
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'component', flex: 1,
                    html: 'Flex: 1', style: 'background-color: pink'
                },
                {
                    xtype: 'component', flex: 3,
                    html: 'Flex: 3', style: 'background-color: lightgray'
                }
            ]
    }
});
