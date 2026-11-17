sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"br/com/rmp/zcustomercredits/test/integration/pages/ZC_CustomerCreditsList.gen",
	"br/com/rmp/zcustomercredits/test/integration/pages/ZC_CustomerCreditsObjectPage.gen"
], function (JourneyRunner, ZC_CustomerCreditsListGenerated, ZC_CustomerCreditsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('br/com/rmp/zcustomercredits') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_CustomerCreditsListGenerated: ZC_CustomerCreditsListGenerated,
			onTheZC_CustomerCreditsObjectPageGenerated: ZC_CustomerCreditsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

