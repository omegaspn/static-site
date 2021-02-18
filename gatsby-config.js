/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		{
			resolve: `gatsby-plugin-material-ui`,
			options: {
				stylesProvider: {
					injectFirst: true,
				},
			},
		},
		"gatsby-plugin-styled-components",
		{
			resolve: "gatsby-plugin-eslint",
			options: {
				stages: ["develop"],
				extensions: ["js", "jsx"],
				exclude: ["node_modules", ".cache", "public"],
			},
		},
	],
};
