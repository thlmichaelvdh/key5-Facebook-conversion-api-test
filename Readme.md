`npm init keystone-5-app bad-nuxt-5.1`

`npm i @keystonejs/list-plugins --save`

`npm i @keystonejs/fields-wysiwyg-tinymce --save`

`npm i core-js --save`

`npm i webpack webpack-cli --save-dev`

`npm i ant-design-vue --save-dev`

`npm i sass sass-loader --save-dev`

`npm i dotenv --save`



### add LISTS folder

###remove TODO list from index.js
### and remove Text import from index.js

###pasted LISTS hook ups... to index.js
`
// reference lists ------------------------------------
const ArticleSchema = require('./lists/Article.js');
const TagSchema = require('./lists/Tag.js');
const UserSchema = require('./lists/User.js');
const TodoSchema = require('./lists/Todo.js');
// register lists --------------------------------------
keystone.createList('Article', ArticleSchema);
keystone.createList('Tag', TagSchema);
keystone.createList('User', UserSchema);
keystone.createList('Todo', TodoSchema);
`



### add /src/components
### added /src/compontents/Navigation.vue
when you add <Navigation /> in the /src/pages/index.vue it automatically imports the Navigation file

[ index.js add reference to antd]
,
plugins: [
'@/plugins/antd-ui'
]

[ add /src/plugins folder]
[ add /src/plugins/antd-ui.js]
// example ...
import Vue from 'vue'
import {Button} from 'ant-design-vue/lib'
Vue.use(Button);

[ import module to template ]
import {Button} from 'ant-design-vue';
import 'ant-design-vue/lib/button/style/index.css';
export default {
components: {..., Button},
