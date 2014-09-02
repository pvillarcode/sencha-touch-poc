Ext.define('bisIQ.view.Search', {
    extend: 'Ext.Container',
        xtype: 'search',
        config: {
            defaults: {
                margin: 10
            },
           items: [{
            xtype: 'fieldset',
            items: [  
            {
                xtype: 'textfield',
                name: 'businessName',
                value: '',
                label: 'Business Name'
            }, {
                xtype: 'textfield',
                name: 'country',
                value: '',
                label: 'Country'
            },  {
                xtype: 'textfield',
                name: 'city',
                value: '',
                label: 'City'
            },
            {
                xtype: 'textfield',
                name: 'street',
                value: '',
                label: 'Street'
            },
            {
                xtype: 'numberfield',
                name: 'zipCode',
                value: '',
                label: 'Zip Code'
            },{
                xtype: 'selectfield',
                name: 'industry',
                label: 'Industry',
                options: [{
                    display: 'Industry 1',
                    value: 'value1'
                }, {
                    display: 'Industry 2',
                    value: 'value2'
                }, {
                    display: 'Industry 3',
                    value: 'value3'
                }],
                displayField: 'display',
                valueField: 'value'
            }, {
                xtype: 'spinnerfield',
                name: 'minimumScore',
                value: '600',
                label: 'Minimum Score',
                minValue: 1,
                maxValue: 1000,
                stepValue: 10,
                accelerateOnTapHold: true,
                cycle: false,
                increment: 10,
                groupButtons: false
            }]
        },{
            xtype: 'button',
                text: 'Search',
                itemId: 'searchButton',
                listeners: {
                    tap: function (button, e, eOpts) {
                     Ext.Msg.alert("Searching...");
                    }
                }
        
        }]
    }
});