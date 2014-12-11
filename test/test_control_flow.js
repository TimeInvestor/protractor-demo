describe('test control flow', function() {  
  it('flow 0', function(){
	browser.get('http://localhost:3456');
  });
  
  it('flow 1', function() {
	element(by.model('first')).clear().sendKeys(1);
	console.log("flow 1::1");
    element(by.model('second')).clear().sendKeys(2);
	console.log("flow 1::2");
	element(by.id('gobutton')).click();
	console.log("flow 1::3");
	expect(element(by.binding('latest')).getText()).toEqual('3');
	console.log("flow 1::4");
  });
  
  it('flow 2', function() {
	element(by.model('first')).clear().sendKeys(3);
	console.log("flow 2::a");
    element(by.model('second')).clear().sendKeys(4);
	console.log("flow 2::b");
	element(by.id('gobutton')).click();
	console.log("flow 2::c");
	expect(element(by.binding('latest')).getText()).toEqual('7');
	console.log("flow 2::d");
  });
  
  it('flow 3', function(){
	element(by.model('first')).clear().sendKeys(5);
	console.log("flow 3::A");
    element(by.model('second')).clear().sendKeys(6);
	console.log("flow 3::B");
	element(by.id('gobutton')).click();
	console.log("flow 3::C");
	expect(element(by.binding('latest')).getText()).toEqual('11');
	console.log("flow 3::D");
  });
  
});