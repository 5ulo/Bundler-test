# WpBs5 starter pack
<br>
<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg" height="50">
    <img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" height="50">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" height="50">
    <img src="https://icons.getbootstrap.com/assets/img/icons-hero.png" height="50">
    <img src="https://handlebarsjs.com/images/handlebars_logo.png" height="50">
    <img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" height="50" >
    

</p>


## Initialize
    
### 1. Clone repository
```bash
git clone git@gitlab.com:njoysk-devel/wpbs5.git my/directory
```

### 2. Switch into project folder

```bash
cd my/directory
```

### 3. Install or Update NodePackageManager

#### If you have not installed NPM, you may download and install on this link: https://www.npmjs.com/get-npm.

Show version of locally installed NPM:
```bash
npm -v
```

Update npm  (minimum required version: 7.x):
```bash
npm install npm -g
```

**Optional**
Use `nvm` to change folder environment to projects tested node version set in `.nvmrc`
```bash
nvm use
```

### 4. Install dependencies

```bash
npm i
```

### 5. Serve project
For development you can use `webpack-dev-server` on `0.0.0.0:3000` by running:

```bash
npm run start
```

### 6. HTTPS/SSL (Optional)
HTTPS is default enabled. Import `.cert/dev.local.crt` into your Keychain. If your webpack uses other IP as default one, edit this command and create new crt file.
```bash
openssl req -x509 -newkey rsa:4096 -sha256 -days 3650 -nodes \
  -keyout dev.local.key -out dev.local.crt -extensions san -config \
  <(echo "[req]"; 
    echo distinguished_name=req; 
    echo "[san]"; 
    echo subjectAltName=DNS:dev.local,DNS:developer.dev.local,DNS:www.dev.local,DNS:api.dev.local,IP:0.0.0.0,IP:127.0.0.1
    ) \
  -subj "/CN=dev.local"
```

## Production

Build to production with "default" asset name

```bash
npm run build
```

**Optional**
change `asset/default` to your choice

```bash
npm run build -- --name=myweb
```

Build version is available in `dist` folder.



## Customization

Warning: DO NOT edit anything inside `node_modules` directory!!!

### BootStrap 5 override
Every BS5 customization should be made inside `./src/assets/scss/partials/_custom-variables.scss` file. Full BS variables are listed in `./src/assets/scss/partials/_bs-variables-tpl.scss`

### Custom fonts
As there's a bug in Google Fonts Webpack Plugin (see TODO), fonts need to be downloaded and loaded manually. Therefore use [Google Webfonts Helper](https://google-webfonts-helper.herokuapp.com/fonts/) and download fonts you need. Don't forget to include ```latin-ext``` subset in order to have characters like ľščťžá etc.

Copy CSS (Modern Browsers + prefix ```../fonts/```) and use it in theme SCSS (ideally inside ```assets/scss/partials```).

### Including additional plugins

Install plugins from NPM
1. install with
```bash
npm i pluginName
```

2. load required css/scss and js inside `./src/assets/js/app.js`

```bash
import 'plugin/path/to.css';
import 'pluginName';
```
Note: Alternatively you can include `.scss` file inside main `style.scss`

3. run your plugin inside `scripts.js` like usually
```javascript
document.addEventListener('DOMContentLoaded', function () {
    // your code
});
```

## Changelog
2023-09-14
- support for multiple themes & pages (`--env theme=name`)
- added IDSK in this package (`npm run start-idsk`)

2023-01-04
- Bootstrap 5.3
- bootstrap-icons SCSS
- https is default
- new post snippets
- focus style
- accessible js-card script

2022-07-24
- Bootstrap 5.2
- major upgrade to latest packages
- removed modules like `object-fit`, `border-radius`, `prem`, `transform-origin` etc. (replaced by native CSS)


## TODO list
- **bootstrap-icons SCSS** - https://github.com/twbs/icons/issues/1381
- **Google Fonts Webpack Plugin** - v0.4.4 is currently broken with WebPack 4; waiting for [#22](https://github.com/gabiseabra/google-fonts-webpack-plugin/pull/22).
