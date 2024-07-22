


describe('retirement-calculator',function(){
it('My First Test', async()=>{
 browser.url('https://www.securian.com/insights-tools/retirement-calculator.html/')
 browser.maximizeWindow()
 await browser.setTimeout({ 'pageLoad': 50000 })


await $('#current-age').addValue('40')
await $('#retirement-age').addValue('60')
await $('#current-income').click()
await $('#current-income').addValue('160')
await $('#spouse-income').click()
await $('#spouse-income').addValue('100')
await $('#current-total-savings').click()
await $('#current-total-savings').addValue('150')
await $('#current-annual-savings').click()
await $('#current-annual-savings').addValue('100')
await $('#savings-increase-rate').click()
await $('#savings-increase-rate').addValue('20')
await $('//label[@for="yes-social-benefits"]').click()
await browser.setTimeout({ 'implicit': 5000 })
await $('//label[@for="married"]').click()
await $('//input[@id="social-security-override"]').addValue(500)
await $('//a[text()="Adjust default values"]').click()
await browser.setTimeout({ 'pageLoad': 50000 })

await $('//input[@id="additional-income"]').addValue(500)
await $('//input[@id="retirement-duration"]').addValue(20)
await $('//label[@for="include-inflation"]').click
await $('//input[@id="pre-retirement-roi"]').addValue(80) 
await $('//input[@id="post-retirement-roi"]').addValue(50)
await $('//input[@id="retirement-annual-income"]').addValue(75)
await $('//input[@id="pre-retirement-roi"]').addValue(80)
await $('//input[@id="post-retirement-roi"]').addValue(50)
await $('//button[text()="Save changes"]').click()



await $('//button[text()="Calculate"]').click()
//await browser.setTimeout({ 'implicit': 5000 })
//await $('//button[text()="Clear form"]').click()

await browser.pause(50000)

})

})