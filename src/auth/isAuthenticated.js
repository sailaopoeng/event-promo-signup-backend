import jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res, next) => {
	var token = req.headers.authorization;
	if(token && token.substr(0,6) == 'Bearer'){
		token = token.substr(7);
		var decoded = jwt.verify(token, process.env.jws_secret, function(err, decoded){
	        if(err){
	            // if there is an error, the token is not valid!
	            res.sendStatus(401);
	        } else {
	            var expiryIn = decoded.expires_in;
	            var nowTime = new Date().getTime() / 1000;
	            if(expiryIn >= nowTime){
	            	res.locals.username = decoded.username;
	            	return next();	
	            }
	            else{
	            	res.sendStatus(401);
	            }
	        }
	    });
	}
	else{
		res.sendStatus(401);
	}
}