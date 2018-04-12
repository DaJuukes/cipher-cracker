module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "plugins": [
      "mocha"
    ],
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 8,
        "ecmaFeatures": {

        }
    },
    "env": {
        "node": true,
        "es6": true,
        "mocha": true
    },
    "globals": {
      "io": true,
      "payment": true
    },
    "rules": {
        "no-console":0,
        "no-unused-vars": 1,
        "no-case-declarations": 0,
        "indent": [
            "warn"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
