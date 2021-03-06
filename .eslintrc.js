module.exports = {
    "extends": ["react-app", "airbnb"],
	"rules": {
		"prettier/prettier": "error",
		"quotes": [
			2,
			"single",
			{
				"avoidEscape": true,
				"allowTemplateLiterals": true
			}
		],
		"prettier/prettier": [
			"error",
			{
				"trailingComma": "es5",
				"singleQuote": true,
				"printWidth": 80
			}
		]
	},
    "plugins": ["prettier"]

};