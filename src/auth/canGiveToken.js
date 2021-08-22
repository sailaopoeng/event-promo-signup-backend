export const canGiveToken = (req, res, next) => {
	var username = req.body.username;
    var plainPassword = req.body.password;
    var grant_type = req.body.grant_type;

    if (username && username.length > 0 && username === process.env.username
        && plainPassword && plainPassword.length > 0 && plainPassword === Buffer.from(process.env.password, 'base64').toString()
		&& grant_type && grant_type.length >0 && grant_type === 'password') {
        return next();
	} else{
		return res.sendStatus(401);
	}
};