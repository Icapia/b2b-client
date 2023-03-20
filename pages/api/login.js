const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export default async function loginUser(req, res) {
  try {
    if(req.body) {
      const data = req.body;

      try {
        const user = await fetch(`http://localhost:4200/crmUsers/?email=${data.email}`);
        const userData = await user.json();
        if( userData ) {
          const userId = userData[0].id;
          const userPassword = userData[0].password;

          const isMatch = await bCrypt.compare(data.password, userPassword)
          if(!isMatch) {
            res.status(404).json({message: 'Invalid password'})
          }

          const token = jwt.sign(
            { userId: userId },
            'Crm Test Secret Key',
            { expiresIn: '1h' }
          )
          res.status(201).json({ token: token, userId: userId, user: userData })
        } else {
          res.status(404).json({ message: 'Account not found' });
        }
      } catch(e) {
        res.status(404).json({ message: 'Account not found' });
      }
    } else {
      res.status(404).json({ message: "Please enter your Email and Password" })
    }
  } catch(e) {
    res.status(500).json({error: e})
  }
   
}
