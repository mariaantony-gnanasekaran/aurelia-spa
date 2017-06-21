/*
 * At this time, SystemJS doesn't seem to work with Babel ;(
 * We will update this configuration once a SystemJS team member corrects the issue.
 * In the mean time, for getting started, you can use TypeScript in-browser to do pure ES 2015 as well.
*/
System.config({
  defaultJSExtensions: true,
  transpiler: 'babel',
  babelOptions: {

  },
  baseURL: 'src',
  map: {
    babel: 'https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.min.js'
  }
});