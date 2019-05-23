module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  //add your custom rules here
  //t is base on https://ithub.com/vuejs/eslint-config-vue
  rules: {
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/name-property-casing": ["error", "PascalCase"],
    "vue/no-v-html": "off",
    'accessor-pairs': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'], //强制在单行代码块中使用一致的空格
    'brace-style': [2, '1tbs', { //强制在代码块中使用一致的大括号风格
      'allowSingleLine': true
    }],
    'camelcase': [0, { //强制使用骆驼拼写法命名约定
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, { //强制在逗号前后使用一致的空格
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'], //强制使用一致的逗号风格
    'constructor-super': 2,
    'curly': [2, 'multi-line'],
    'dot-location': [2, 'property'], //防止在成员表达式中围绕点使用混合换行符
    'eol-last': 2, //强制文件末尾至少保留一行空行
    'eqeqeq': ["error", "always", {"null": "ignore"}], //要求使用 === 和 !==
    'generator-star-spacing': [2, "both"], //强制关键字*和function关键字之间的间距
    'handle-callback-err': [2, '^(err|error)$'], //要求回调函数中有容错处理
    'indent': [2, 2, { //强制使用一致的缩进
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'], //强制在 JSX 属性中一致地使用双引号或单引号
    'key-spacing': [2, { //强制在对象字面量的属性中键和值之间使用一致的间距
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, { //强制在关键字前后使用一致的空格
      'before': true,
      'after': true
    }],
    'new-cap': [2, { //要求构造函数首字母大写
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2, //要求调用无参构造函数时有圆括号
    'no-alert': 0, //禁用 alert、confirm 和 prompt
    'no-array-constructor': 2, //禁止使用 Array 构造函数
    'no-caller': 2, //不允许使用arguments.caller和arguments.callee
    'no-console': 'off', //禁用console
    'no-class-assign': 2, //标记修改类声明的变量
    'no-cond-assign': 2, //禁止条件表达式中出现模棱两可的赋值操作符
    'no-const-assign': 2, //不能修改使用const关键字声明的变量
    'no-control-regex': 0, //不允许正则表达式中的控制字符
    'no-delete-var': 2, //不允许在变量上使用delete操作符
    'no-dupe-args': 2, //禁止 function 定义中出现重名参数
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2, //禁止对象字面量中出现重复的 key
    'no-duplicate-case': 2, //禁止出现重复的 case 标签
    'no-empty': 2, //禁止出现空语句块
    'no-empty-character-class': 2,
    'no-empty-pattern': 2, //标记解构结构对象和数组中的任何空模式
    'no-eval': 2, //禁止使用eval
    'no-ex-assign': 2, //禁止对 catch 子句的参数重新赋值
    'no-extend-native': 2, //禁止扩展native对象
    'no-extra-bind': 2, //禁止不必要的 .bind() 调用
    'no-extra-boolean-cast': 2, //禁止不必要的布尔转换
    'no-extra-parens': [2, 'functions'], //禁止不必要的括号
    'no-extra-semi': 2, //禁止不必要的分号
    'no-fallthrough': 2, //禁止 case 语句落空
    'no-floating-decimal': 2, //禁止数字字面量中使用前导和末尾小数点
    'no-func-assign': 2, //禁止对 function 声明重新赋值
    'no-implied-eval': 2, //禁止使用隐式eval
    'no-inner-declarations': [2, 'functions'], //禁止在嵌套的块中出现变量声明或 function 声明
    'no-invalid-regexp': 2, //禁止无效的正则表达式
    'no-irregular-whitespace': 2, //禁止在字符串和注释之外不规则的空白
    'no-iterator': 2, //禁止使用__iterator__ 属性
    'no-label-var': 2, //label名不能与var声明的变量名相同
    'no-labels': [2, { //禁止标签声明
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2, //禁用不必要的嵌套块
    'no-mixed-spaces-and-tabs': 2, //禁止混用tab和空格
    'no-multi-spaces': 2, //禁止使用多个空格
    'no-multi-str': 2, //禁止使用多行字符串
    'no-multiple-empty-lines': [2, { //不允许多个空行
      'max': 1
    }],
    'no-native-reassign': 2, //不能重写native对象
    'no-negated-in-lhs': 2, //in 操作符的左边不能有!
    'no-nested-ternary': 0, //禁止使用嵌套的三目运算
    'no-new': 2, //禁止在非赋值或条件语句中使用 new 操作符
    'no-new-func': 0, //禁止对 Function 对象使用 new 操作符'
    'no-new-object': 2, //禁止使用new Object()
    'no-new-require': 2, //禁止使用new require
    'no-new-symbol': 2,
    'no-new-wrappers': 2, //禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-obj-calls': 2, //禁止把全局对象作为函数调用
    'no-octal': 2, //禁止使用八进制数字
    'no-octal-escape': 2, //禁止使用八进制转义序列
    'no-path-concat': 2, //禁止对 dirname 和 filename进行字符串连接
    'no-proto': 2, //禁止使用__proto__属性
    'no-redeclare': 2, //禁止使用 var 多次声明同一变量
    'no-regex-spaces': 2, //禁止在正则表达式字面量中使用多个空格
    'no-return-assign': [2, 'except-parens'], //禁止在 return 语句中使用赋值语句
    'no-self-assign': 2, //禁止自我赋值
    'no-self-compare': 2, //禁止自身比较
    'no-sequences': 2, //禁用逗号操作符
    'no-shadow-restricted-names': 2, //禁止 var 声明 与外层作用域的变量同名
    'no-spaced-func': 2, //禁止 function 标识符和括号之间出现空格
    'no-sparse-arrays': 2, //禁用稀疏数组
    'no-prototype-builtins': 0, //禁止直接使用Object.prototypes 的内置属性
    'no-this-before-super': 2, //在调用super()之前不能使用this或super
    'no-throw-literal': 2, //禁止抛出字面量错误 throw "error"
    'no-trailing-spaces': 2, //禁用行尾空格
    'no-undef': 2, //禁用未声明的变量，除非它们在 /global / 注释中被提到
    'no-undef-init': 2, //禁止将变量初始化为 undefined
    'no-unexpected-multiline': 2, //禁止出现令人困惑的多行表达式
    'no-unmodified-loop-condition': 2, //禁用一成不变的循环条件
    'no-unneeded-ternary': [2, { //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
      'defaultAssignment': false
    }],
    'no-unreachable': 2, //禁止在return、throw、continue 和 break语句之后出现不可达代码
    'no-unsafe-finally': 2,
    'no-use-before-define': 2, //不允许在变量定义之前使用它们
    'no-unused-vars': [2, { //禁止出现未使用过的变量
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2, //禁止不必要的 .call() 和 .apply()
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2, //禁止属性前有空白
    'no-with': 2,
    'one-var': [2, { //强制函数中的变量要么一起声明要么分开声明
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', { //强制操作符使用一致的换行符
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'], //块语句内行首行尾是否要空行
    'quotes': [2, 'single', { //强制使用一致的反勾号、双引号或单引号
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'], //要求或禁止使用分号而不是 ASI
    'semi-spacing': [2, { //强制分号之前和之后使用一致的空格
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'], //强制在块之前使用一致的空格
    'space-before-function-paren': [2, 'never'], //强制在 function的左括号之前使用一致的空格
    'space-in-parens': [2, 'never'], //强制在圆括号内使用一致的空格
    'space-infix-ops': 2, //要求操作符周围有空格
    'space-unary-ops': [2, { //强制在一元操作符前后使用一致的空格
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', { //强制在注释中 // 或 /* 使用一致的空格
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'],
    'use-isnan': 2, //要求使用 isNaN() 检查 NaN
    'valid-typeof': 2, //强制 typeof 表达式与有效的字符串进行比较
    'wrap-iife': [2, 'any'], //立即执行函数表达式的小括号风格
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'], //禁止尤达条件
    'prefer-const': 2, //首选const
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, //禁用 debugger
    'object-curly-spacing': [2, 'always', { //强制在花括号中使用一致的空格
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'] //强制数组方括号中使用一致的空格
  }
}
