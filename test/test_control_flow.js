describe('test control flow', function() {  
  it('flow 0', function(){
	browser.get('http://localhost:3456');
  });
  
  it('flow 1', function() {
	element(by.model('first')).sendKeys(4);
	console.log("flow 1::1");
	console.log("flow 1::2");
	console.log("flow 1::3");
    element(by.model('second')).sendKeys(5);
	console.log("flow 1::4");
  });
  
  it('flow 2', function() {
	console.log("flow 2::a");
	element(by.id('gobutton')).click();
	console.log("flow 2::b");
	console.log("flow 2::c");
	console.log("flow 2::d");
  });
  
  it('flow 3', function(){
	expect(element(by.binding('latest')).getText()).
        toEqual('9');
  });
  
});