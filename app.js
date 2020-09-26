function Validate()	{
	this.id =  function(id)	{
		let odds = 0;
		let eves = 0;
		let check = parseInt(id.substring(12,13));
	
		for(let i = 0; i < id.length-1; i ++)	{
			if(i === 0 || i%2 === 0)	{
				odds += parseInt(id[i]);
			}else	{
				let eve = parseInt(id[i])*2;
				if(eve > 9)	{
					eve = String(eve).split('');
					eve = parseInt(eve[0]) + parseInt(eve[1]);
				}

				eves += eve;
			}
		}

		if((eves+odds+check)%10 == 0)	{
			return true;
		}else	{
			return false;
		}
	};

	this.input = function(value)	{
		let year =  String(new Date().getFullYear()).slice(2,4);
		
		let yob = value.slice(0,2);
		let mob = value.slice(2,4);
		let dob = value.slice(4,6); 

		let days = new Date(yob > year ? '19' + yob:'20' + yob,mob,0).getDate();

		if(yob >= year && mob <= 12 && dob <= days)	{
			return true;
		}else	{
			return false;
		}
	}
}

