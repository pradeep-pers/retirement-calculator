const RetirementCalculatorPage=require('../test/retirement-calculator.page')

describe('retirement-calculator',function(){
    it('Retirementcalculator Results', async()=>{
     browser.url('https://www.securian.com/insights-tools/retirement-calculator.html/')
     browser.maximizeWindow()
     await browser.setTimeout({ 'pageLoad': 50000 })

     await RetirementCalculatorPage.PassValuestoTextbox ('40','68','100000','75000 ','500000 ','10','.25','4000','500','20','75','8','5')
     await RetirementCalculatorPage.ClickonCheckBox()
     await RetirementCalculatorPage.ClickonButton()
     await RetirementCalculatorPage.ClickonLink()



    })

})