
	/*
		SIDENOTE: There is no limit to the # of and(&&) operators you can string together
				^ will have to write myself a standards program for guys. If he meets all my conditions, he passes.
	*/

	//MPG
	//Gallons Per Tank/Tank capacity
	// ^ figure out miles per tank
	// SAFE Spots figure out safe spots to stop along route.
	// ^ give reviews for gas staions within 50 miles of when gas is needed
	// how many times will I need to stop for gas

	//MAIN FEATURES
	//Figure out the price of gas
	// estimate food costs
	// estimate lodging
	// estimate actual arrival time (including stops for gas, food, and lodging)
	// find rest stops
	//  ^with bathrooms, 
	//	^with vending machines
	//	^scenic views/picnic areas
	//	^historical significance

	// TO_DO
	// Branding
	// Rebuild in jQuery
	// Learn about Yelp, Google Map, Gasbuddy, and hotels.com APIs
	// Android and iOS? PhoneGap? HTML5?

	//APIs
	/*
		My Gas Feed:
		http://www.mygasfeed.com/keys/api


	*/
	
/* function to change a class, every 4 seconds... */
/*
	Initial HTML must be set to class-9 :)
*/
var counter = 1;


setInterval( function () {
	if(counter < 10){
		changeClassNum(counter);
		counter += 1;
	} else {
		counter = 1;
		changeClassNum(counter);
		counter += 1;
	}
	
	console.log(counter);

}, 8000 );

function changeClassNum(num){
	$("#changeClass").removeClass( function( ) {
			return $(this).attr("class");
		});

		$("#changeClass").addClass( "header" +  num);
}