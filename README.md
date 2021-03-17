# Django with webpack and scss file

### Installation

Clone project 
- inside frontend dir run
```
npm install
```

### Start Dev Server for frontend 
- inside frontend dir 
```
npm start
```
leave this running

-inside webpack_try dir
```
python3 manage.py runserver
```

When you change code in the frontend dir, webpack will compile and update so that django can pick it up

### Production build
- for the frontend dir
```
npm run build
```
